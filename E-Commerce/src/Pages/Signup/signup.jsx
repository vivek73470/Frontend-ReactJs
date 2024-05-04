import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Redux/auth/action';

function Signup() {
    const dispatch = useDispatch();
const[formData,setFormData] = useState(
    { username:'', email: '', password: '' }
)

const handleChange =(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
}

const Submithandler=(e)=>{
    e.preventDefault();
    dispatch(signUp(formData))
    setFormData(  { username:'', email: '', password: '' })
}

  return (
   <>
   <div>
    <h2>Signup</h2>
    <form onSubmit={Submithandler}>
    <div>
            <label htmlFor="">UserName</label>
            <input 
            name='username'
            type="text"
            id='text'
            placeholder='enter name'
            value={formData.username}
            onChange={handleChange}
             />
        </div>
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

export default Signup