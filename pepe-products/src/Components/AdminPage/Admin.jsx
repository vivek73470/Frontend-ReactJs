import React, { useEffect, useState } from 'react'
import '../../css/admin.css'
import Dashboard from '../../Pages/Dashboard';
import Sidebar from '../SidebarAdmin/Sidebar';
import AdminHeader from '../AdminHeader/AdminHeader';



function Admin() {
    const [profile, setProfile] = useState()

    useEffect(() => {
        setProfile(<Dashboard />)
    }, [])


    const handleLinkClick = (e) => {
        setProfile(e);
    }

    return (
        <>
            <div className='main-admin-screen'>
                <div className='main-admin-screen-wrapper'>
                    <div className='admin-page-sidebar'>
                        <Sidebar handleLinkClick={handleLinkClick} />
                    </div>
                    <div className='admin-screen-content'>
                        <div className='admin-screen-header'>
                            <AdminHeader />
                        </div>
                        <div className='page-content'>
                            {profile}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin