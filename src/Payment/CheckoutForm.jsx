import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + parseInt(item.price) * item.quantity, 0);
    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, totalPrice])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            // console.log('[error]', error);
            setError(error.message);
        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            // console.log('confirm error')
        }
        else {
            // console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    cartIds: cart.map(item => item._id),
                    productIds: cart.map(item => item.productId),
                    status: 'pending'
                }

                const res = await axiosPublic.post('/payments', payment);
                // console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks for completing payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/carts')
                }

            }
        }
    }
    return (
        <Card  className="max-w-2xl mx-auto my-16 ">
            <h5 className="mx-auto text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
        Total amount: ₹ {totalPrice} 
      </h5>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Button className=" w-1/6" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </Button>
            {
                error && <small className="text-red-700">{error}</small>
            }
            {
                transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>
            }

        </form>
        </Card>
    );
};

export default CheckoutForm;