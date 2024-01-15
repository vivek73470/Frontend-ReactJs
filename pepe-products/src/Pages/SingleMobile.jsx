import React from 'react'
import '../css/singlepage.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer/footer';


function SingleMobile() {
   
    const[mobileData,setMobileData]=useState([]);
    const {id} = useParams();

     async function getData(){
        try{
            let res = await fetch(`http://localhost:3500/mobiles/${id}`)
            console.log('vi',res)
            let data = await res.json();
            console.log("gh",data)
            setMobileData(data)
            console.log('data set successfully')

        }
        catch(err){
            console.log(err)
        }
     }

     useEffect(()=>{
        console.log('useeffectis called')
        getData();
        console.log("gtrfg",mobileData)
     
     },[])

  return (

  <>
    <div className='single-product-mainscreen'>
            <div className='single-product-wrapscreen'>
                <div className='single-product-sidebar'>
                         <div className='prdct-size' key={mobileData.id}>
                             <img src={mobileData.productImgTagSrc} alt='' />
                             <p className='product-brandname'>{mobileData.brand_namez}</p>
                            <p className='product-title-name'>{mobileData.clr_shade_4}</p>
                           <div className='product-price-description'>
                              <p className='product-discount-price'>₹{mobileData.discountedPriceText}</p>
                              <p className='product-actual-price'>₹{mobileData.actualPriceText}</p>
                           </div>
                           <p className='product-title-members'>₹{mobileData.discount_price_box} For Tribe Members</p>

                         </div>
               
                   
                </div>
            </div>
    </div>
     <Footer/>
  </>
  )
}

export default SingleMobile