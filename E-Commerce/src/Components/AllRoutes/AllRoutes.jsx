import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Homepage from '../../Pages/Homepage/Homepage'
import Products from '../../Pages/Products/Products'
import Cart from '../../Pages/Cart/Cart'
import Product from '../../Pages/Product/Product'
import CartCounter from '../CartCounter/CartCounter'
import Checkout from '../Checkout/Checkout'
import Order from '../../Pages/OrderPage/order'
import Login from '../../Pages/Login/login'


function AllRoutes() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/cart-counter' element={<CartCounter/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/check' element={<Checkout/>}/>
    <Route path='/orders' element={<Order/>}/>
    <Route path= '/login' element={<Login/>}/>
  </Routes>
  
  </>
  )
}

export default AllRoutes