import React from 'react'
import { useState } from 'react';

function EditProductAdmin({productId}) {
  const[formData,setFormData]=useState({
    id:productId,
    productImgTagSrc: '',
    plp: '',
    brand_namez: '',
    clr_shade_4: '',
    discountedPriceText: '',
    actualPriceText:'',
    discount_price_box:''
  });

  const handleChange =(e)=>{
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
  }

async function EditProduct(){
  try{
  let res = await fetch(`http://localhost:3500/mensdata`,{
    method:'PUT',
    body:JSON.stringify(formData),

    headers:{
      'Content-Type':'application/json',
    },

  })
  let data = await res.json();
  console.log(data);
  setFormData({
    id: productId,
    productImgTagSrc: '',
    plp: '',
    brand_namez: '',
    clr_shade_4: '',
    discountedPriceText: '',
    actualPriceText:'',
    discount_price_box:''
  })
  }
  catch(err){
  console.log(err)
  }
}

 const handleSubmit =(e)=>{
  e.preventDefault();
EditProduct();
 }

  return (
   <>
 <div className='edit-product-screen'>
  <div className='edit-product-wrapper'>
    <form className='edit-prdct-form' onSubmit={handleSubmit}>
      {/* <input
      name='id'
      type='text'
      placeholder='Id'
      className='edit-prdct-field'
      value={FormData.id}
      onChange={handleChange}
      />
      <br/> */}
      <input
            name='productImgTagSrc'
            type="text"
            className='edit-prdct-field'
            placeholder="productImgTagSrc"
            value={formData.productImgTagSrc}
            onChange={handleChange}
          />
          <br />
          <input
            name='plp' 
            type="text"
            className='edit-prdct-field'
            placeholder="plp"
            value={formData.plp}
            onChange={handleChange}
          />
          <br />
          <input
            name='brand_namez'
            type="text"
            className='edit-prdct-field'
            placeholder="brand_namez"
            value={formData.brand_namez}
            onChange={handleChange}
          />
          <br />
          <input
            name='clr_shade_4'
            type="text"
            className='edit-prdct-field'
            placeholder="clr_shade_4"
            value={formData.clr_shade_4}
            onChange={handleChange}
          />
          <br />
          <input
            name='discountedPriceText'
            type="text"
            className='edit-prdct-field'
            placeholder="discountedPriceText"
            value={formData.discountedPriceText}
            onChange={handleChange}
          />
          <br />

          <input
            name='actualPriceText'
            type="text"
            className='edit-prdct-field'
            placeholder="actualPriceText"
            value={formData.actualPriceText}
            onChange={handleChange}
          />
          <br />

          <input
            name='discount_price_box'
            type="text"
            className='edit-prdct-field'
            placeholder="discount_price_box"
            value={formData.discount_price_box}
            onChange={handleChange}
          />
          <br />

      <button className='editproduct-button' onClick={EditProduct}>Update</button>
    </form>
  </div>
 </div>
   </>
  )
}

export default EditProductAdmin