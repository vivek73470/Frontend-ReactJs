import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../Redux/auth/action';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[formData, setFormData]=useState({ email: '', password: '' })


    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const Submithandler = async (e) => {
        e.preventDefault();
        dispatch(signIn(formData));
            const response = await dispatch(signIn(formData));
            if (response.status ) {
                setFormData({ email: '', password: '' });
                navigate('/products');
            }
            if(!response.status){
                alert("wrong password OR email")
            }   
    };

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