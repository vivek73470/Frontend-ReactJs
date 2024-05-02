import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, useLocation } from 'react-router-dom'

function AuthWrapper({children}) {
    const location = useLocation()
    const authStatus = useSelector(store => store.AuthReducer.auth)
    console.log("abc",authStatus)

    if(authStatus){
   return children;
}
return <Navigate to='/login' replace={true} state='/cart'/>
    
  return (

<>
</>
  )
}

export default AuthWrapper