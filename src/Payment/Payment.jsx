import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    return (
        <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    );
};

export default Payment;