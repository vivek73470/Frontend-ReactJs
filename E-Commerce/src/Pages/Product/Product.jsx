import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addProductCart, getSingleProduct } from '../../Redux/products/action';
// import { store } from '../../Redux/store';
import { FaRegStar } from "react-icons/fa6";

function Product() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector(store => store.ProductReducer.CurrentProduct)


  useEffect(()=>{
if(id){
  dispatch(getSingleProduct(id))
}
  },[dispatch,id])

const addToCartHandler = () =>{
  currentProduct && dispatch(addProductCart(currentProduct));

}


  return (
  <>
  <div className='single-product-screen'>
    <img src={currentProduct.image} alt="" />
  
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />
    <p> {currentProduct.title}</p>
    <p>{currentProduct.price}</p>
    <p>{currentProduct.description}</p>

    <button onClick={addToCartHandler}>Add to Cart</button>

  </div>
  
  </>
  )
}

export default Product