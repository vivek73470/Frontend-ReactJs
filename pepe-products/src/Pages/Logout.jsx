import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext';

function Logout() {
  const {toggleAuth} = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout =()=>{
    toggleAuth();//set authentication to false
    navigate('/signin');
  }
  return (
    <>
   <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout