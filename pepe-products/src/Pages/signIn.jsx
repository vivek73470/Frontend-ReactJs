import React, { useState } from 'react';
import '../css/sign.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext';

const SignIn = () => {
  const {toggleAuth }= React.useContext(AuthContext);
  const initState = {
    email: '',
    password: ''
  };

 const [formData, setFormData] = useState(initState);
const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    
    let allUsers = JSON.parse(localStorage.getItem('users')) || [];
    let isUserFound = false;

    // Check if provided credentials match any user data

    allUsers.forEach((user) => {
      if (formData.email === user.email && formData.password === user.password) {
        isUserFound = true;
      toggleAuth();  // Set authentication to true (or log in)
        navigate("/adminpage")
      }
    });

    if (!isUserFound) {
      alert('Email or password is incorrect.');
    }
  };


  return (
    <>
<div className='sign-incard'>
    <div className='login-card'>
      <h1 className='welcome'>Admin SignIn !</h1>
      <p className='content'>Enter your email and password to sign in!</p>

      <form className='content-form' onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          placeholder='Email'
          className='form-content-input'
          value={formData.email}
          onChange={handleChange}
          required
        />
      
        <br />
        <input
          name='password'
          type='password'
          placeholder='Password'
          className='form-content-input'
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <br />
         <div  className='form-button'>
        <button id='btn-frm'>Submit</button>
        </div>
      </form>
      </div>
      </div>
    </>
  );
};

export default SignIn;
