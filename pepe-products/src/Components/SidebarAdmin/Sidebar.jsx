import React, { useState } from 'react'
import '../../css/sidebar.css';
import { useNavigate, NavLink } from 'react-router-dom';
import { MdOutlineDashboard, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

// takes a prop named Children.
function Sidebar({ Children }) {
  const [isOpen, setIsOpen] = useState(true);

  // The toggle function is defined to toggle the value of isOpen between true and false when called.
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

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
    }
  ]


  const handleLogout = () => {
    localStorage.removeItem('userId')
    navigate('/signin');
  }



  return (
    <>
      <div className='sidebar-screen'>
      {/* If isOpen is true, the width is set to "300px"; otherwise, if isOpen is false, the width is set to "105px" */}
        <div style={{ width: isOpen ? "300px" : "105px" }} className='sidebar-screen-wrapper'>
          <div className='top-section'>
            <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>Admin Panel</h1>
            <div style={{ marginLeft: isOpen ? "105px" : "0px" }} className='bars'>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((elem) => (
              <NavLink
                to={elem.path}
                key={elem.path}
                className="link"
                activeClassName="active"
              >
                <div className='"icon'>{elem.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{elem.title}</div>
              </NavLink>
            ))
          }
          <div className='sidebar-log'>
            <NavLink
              to="/signin"
              className="link"
              activeClassName="active"
              onClick={() => handleLogout()}
            >
              <div className="icon">
                <TbLogout />
              </div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Logout</div>
            </NavLink>
          </div>
        </div>
        <main>{Children}</main>
      </div>
    </>
  )
}

export default Sidebar
