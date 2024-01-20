import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Aboutus from '../../Pages/About';
import Home from '../../Pages/Home';
import SignIn from '../../Pages/signIn';
import Signup from '../../Pages/signup';
import Addproduct from '../../Pages/AddMenproduct';
import Delete from '../../Pages/Delete';
import Navbar from '../Header/Header';
import Admin from '../AdminPage/Admin';
import Profile from '../../Pages/Profile';
import Dashboard from '../../Pages/Dashboard';
import Setting from '../../Pages/Setting';
import Logout from '../../Pages/Logout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import WomenPage from '../../Pages/WomenClothsPage';
import SingleWomenPage from '../../Pages/SingleWomenPage';
import Contactus from '../../Pages/Contactus';
import SingleMenPage from '../../Pages/SingleMenPage';
import MenClothsPage from '../../Pages/MenClothsPage';
import Footer from '../Footer/footer';
import MobileCover from '../../Pages/MobileCover';
import SingleMobile from '../../Pages/SingleMobile';
import EditProductAdmin from '../../Pages/EditProductAdmin';
import AdminAddProducts from '../../Pages/AdminAddProducts';



function AllRoute() {

  // Find out where the user is in the app
  const location = useLocation();

  // Check if the user is on the Sign In page
  const isSignInPage = location.pathname === '/signin';

  // Check if the user is on the Admin page or its related sections
  const isOnAdminPage = location.pathname.includes('/admin');
  const isOnSignUpPage = location.pathname.includes('/signup');

  // Only show the Navbar on pages that are NOT SignIn or Admin pages
  return (
    <>
      {/* Show the Navbar except on SignIn or Admin pages */}
      {!isSignInPage && !isOnSignUpPage && !isOnAdminPage && <Navbar />}

      <Routes>
      
      {/* is used to define what to show when someone first visits your website,enters the root URL */}
        <Route index element={<Home />} />
        <Route path="/admin" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addproduct" element={<AdminAddProducts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addproduct" element={<Addproduct />} />
          <Route path="deleteproduct" element={<Delete />} />
          <Route path="setting" element={<Setting />} />
          <Route path="logout" element={<Logout />} />
          <Route path="editpage/:id" element={<EditProductAdmin />} />
          <Route path="profile/:userId" element={<Profile />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path={"/Aboutus"} element={<Aboutus />}></Route>
        <Route path={'/contact-us'} element={<Contactus />}></Route>
        <Route path={'/signin'} element={<SignIn />}></Route>
        <Route path={'/signup'} element={<Signup />}></Route>
        <Route path={'/footer'} element={<Footer />}></Route>


        <Route path={'/womencloths'} element={<WomenPage />}></Route>
        <Route path={'/singlewomen/:id'} element={<SingleWomenPage />}></Route>
        <Route path={'/mencloths'} element={<MenClothsPage />}></Route>
        <Route path={'/singlemen/:id'} element={<SingleMenPage />}></Route>
        <Route path={'/mobilecover'} element={<MobileCover />}></Route>
        <Route path={'/singlemobile/:id'} element={<SingleMobile />}></Route>






      </Routes>



    </>
  )
}

export default AllRoute



