import React from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

function PrivateRoute({children}){
    const {isAuth} =React.useContext(AuthContext);
    
//not authenticated becoz initial set to false in authcontext
    if(!isAuth){  
        return <Navigate to="/signin"/>;
    }

    return children;
}

export default PrivateRoute;