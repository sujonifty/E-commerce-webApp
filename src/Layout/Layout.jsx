import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer";
import Nav from "../Share/Nav";


const Layout = () => {
    return (
        <div>
            <div className="max-w-[90%] mx-auto">
                <Nav></Nav>
                <div className="min-h-[calc(100vh-550px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;