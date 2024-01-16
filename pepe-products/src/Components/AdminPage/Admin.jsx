import React, { useEffect, useState } from 'react'
import '../../css/admin.css'
import Dashboard from '../../Pages/Dashboard';
import Sidebar from '../SidebarAdmin/Sidebar';
import AdminHeader from '../AdminHeader/AdminHeader';



function Admin() {
    const [profile, setProfile] = useState()

    // hook to set the initial value of profile to the Dashboard component when the component mounts
    useEffect(() => {
        setProfile(<Dashboard />)
    }, [])


    const updateOnLinkClick = (e) => {
        setProfile(e);
    }

    return (
        <>
            <div className='main-admin-screen'>
                <div className='main-admin-screen-wrapper'>
                    <div className='admin-page-sidebar'>

                        {/* We are rendering the Sidebar component and passing the updateProfileOnLinkClick function to it as a prop. */}

                        <Sidebar handleLinkClick={updateOnLinkClick} />
                        
                        {/* handleLinkClick is the name of the prop that the Sidebar component is expected to receive.
                        updateOnLinkClick is the value of the prop, which should be a function. In your case,
                         it seems to be a function similar to the one we discussed earlier, possibly used for handling link clicks. */}
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