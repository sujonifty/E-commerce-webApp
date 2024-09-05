import { Card } from "flowbite-react";
import PropTypes from 'prop-types';

const ProductCards = ({ item }) => {
    const { title, image,  category, price, discount, prePrice, description } = item;
    
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
                    href="#"
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