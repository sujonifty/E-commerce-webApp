import { Carousel } from "flowbite-react";

const Home = () => {
    return (
        <div className="mt-10 mb-20 ">
            <div className="h-[50rem] sm:h-64 xl:h-60 2xl:h-96">
                <Carousel pauseOnHover className='h-[30rem]'>
                    <img className='object-fill h-full w-full' src="https://i.ibb.co.com/9gQqB2n/banner1.webp" alt="..." />
                    <img className='object-fill h-full w-full' src="https://i.ibb.co.com/sj6WYWq/s11.jpg" alt="..." />
                    <img className='object-fill h-full w-full' src="https://i.ibb.co.com/QF7hHzc/s3.webp" alt="..." />
                    <img className='object-fill h-full w-full' src="https://i.ibb.co.com/j3WpLM1/s17.jpg" alt="..." />
                    <img className='object-fill h-full w-full' src="https://i.ibb.co.com/26ncgFp/s14.jpg" alt="..." />
                </Carousel>
            </div>
            <section className=" md:mt-40 py-10">
            <div className="container mx-auto p-4 space-y-2 text-center">
                <h2 className="text-5xl font-bold">About Us</h2>
                <p className="text-base-content w-9/12 mx-auto mb-16">
                At FuniFlex, we’re passionate about bringing you the best in quality and style. As a leading e-commerce platform, we offer a diverse range of products that cater to your every need. From everyday essentials to luxury finds, we’re here to make shopping simple, convenient, and enjoyable. With a focus on customer satisfaction, fast shipping, and secure shopping, we aim to deliver a seamless online shopping experience
                </p>
            </div>
            <div className="container bg-gray-50 py-10 mx-auto px-6 text-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                        Our mission is to provide an unparalleled online shopping experience by offering high-quality products, exceptional customer service, and seamless transactions. We are dedicated to meeting the diverse needs of our customers, ensuring satisfaction at every step, and building lasting relationships. Through innovation and commitment, we strive to make shopping more convenient, accessible, and enjoyable for everyone.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                        Our vision is to revolutionize the online shopping experience by becoming the most trusted and customer-centric e-commerce platform. We aspire to connect people with the products they love while setting new standards for quality, innovation, and service. Through continuous growth and improvement, we aim to empower our customers and create a future where shopping online is as easy as a click.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                       <p>
                       Our values define who we are and guide every decision we make. We believe in integrity, transparency, and excellence in all our actions. Customer satisfaction is at the heart of everything we do, and we are committed to delivering quality, innovation, and trust. We embrace diversity, foster collaboration, and strive to create a positive impact on our community and the environment
                       </p>
                    </div>
                </div>
            </div>
        </section>
        </div>

    );
};

export default Home;