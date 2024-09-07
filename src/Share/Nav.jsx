import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import demoImg from "../assets/Account.png"
import { CiShoppingCart } from "react-icons/ci";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    // console.log('cart data',cart)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "LogOut Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => console.log(error))
    }
    return (
        <Navbar className="border-b-2" fluid rounded>
            <Navbar.Brand >
                <div className="flex items-center justify-center text-white text-2xl font-bold w-7 h-7  bg-blue-500 rounded-full ">
                    F
                </div>
                <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Funi<span className="text-[#1E99F5]">Flex</span></p>
            </Navbar.Brand>
            {
                user ?
                    <>
                        <div className="flex md:order-2 space-x-2">
                            <Link to="/carts" className="flex mr-4">
                                <CiShoppingCart className=" text-3xl" />
                                <h1 className="  text-black -ml-l "><span>{cart.length}</span></h1>
                            </Link>
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img={user.photoURL ? user.photoURL : demoImg} rounded />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">{user.displayName}</span>
                                    <span className="block truncate text-sm font-medium">{user.email}</span>
                                </Dropdown.Header>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>update Profile</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                            </Dropdown>
                            <Navbar.Toggle />
                        </div>

                        <Navbar.Collapse>
                            <Navbar.Link href="/" active>
                                Home
                            </Navbar.Link>
                            <Navbar.Link href="/products">Products</Navbar.Link>
                            <Navbar.Link href="#">Services</Navbar.Link>
                            <Navbar.Link href="#">Categories</Navbar.Link>
                            <Navbar.Link href="#">Custom</Navbar.Link>
                            <Navbar.Link href="#">Blog</Navbar.Link>
                        </Navbar.Collapse>
                    </>
                    :
                    <>


                        <div className="flex md:order-2 space-x-2">  
                            <Button><Link to="/login">Login</Link></Button>
                            <Navbar.Toggle />
                        </div>
                        <Navbar.Collapse>
                            <Navbar.Link href="/" active>
                                Home
                            </Navbar.Link>
                            <Navbar.Link href="/products">Products</Navbar.Link>
                            <Navbar.Link href="#">Services</Navbar.Link>
                            <Navbar.Link href="#">Categories</Navbar.Link>
                            <Navbar.Link href="#">Custom</Navbar.Link>
                            <Navbar.Link href="#">Blog</Navbar.Link>
                        </Navbar.Collapse>

                    </>
            }

        </Navbar>

    );
};

export default Nav;