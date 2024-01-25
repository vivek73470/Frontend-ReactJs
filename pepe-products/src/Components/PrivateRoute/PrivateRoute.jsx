import React from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

function PrivateRoute({children}){
    const {isAuth} =React.useContext(AuthContext);
    const token =localStorage.getItem('userId')
    console.log('token',token);
//not authenticated becoz initial set to false in authcontext
    if(!token){  
        return <Navigate to="/signin"/>;
    }
    else{
       < Navigate to="/dashboard"/>
    }

    return children;
}

export default PrivateRoute;