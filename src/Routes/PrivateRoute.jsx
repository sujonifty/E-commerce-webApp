import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const location = useLocation();
     const {user, loading}= useContext(authContext);
     if(loading){
         return <span className="loading loading-bars loading-lg"></span>
     }
     if(user){
         return children;
     }
 
     return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
 };
 PrivateRoute.propTypes = {
    children: PropTypes.node,
}
 export default PrivateRoute;