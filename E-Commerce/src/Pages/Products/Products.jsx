import React, { useState } from "react";
import './products.css'
import { Filter } from "../../Components/FilterComponent/FilterComponent"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import {useSearchParams} from "react-router-dom"
import {fetchData} from "../../Redux/products/action";
import loader from '../../../src/Assets/load.jpg'
import Footer from "../../Components/Footer/footer";


const Products = () => {
    const[loading,setLoading] = useState(true)
  const dispatch=useDispatch()
  const watches=useSelector((store)=>store.ProductReducer.products)

  const [searchParams]=useSearchParams()


  useEffect(() => {
    setLoading(true);
    let getParams = {
      params: { category: searchParams.getAll("category") }
    }

    setTimeout(() => { 
      dispatch(fetchData(getParams))
      setLoading(false);
    }, 100); 
  }, [searchParams, dispatch])


    return (
        <>
    <div className='product-screen'>
        <div className='product-screen-wrapper'>
          <div className='product-filter'>
            <Filter />
          </div>
          <div className='product-listing'>
            {loading ? ( 
                <div className="loaderimgg">
                    <img src = {loader}/>
                      <p>Loading...</p>
                </div>
          
            ) : (
              watches.length > 0 &&
              watches.map((item) => (
                <div className="productlist-design" key={item.id}>
                  <img className='product-imgstyle' src={item.image} alt="prodct" />
                  <p className='product-actual-title'>{item.title}</p>
                  <p className='product-actual-price'>₹{item.price}</p>
                </div>
              ))
              
            )}
          </div>
        </div>
      </div>
      <Footer/>
        </>
    )
}

export default Products