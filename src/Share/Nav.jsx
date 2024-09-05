import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../Provider/AuthProvider";
import demoImg from "../assets/Account.png"
const Nav = () => {
    const { user, logOut } = useContext(authContext);
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
        <Navbar fluid rounded>
            <Navbar.Brand >
                <div className="flex items-center justify-center text-white text-2xl font-bold w-7 h-7  bg-blue-500 rounded-full ">
                    F
                </div>
                <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Funi<span className="text-[#1E99F5]">Flex</span></p>
            </Navbar.Brand>
            {
                user ?
                    <>
                        <div className="flex md:order-2">
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img={user.photoURL? user.photoURL: demoImg} rounded />
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
                            <Navbar.Link href="#" active>
                                Home
                            </Navbar.Link>
                            <Navbar.Link href="#">Products</Navbar.Link>
                            <Navbar.Link href="#">Services</Navbar.Link>
                            <Navbar.Link href="#">Categories</Navbar.Link>
                            <Navbar.Link href="#">Custom</Navbar.Link>
                            <Navbar.Link href="#">Blog</Navbar.Link>
                        </Navbar.Collapse>
                    </>
                    :
                    <>
                        

                        <Navbar.Collapse>
                            <Navbar.Link href="#" active>
                                Home
                            </Navbar.Link>
                            <Navbar.Link href="#">Products</Navbar.Link>
                            <Navbar.Link href="#">Services</Navbar.Link>
                            <Navbar.Link href="#">Categories</Navbar.Link>
                            <Navbar.Link href="#">Custom</Navbar.Link>
                            <Navbar.Link href="#">Blog</Navbar.Link>
                        </Navbar.Collapse>
                        <Navbar.Link href="/login">Login</Navbar.Link>
                    </>
            }

        </Navbar>

    );
};

export default Nav;