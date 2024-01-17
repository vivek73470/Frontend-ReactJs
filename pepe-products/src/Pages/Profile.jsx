import React from 'react'
import '../css/profile.css'
import { useState } from 'react'


function Profile() {
  const[data,setData]=useState({
    username:'',
    email:'',
    DOB:'',
    gender:'',
    address:'',
    number:''
  })


  const handleChange =(e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }

 

async function editProfile(){
  try{
let res = await fetch(`http://localhost:3500/profile`,{
  method:'PUT',
  body:JSON.stringify(data),
  headers:{
    'Content-Type':'application/json',
  }
})

let updatedData = await res.json();
console.log(updatedData)
setData({
  username:'',
  email:'',
  DOB:'',
  gender:'',
  address:'',
  number:''
})
  }
  catch(err){
    console.log(err)
  }
}
  const handleSubmit =  (e) =>{
    e.preventDefault();
    setData(data)
   }


  return (
    <>
    <form className='Profile-Form' onSubmit={handleSubmit}>
    <input
    name='username'
    type='text'
    placeholder='full name'
    value={data.username}
    onChange={handleChange}
    />
    <br/>
    <input
    name='email'
    type='email'
    placeholder='email'
    value={data.email}
    onChange={handleChange}
    />
    <br/>
    <input
    name='DOB'
    type='date'
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
    name='number'
    type='tel'
    placeholder='Phone Number'
    value={data.number}
    onChange={handleChange}
    />
    <br/>
    <input
    name='address'
    type='text'
    placeholder='Address'
    value={data.address}
    onChange={handleChange}
    />
    <br/>
    <button type='submit' onClick={editProfile}>Update</button>
    </form>
    </>
  )
}

export default Profile