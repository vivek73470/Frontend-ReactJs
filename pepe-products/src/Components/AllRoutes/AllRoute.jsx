import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Aboutus from '../../UserRoutes/About/About';
import Home from '../../UserRoutes/Home/Home';
import SignIn from '../../UserRoutes/SignIn/signIn';
import Signup from '../../UserRoutes/SignUp/signup';
import Addproduct from '../AddMenProduct/AddMenproduct';
import Delete from '../../Pages/Delete';
import Admin from '../AdminPage/Admin';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import Setting from '../../Pages/Setting';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import WomenPage from '../../UserRoutes/WomenProducts/WomenClothsPage';
import SingleWomenPage from '../../UserRoutes/SingleWomen/SingleWomenPage';
import Contactus from '../../UserRoutes/ContactUs/Contactus';
import SingleMenPage from '../../UserRoutes/SingleMen/SingleMenPage';
import MenClothsPage from '../../UserRoutes/MenProducts/MenClothsPage';
import Footer from '../Footer/footer';
import MobileCover from '../../UserRoutes/MobileCover/MobileCover';
import SingleMobile from '../../UserRoutes/SingleMobile/SingleMobile';
import EditProductAdmin from '../EditMen/EditProductAdmin';
import AdminAddProducts from '../AddScreen/AdminAddProducts';
import AdminMenProducts from '../MenClothAdmin/AdminMenProducts';
import AdminMobile from '../MobileCoverAdmin/AdminMobile';
import AdminWomenProduct from '../WomenClothAdmin/AdminWomenProduct';
import AddWomenproduct from '../AddWomenProduct/AddWomenproduct';
import AddMobileproduct from '../AddMobileProduct/AddMobileproduct';
import EditWomenProduct from '../EditWomen/EditWomenProduct';
import EditMobileProduct from '../EditMobile/EditMobileProduct';
import NotFound from '../NotFoundPage/NotFound';



function AllRoute() {

  // Find out where the user is in the app
  // const location = useLocation();

  // Check if the user is on the Sign In page
  // const isSignInPage = location.pathname === '/signin';

  // Check if the user is on the Admin page or its related sections
  // const isOnAdminPage = location.pathname.includes('/dashboard');
  // const isOnSignUpPage = location.pathname.includes('/signup');

  // Only show the Navbar on pages that are NOT SignIn or Admin pages
  return (
    <>
      {/* Show the Navbar except on SignIn or Admin pages */}
      {/* {!isSignInPage && !isOnSignUpPage && !isOnAdminPage && <Navbar />} */}

      <Routes>
      
      {/* is used to define what to show when someone first visits your website,enters the root URL */}
        <Route index element={<Home />} />

        <Route path="/" element={<Home />} />
        <Route path={"/Aboutus"} element={<Aboutus />}/>
        <Route path={'/contact-us'} element={<Contactus />}/>
        <Route path={'/signin'} element={<SignIn />}/>
        <Route path={'/signup'} element={<Signup />}/>
        <Route path={'/footer'} element={<Footer />}/>

        <Route path={'/womencloths'} element={<WomenPage />}/>
        <Route path={'/singlewomen/:id'} element={<SingleWomenPage />}/>
        <Route path={'/mencloths'} element={<MenClothsPage />}/>
        <Route path={'/singlemen/:id'} element={<SingleMenPage />}/>
        <Route path={'/mobilecover'} element={<MobileCover />}/>
        <Route path={'/singlemobile/:id'} element={<SingleMobile />}/>
        <Route path={"*"} element={<NotFound/>}/>

        <Route path="/" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addproduct" element={<AdminAddProducts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-men-product" element={<Addproduct />} />
          <Route path="add-women-product" element={<AddWomenproduct />} />
          <Route path="add-mobile-product" element={<AddMobileproduct />} />
          <Route path="menproducts" element={<AdminMenProducts />} />
          <Route path="mobiles-cover" element={<AdminMobile />} />
          <Route path="women-products" element={<AdminWomenProduct />} />
          <Route path="deleteproduct" element={<Delete />} />
          <Route path="setting" element={<Setting />} />
          <Route path="edit-product/:id" element={<EditProductAdmin />} />
          <Route path="edit-women-product/:id" element={<EditWomenProduct />} />
          <Route path="edit-mobile-product/:id" element={<EditMobileProduct />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>



    </>
  )
}

export default AllRoute



