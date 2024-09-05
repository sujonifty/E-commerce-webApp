import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png"
import googleIcon from "../../assets/icons-google.png"
import appleIcon from "../../assets/icons-apple.png"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex justify-center items-center">

            <div className="w-3/5 mx-auto">
                <Card className=" max-w-lg md:p-10 bg-[#FAFAFA]">
                    <h4 className="text-3xl font-medium">Welcome Back!</h4>
                    <p className="text-[#707070]">Enter your Credentials to access your account</p>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 ">
                                <Label value="Email Address" />
                            </div>
                            <TextInput name="email1" type="email" placeholder="Enter your email " required />
                        </div>
                        <div className="relative">
                            <div className="mb-2 ">
                                <Label value="Password" />
                            </div>
                            <TextInput name="password1" type={showPassword ? "text" : "password"} placeholder="Enter your password" required />
                            <span className="absolute right-5 bottom-3" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoMdEyeOff /> : <IoMdEye />

                                }
                            </span>
                        </div>
                        <small className="text-blue-700 text-right">Forgot Password</small>

                        <div className="flex items-center gap-2">
                            <Checkbox />
                            <Label name="condition">I agree to the <Link>Terms & Policy</Link></Label>
                        </div>
                        <Button type="submit" className="text-white bg-black">Submit</Button>

                    </form>
                    <div className="flex items-center justify-center my-4">
                        <div className="h-px w-full bg-gray-300"></div>
                        <span className="px-4 text-gray-500">or</span>
                        <div className="h-px w-full bg-gray-300"></div>
                    </div>
                    <div className="flex space-x-4">
      <Button color="gray" className="flex items-center">
        {/* <FaGoogle className="mr-2" />  */}
        <img src={googleIcon} alt="google icon" className="mr-2"/>
        Login with Google
      </Button>
      
      <Button color="gray" className="flex items-center">
      <img src={appleIcon} alt="apple icon" className="mr-2"/>
        Login with Apple
      </Button>
      
    </div>
    <p className="mx-auto">Have an account? <Link className="text-blue-700">Sign Up</Link></p>

                </Card>
            </div>
            {/* <div className=" flex-1 w-2/5 bg-blue-400">
                <div className="relative">
                    <img className="w-full" src={loginImg} alt="login image" />

                </div>
                <div className="bg-rose-950 absolute top-0 bottom-0 left-0 right-0">
                    <div className=" flex items-center justify-center text-white text-2xl font-bold w-32 h-32 bg-blue-500 rounded-full">F</div>
                    <h3 className="text-4xl font-bold">Furni<span className="text-[#1E99F5]">Flex</span></h3>
                    <p>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>
            </div> */}
            <div className="flex-1 w-2/5 relative">
                <img className="w-full rounded-xl" src={loginImg} alt="login image" />

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

export default Login;