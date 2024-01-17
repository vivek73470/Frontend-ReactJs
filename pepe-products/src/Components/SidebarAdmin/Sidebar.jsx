import React from 'react'
import '../../css/sidebar.css';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';
import Profile from '../../Pages/Profile';
import AdminAddProducts from '../../Pages/AdminAddProducts';
import { AuthContext } from '../Context/AuthContext';

// functional component, that takes a prop named handleLinkClick
function Sidebar({ handleLinkClick }) {
    const {toggleAuth} = React.useContext(AuthContext);
    const navigate =useNavigate();

    const handleLogout =() =>{
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

                        {/* Create a button with an onClick event that calls the handleLinkClick function
                         with the Dashboard component as an argument when clicked. */}
                         {/* and when one of them is clicked, it will call the function passed via the prop. */}
                            <button onClick={() => handleLinkClick(<Dashboard />)}>Dashboard </button>
                            {/* <button onClick={() => handleLinkClick(<Profile />)}>Profile</button> */}
                            <button onClick={() => handleLinkClick(<AdminAddProducts />)}>Add Product </button>
                            {/* <button onClick={() => handleLinkClick(<Delete />)}> Delete Product </button> */}
                            <button onClick={()=>handleLinkClick(<Profile/>)}>Setting</button>

                            {/* This button, when clicked, triggers the handleLinkClick function received as a prop. 
                            It passes the <Dashboard /> component to this function, updating the profile state in the Admin component. */}

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