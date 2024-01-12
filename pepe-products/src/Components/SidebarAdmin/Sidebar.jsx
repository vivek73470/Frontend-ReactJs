import React from 'react'
import '../../css/sidebar.css';
import Dashboard from '../../Pages/Dashboard';
import Profile from '../../Pages/Profile';
import Delete from '../../Pages/Delete';
import Logout from '../../Pages/Logout';
import Addproduct from '../../Pages/Addproduct';

function Sidebar({ handleLinkClick }) {

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

                            <button onClick={() => handleLinkClick(<Dashboard />)}>Dashboard </button>
                            <button onClick={() => handleLinkClick(<Profile />)}>Profile</button>
                            <button onClick={() => handleLinkClick(<Addproduct />)}>Add Product </button>
                            <button onClick={() => handleLinkClick(<Delete />)}> Delete Product </button>

                        </ul>
                    </div>
                    <div className='sidebar-screen-wrapper-logout'>
                        <button onClick={() => handleLinkClick(<Logout />)}> Logout</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar