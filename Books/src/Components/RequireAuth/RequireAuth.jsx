import React, { Children } from "react";
import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

//is to verify if the user is authenticated
//if yes,then naviagte him/her to the protected route
//else take then to the login page
export const RequireAuth=({children})=>{
 console.log("children",children)
   
    const isAuth=useSelector(state=>state.authreducer.isAuth)
    console.log(isAuth)
    const token=useSelector(store=>store.authreducer.token)
    const location=useLocation()
    console.log("Inside require auth",location)
    // if(!isAuth && !token){
    //     return <Navigate to="/login" replace state={{data:location.pathname}}
    //      />
    // }

    if(isAuth){
        return <Navigate to="/login" replace state={{data:location.pathname}}
         />
    }
    return children
}