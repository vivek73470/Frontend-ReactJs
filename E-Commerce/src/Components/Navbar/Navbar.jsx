import React from 'react'
import './navbar.css'
import Profile from '../Profile/Profile'
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCounter from '../CartCounter/CartCounter';
import { Link, Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navbar-screen'>
        <div className='navbar-wrapper'>
          <div>
            <h4>logo</h4>
          </div>
          <div className='navbar-cart'>
            <Link as={RouterLink} to='/cart' >
              <div className='cart-counter'>
                <CartCounter />
              </div>
              <MdOutlineShoppingCart />
            </Link>
            <Profile />

          </div>


        </div>
      </div>

    </>
  )
}

export default Navbar