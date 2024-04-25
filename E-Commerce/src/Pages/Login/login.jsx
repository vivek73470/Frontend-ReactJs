import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/auth/action';

function Login() {
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

    }
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