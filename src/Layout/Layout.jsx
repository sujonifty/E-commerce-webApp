import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Share/Nav";
import Footers from "../Share/Footers";


const Layout = () => {
    const location =  useLocation();
    const isLogin = location.pathname.includes('login');
    return (
        <div>
            
            {isLogin || <Nav></Nav>}
            <Outlet></Outlet>
           {isLogin || <Footers></Footers>}
        </div>
    );
};

export default Layout;