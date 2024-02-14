import React from "react";
import './products.css'
import { Filter } from "../../Components/FilterComponent/FilterComponent"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react" 
import {useSearchParams} from "react-router-dom"
import {fetchData} from "../../Redux/products/action";

const Watches = () => {
  const dispatch=useDispatch()
  const watches=useSelector((store)=>store.ProductReducer.products)
  const [searchParams]=useSearchParams()

  useEffect(()=>{
    let getParams={
      params:{category:searchParams.getAll("category")}
    }
    dispatch(fetchData(getParams))
  },[searchParams,dispatch])


    return (
        <>
            <div className='product-screen'>
                <div className='product-screen-wrapper'>
                    <div className='product-filter'>
                       <Filter/>
                    </div>
                    <div className='product-listing'>
                        { watches.length > 0 &&
                            watches.map((item) => {
                                return <div className="productlist-design" key={item.id}>
                                 <img className='product-imgstyle' src={item.image} alt="prodct" />
                                 <p className='product-actual-title'>{item.title}</p>
                                 <p className='product-actual-price'>₹{item.price}</p>
                         
                                </div>
                            })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Watches