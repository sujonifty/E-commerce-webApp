import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png"
import googleIcon from "../../assets/icons-google.png"
import appleIcon from "../../assets/icons-apple.png"
import { AuthContext } from "../../Provider/AuthProvider";
import { auth } from "../../Firebase/Firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const handleRegister = () => {
        const name = `${firstName} ${lastName}`;
        console.log(name)
        setError("");

        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('password must be an Uppercase & LowerCase letter');
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result);

                // update profile 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    // photoURL: photo,

                })
                    .then(() => {
                        setUser((prevUser) => {
                            return { ...prevUser, displayName: name, email: email }
                        })
                        console.log("profile updated");
                    })
                    .catch(error => {
                        setError(error.message);
                    })
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="flex justify-center items-center">

            <div className=" max-w-[55%] mx-auto">
                <Card className=" max-w-screen md:p-10 bg-[#FAFAFA]">
                    <h4 className="text-3xl font-medium">Welcome Back!</h4>
                    <h3 className="text-4xl font-bold">
                        Furni<span className="text-[#1E99F5]">Flex</span>
                    </h3>
                    <p className="text-[#707070]">Signup for purchase your desire products</p>
                    <form className="flex flex-col gap-4">
                        <div className="flex space-x-4">
                            <div>
                                <div className="mb-2 text-[#707070] ">
                                    <Label value="First name(optional)" />
                                </div>
                                <TextInput
                                    name="name1"
                                    type="test"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    required />
                            </div>
                            <div>
                                <div className="mb-2 text-[#707070] ">
                                    <Label value="Last name(optional)" />
                                </div>
                                <TextInput
                                    name="name2"
                                    type="text"
                                    placeholder="Last name "
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                    required />
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 text-[#707070] ">
                                <Label value="Email Address" />
                            </div>
                            <TextInput
                                name="email"
                                type="email"
                                placeholder="Enter your email "
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required />
                        </div>
                        <div className="relative">
                            <div className="mb-2 text-[#707070] ">
                                <Label value="Password" />
                            </div>
                            <TextInput
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required />
                            <span className="absolute right-5 bottom-3" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoMdEyeOff /> : <IoMdEye />

                                }
                            </span>
                        </div>
                        {
                            error && <small className="text-red-700">{error}</small>
                        }
                        <div className="flex items-center gap-2">
                            <Checkbox required />
                            <Label name="condition">I agree to the <Link><u>Terms & Policy</u></Link></Label>
                        </div>
                        <Button type="button" onClick={handleRegister} className="text-white bg-black">Signup</Button>

                    </form>
                    <div className="flex items-center justify-center my-4">
                        <div className="h-px w-full bg-gray-300"></div>
                        <span className="px-4 text-gray-500">or</span>
                        <div className="h-px w-full bg-gray-300"></div>
                    </div>
                    <div className="flex space-x-4">
                        <Button color="gray" className="flex items-center">
                            {/* <FaGoogle className="mr-2" />  */}
                            <img src={googleIcon} alt="google icon" className="mr-2" />
                            Login with Google
                        </Button>

                        <Button color="gray" className="flex items-center">
                            <img src={appleIcon} alt="apple icon" className="mr-2" />
                            Login with Apple
                        </Button>

                    </div>
                    <p className="mx-auto">Have an account? <Link to='/login' className="text-blue-700">Login</Link></p>

                </Card>
            </div>

            <div className="flex-1 max-w-[45%] h-full relative">
                <img className="w-full" src={loginImg} alt="login image" />

                {/* Overlay */}
                <div className="absolute rounded-xl inset-0 bg-black opacity-70 bg-opacity-70 flex flex-col items-center justify-center p-4">
                    <div className="flex items-center justify-center text-white text-2xl font-bold w-32 h-32 bg-blue-500 rounded-full mb-4">
                        F
                    </div>
                    <h3 className="text-4xl font-bold text-white">
                        Furni<span className="text-[#1E99F5]">Flex</span>
                    </h3>
                    <p className="text-white text-center mt-2">
                        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;