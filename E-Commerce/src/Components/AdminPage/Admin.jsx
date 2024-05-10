import React from 'react'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <>
    <div className='main-admin-screen'>
    <ToastContainer />
        <div className='main-admin-screen-wrapper'>
            <div className='admin-page-sidebar'>
                <Sidebar />
            </div>
            <div className='admin-screen-content'>
                <div className='admin-screen-header'>
                    <AdminHeader />
                </div>
                <div className='page-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Admin