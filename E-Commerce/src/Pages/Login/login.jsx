import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/auth/action';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
    const authStatus = useSelector(store => store.AuthReducer.auth)
    const location = useDispatch();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[formData, setFormData]=useState({ email: '', password: '' })

    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
   console.log(e.target.value)
    }



    const Submithandler =(e)=>{
        e.preventDefault();
        dispatch(signIn(formData));
        setFormData({ email: '', password: '' });
       
    }
    useEffect(()=>{
        if(location?.state && authStatus){
            navigate(location.state,{replace:true})

        }
    },[location?.state, navigate,authStatus])
    console.log(location)
  return (
   <>
<div>
    <h2>Login</h2>
    <form onSubmit={Submithandler}>
        <div>
            <label htmlFor="">Email</label>
            <input 
            name='email'
            type="email"
            id='email'
            placeholder='enter email'
            value={formData.email}
            onChange={handleChange}
             />
        </div>
        <div>
        <label htmlFor="">password</label>
            <input 
            name='password'
            type="password"
            id='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
             />
        </div>
        <input type="submit" />
    </form>
</div>
   </>
  )
}

export default Login