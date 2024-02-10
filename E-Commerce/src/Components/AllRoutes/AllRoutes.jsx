import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Homepage from '../../Pages/Homepage/Homepage'
import Products from '../../Pages/Products/Products'
import Cart from '../../Pages/Cart/Cart'
import Product from '../../Pages/Product/Product'

function AllRoutes() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product' element={<Product/>}/>
  </Routes>
  
  </>
  )
}

export default AllRoutes