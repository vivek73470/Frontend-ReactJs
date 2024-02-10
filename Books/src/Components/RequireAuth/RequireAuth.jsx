import React, { Children } from "react";
import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

// HOGHER ORDER FN - fn that take another fn as argument

//is to verify if the user is authenticated
//if yes,then naviagte him/her to the protected route
//else take then to the login page
export const RequireAuth=({children})=>{
   
    const isAuth=useSelector(state=>state.authreducer.isAuth)
    const token=useSelector(store=>store.authreducer.token)
    const location=useLocation()
 
    // if(!isAuth && !token){
    //     return <Navigate to="/login" replace state={{data:location.pathname}}
    //      />
    // }

    if(isAuth){
        return <Navigate to="/login" replace state={{data:location.pathname}}
       // here replace - if i am not logged then redirect to login page and here replace the login with that page that we want to access
        // state is keyword that navigate component provide and allow to take data from one path to other
         />
    }
    return children // children is keyword
}