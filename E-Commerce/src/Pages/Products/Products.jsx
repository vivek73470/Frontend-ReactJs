import React from 'react'
import './products.css'
import FilterComponent from '../../Components/FilterComponent/FilterComponent'

function Products() {
  return (
   <>
   <div className='product-screen'>
    <div className='product-screen-wrapper'>
        <div className='product-filter'>
 <FilterComponent/>
        </div>
        <div className='product-listing'>

        </div>
    </div>
   </div>
   </>
  )
}

export default Products