import React from 'react'
import '../../css/sidebar.css';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Dashboard from '../../Pages/Dashboard';

function Sidebar() {

  const { toggleAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    toggleAuth();// Set authentication to false
    navigate('/signin');
  }



  return (
    <>
      <div className='sidebar-screen'>
        <div className='sidebar-screen-wrapper'>
          <div className='sidebar-screen-wrapper-adminpanel'>
            <h2>
              Admin Panel
            </h2>
          </div>
          <div className='sidebar-screen-wrapper-listdetails'>
            <ul className='sidebar-screen-wrapper-listdetails-ul'>

              <li><NavLink to="dashboard" activeClassName="active-link"> Dashboard</NavLink> </li>
              <li><NavLink to="addproduct" activeClassName="active-link">Add Products</NavLink>
              </li>
              <li> <NavLink to="profile" activeClassName="active-link"> Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className='sidebar-screen-wrapper-logout'>
            {/* This button triggers the handleLogout function when clicked. */}
            <button onClick={handleLogout}> Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar