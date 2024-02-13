import React, { useEffect } from 'react'
import './products.css'
import FilterComponent from '../../Components/FilterComponent/FilterComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux/products/action';

function Products() {
    const products = useSelector((store) => store.ecommerceData.products)
  const dispatch = useDispatch();

    useEffect(()=>{
        if(products?.length === 0){
            dispatch(fetchData())
        }
    },[dispatch,products?.length])
    
    // useEffect(()=>{
    
    //         dispatch(fetchData())
        
    // },[])
    // console.log("useeffect",products)
    return (
        <>
            <div className='product-screen'>
                <div className='product-screen-wrapper'>
                    <div className='product-filter'>
                        <FilterComponent />
                    </div>
                    <div className='product-listing'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products