import React from 'react'
import { useState } from 'react'
import '../css/sign.css'
import { useNavigate } from 'react-router-dom';

const initState = {
  username: '',
  email: '',
  password: ''

};

function Signup() {
  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData((prevformData) => ({
      ...prevformData,
      [e.target.name]: e.target.value

    }));


  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form fields after submission
    setFormData(initState);
    navigate("/");
  };


  return (
    <>
      <div className='sign-incard'>
        <div className='login-card'>
          <h1 className='welcome'>Please Register</h1>
          <p className='content'>Enter your name, email and password to sign up!</p>

          <form className='content-form' onSubmit={handleSubmit}>
            <input
              name='username'
              type='text'
              className='form-content-input'
              id='form-content-name'
              placeholder='Name'
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              name='email'
              type='email'
              className='form-content-input'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              name='password'
              type='password'
              className='form-content-input'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <div className='form-button'>
              <button id='btn-frm'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup