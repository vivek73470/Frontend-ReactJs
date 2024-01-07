import React, { useEffect, useState } from 'react'
import '../../css/admin.css'
import Profile from '../../Pages/Profile'
import Addproduct from '../../Pages/Addproduct'
import Dashboard from '../../Pages/Dashboard';
import Delete from '../../Pages/Delete';
import Setting from '../../Pages/Setting';



function Admin() {
    const [profile, setProfile] = useState(<Dashboard/>)

    useEffect(()=>{
        setProfile(<Dashboard/>)
    },[])


    const handleLinkClick = (e) => {
        setProfile(e)
    }


    return (
        <>
            <div className='main-admin-screen'>
                <div className='admin-sidebar'>
                    <div className='sub-sidebar'>
                        <div className='admin-sidebar-heading'>
                            <h2>Admin Panel</h2>
                        </div>
                        <ul>
                            <li className='sidebar-grid'>
                                <button onClick={() => handleLinkClick(<Dashboard />)}>Dashboard</button>
                                <button onClick={() => handleLinkClick(<Profile />)}>Profile</button>
                                <button onClick={() => handleLinkClick(<Addproduct />)}>AddProduct</button>
                                <button onClick={() => handleLinkClick(<Delete />)}>DeleteProduct</button>
                                <button onClick={() => handleLinkClick(<Setting />)}>Setting</button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='admin-screen-content'>
                    <div className='admin-heading'>
                        <div className='admin-myaccount'>
                            <p>My Account</p>
                        </div>
                        <div className='admin-logout'>
                            <p>Logout</p>
                        </div>
                    </div>
                    <div className='page-content'>
                        {profile}

                    </div>
                </div>

            </div>

        </>
    )
}

export default Admin