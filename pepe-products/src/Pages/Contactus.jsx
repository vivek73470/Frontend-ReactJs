import React from 'react'
import '../css/contact.css'
import { useState } from 'react'
import Footer from '../Components/Footer/footer'
import Navbar from '../Components/Header/Header'

function Contactus() {
  const initState ={
    name: "",
    email: "",
    phone: "",
    message: ""
  }
const[formData,setFormData]= useState(initState);

const handleChange = (e) =>{
  const{name,value}=e.target;
  setFormData((prevformData) =>({
    ...prevformData,
    [name]:value
    
  }));

  console.log(`${name}: ${value}`);
}

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(formData);
  setFormData(initState);

}
  return (
    <>
    <Navbar/>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
               />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
               />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              name="phone"
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              >
              </textarea>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contactus