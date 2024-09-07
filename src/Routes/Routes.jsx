import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import MyCart from "../Pages/MyCart/MyCart";

export const router = createBrowserRouter([
    {
      path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "products",
                element: <Products></Products>,
            },
            {
                path: "carts",
                element: <MyCart></MyCart>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "login",
                element: <Login></Login> ,
            },
        ]
    },

  ]);