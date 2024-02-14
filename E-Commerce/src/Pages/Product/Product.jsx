import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../Redux/products/action';
import { store } from '../../Redux/store';

function Product() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector(store => store.ProductReducer.CurrentProduct)


  useEffect(()=>{
if(id){
  dispatch(getSingleProduct(id))
}
  },[dispatch,id])

  console.log(currentProduct)
  return (
  <>
  <div className='single-product-screen'>
    <img src={currentProduct.image} alt="" />
    <p>{currentProduct.description}</p>
    <p> {currentProduct.title}</p>
    <p>{currentProduct.price}</p>
   

  </div>
  
  </>
  )
}

export default Product