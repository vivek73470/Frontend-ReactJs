import React, { useState } from 'react'
import '../../css/sidebar.css';
import { useNavigate, NavLink } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
import { MdOutlineDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";


function Sidebar({Children}) {
  const[isOpen,setIsOpen] =useState(false);
  const toggle =() =>setIsOpen(!isOpen);
  // const { toggleAuth } = React.useContext(AuthContext);
  // const navigate = useNavigate();
  const menuItem = [
    {
      title: 'Dashboard',
      path: 'dashboard',
      icon: <MdOutlineDashboard />
    },
    {
      title: 'Product',
      path: 'addproduct',
      icon: <MdOutlineProductionQuantityLimits />,
    },
    {
      title: 'Profile',
      path: 'profile',
      icon: <CgProfile />
      ,
    },
    {
      title: 'Setting',
      path: 'setting',
      icon: <CiSettings />,
    },
    {
      title: 'Logout',
      path: 'logout',
      icon: <TbLogout />
    },
  ]


  // const handleLogout = () => {
  //   toggleAuth();// Set authentication to false
  //   navigate('/login');
  // }



  return (
    <>
      <div className='sidebar-screen'>
        <div style={{width:isOpen ? "300px" :  "50px"}} className='sidebar-screen-wrapper'>
          <div className='top-section'>
            <h1 style={{display:isOpen ? "block" :  "none"}} className='logo'>Logo</h1>
            <div style={{marginLeft: isOpen ? "50px" :  "0px"}} className='bars'>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((elem) => (
              <NavLink to={elem.path} key={elem.path} className="link" activeClassName="active">
                <div className='"icon'>{elem.icon}</div>
                <div style={{display:isOpen ? "block" :  "none"}} className="link_text">{elem.title}</div>
              </NavLink>
            ))
          }
        </div>
        <main>{Children}</main>
      </div>
    </>
  )
}

export default Sidebar









// <div className='sidebar-screen-wrapper-logout'>
// {/* This button triggers the handleLogout function when clicked. */}
// <button onClick={handleLogout}> Logout</button>
// </div>