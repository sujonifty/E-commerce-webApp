import { Avatar, Button, Card, Table } from "flowbite-react";
import useCart from "../../hooks/useCart";
import { FaPlus } from "react-icons/fa";
import { CiCircleInfo, CiSquareRemove } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosPublic = useAxiosPublic();
    const totalPrice = cart.reduce((total, item) => total + parseInt(item.price) * item.quantity, 0)
    // console.log('',cart.length)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Removed!",
                                text: "Your file has been removed.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleAddToProduct = (id) => {
        axiosPublic.put(`/carts/${id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }

            })
    }
    return (
        <>

            <div className="p-5 flex flex-col-reverse justify-evenly gap-y-16 my-16 md:flex-row-reverse">
                {/* Sidebar */}
                <div className="w-full md:w-1/4 md:ml-10">
                    <h3 className="text-3xl font-bold my-4">Order details</h3>
                    <Card className="max-w-sm">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 ">SubTotal</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">₹ {totalPrice}</div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 ">Shiping</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">Free</div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex items-center space-x-2 -mb-2 flex-1">
                                <p className="truncate ext-sm  font-medium text-gray-900 ">Estimate Tax</p>
                                <CiCircleInfo />
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">₹ 00</div>
                        </div>
                        <hr />
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 ">Total</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">₹ {totalPrice}</div>
                        </div>
                        <Button className="bg-black">
                            <Link to="/payment"><span className="-mt-[1px]">Checkout</span></Link>
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </Card>
                </div>

                {/* Product Cards */}
                {
                    cart.length !== 0 ?
                        <div className="w-full md:w-3/4 p-5">
                            <h3 className="text-3xl font-bold my-4">An overview of your order</h3>
                            <Table hoverable>

                                <Table.Body className="divide-y">
                                    {
                                        cart.map(item => (
                                            <Table.Row key={item._id} className="bg-white" >
                                                <Table.Cell className=" m-0">
                                                    <div className="rounded-xl border p-1 w-12 space-x-2 flex justify-center items-center ">
                                                        <span className="text-lg font-bold">{item.quantity}</span>
                                                        <FaPlus onClick={() => handleAddToProduct(item._id)} />
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell className="p-2">
                                                    <Avatar img={item.image} size="lg" />
                                                </Table.Cell>
                                                <Table.Cell className=" mx-0">{item.title}</Table.Cell>
                                                <Table.Cell className=" relative ">
                                                    <span className="absolute t bottom-2 right-5">₹ {item.price}</span>
                                                    <CiSquareRemove onClick={() => handleDelete(item._id)} className="absolute text-3xl top-2 right-5" />
                                                </Table.Cell>

                                            </Table.Row>
                                        ))
                                    }

                                </Table.Body>
                            </Table>

                        </div>
                        :
                        <>
                            <Card href="#" className="max-w-sm ">
                            <h3 className="text-2xl font-bold">An overview of order</h3>
                               
                                <h5 className="text-4xl mx-auto font-bold tracking-tight text-gray-400 dark:text-white">
                                    Cart is Empty!
                                </h5>

                            </Card>
                        </>

                }
            </div>
        </>
    );
};

export default MyCart;