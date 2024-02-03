import React from 'react'
import '../About/index.css'
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Header/Header'

function Aboutus() {
  return (
  <>
   <Navbar/>
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Welcome to our clothing store! We are passionate about providing high-quality, stylish clothing for all occasions.</p>
        <p>Our mission is to offer trendy and comfortable apparel that suits your unique style. From casual wear to formal attire, we have a wide range of options for everyone.</p>
        <p>At our store, customer satisfaction is our top priority. We strive to deliver excellent service and a seamless shopping experience.</p>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Aboutus