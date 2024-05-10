import React from 'react'
import './index.css'
import { useState } from 'react'
import Footer from '../../Components/Footer/footer';


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
    <div className='contact-screen'>
      <span className='contact-getin'><h2>Get in Touch with us</h2></span>
      <div className="contact-form">
        <h4 className='contact-drop'>Drop us a message</h4>
        <form className='contact-frmm' onSubmit={handleSubmit}>
          <div className="form-group">
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
           
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              >
              </textarea>
          </div>
          <input type="submit" className='contact-bnt' value="Submit"/>
        </form>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Contactus