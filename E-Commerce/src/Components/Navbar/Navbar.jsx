import React from 'react'
import './navbar.css'
import Profile from '../Profile/Profile'
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCounter from '../CartCounter/CartCounter';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";



function Navbar() {
  return (
    <>
      <div className='navbar-screen'>
        <div className='navbar-wrapper'>
          <div className='header-exclusive'>
            <p>TOPSHOP</p>
          </div>
          <div className='navbar-cart-parent'>
          <div className='header-dsp-hme'>
            <Link to='/'>
            <span className='navbar-head-homcnt'>Home</span>
            </Link>
            <Link to='/products'>
            <span className='navbar-head-homcnt'>Products</span>
            </Link>
            <Link to='/contact-us'>
            <span className='navbar-head-homcnt'>Contact</span>
            </Link>
        
          </div>
            <div class="your-events-searchstyle">
              <span className='span-search-header'>
                < CiSearch />
                <input type="search" class="your-events-searchbox-head" placeholder="What are you looking for" />
              </span>

            </div>
           <div className='navbar-cart'>
            <Link to='/orders'>
            <span className='header-registr-yr'>Your <br/>Orders</span>
            </Link>
            <Link to='/cart' >
              <div className='cart-counter'>
                <CartCounter />
              </div>
              <span className='header-cart-img'>
                <MdOutlineShoppingCart />
              </span>
            </Link>

            <Profile />
            <div className='header-login-register'>
              <Link to='/signup'>
                <span className='header-registr'>Register/</span>
              </Link>
              <Link to='/login'>
                <span className='header-registr'>Login</span>
              </Link>
            </div>
            </div>




          </div>


        </div>
      </div>

    </>
  )
}

export default Navbar