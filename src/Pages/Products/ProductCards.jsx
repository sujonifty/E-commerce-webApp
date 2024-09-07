import { Card } from "flowbite-react";
import PropTypes from 'prop-types';
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCart from "../../hooks/useCart";

const ProductCards = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { title, image, category, price, discount, prePrice, description } = item;
   const axiosPublic= useAxiosPublic();
   const [,refetch]=useCart()
   const navigate=useNavigate();
   const location=useLocation();
    // Add to cart section 
    
    const handleAddToCart = (product) => {
        if (user && user.email) {
            // Send cart item to the database
            const cartItem = {
                productId:product._id,
                email: user.email,
                title,
                image,
                price,
                quantity:1
            };
    
            axiosPublic.post('/cartdata', cartItem)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${category} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    
                navigate('/login', { state: { from: location } });
                }
                console.log(location)
            });
        }
    };
    
    return (
        <Card
            className="max-w-sm "
            imgAlt={category}
            imgSrc={image}
        >

            <h5 className="mb-1 text-xl font-medium text-gray-900 ">{title}</h5>

            <div className="flex space-x-4">
                <h5><span className="text-lg font-medium text-base-300 "> </span>₹{price}</h5>
                <h5><span className="text-lg font-medium text-base-300 "> </span><del>₹{prePrice}</del></h5>
                <h5><span className="text-lg font-medium text-red-600 "> </span>{discount} OFF</h5>
            </div>

            <h5 className="text-lg  tracking-tight text-base-300 ">
                {description}
            </h5>


            <div className="flex items-center justify-center">
                <a
                    onClick={() => handleAddToCart(item)}
                    className="w-2/3 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    );

};

ProductCards.propTypes = {
    item: PropTypes.object,
}
export default ProductCards;