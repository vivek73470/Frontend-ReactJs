import React from 'react'
import { useState } from 'react'
const initState ={
  username:'',
  email:'',
  DOB:'',
  gender:'',
  password:''

}

function Profile() {
  const[data,setData]=useState(initState)


  const handleChange =(e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit =(e) =>{
   e.preventDefault();
   console.log(data)
  
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
    <input
    name='username'
    type='text'
    placeholder='name'
    value={data.username}
    onChange={handleChange}
    />
    <br/>
    <input
    name='email'
    type='text'
    placeholder='Email'
    value={data.email}
    onChange={handleChange}
    />
    <br/>
    <input
    name='DOB'
    type='text'
    placeholder='DOB'
    value={data.DOB}
    onChange={handleChange}
    />
    <br/>
    <input
    name='gender'
    type='text'
    placeholder='Gender'
    value={data.gender}
    onChange={handleChange}
    />
    <br/>
    <input
    name='password'
    type='text'
    placeholder='Password'
    value={data.password}
    onChange={handleChange}
    />
    <br/>
    <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default Profile