import React, { useEffect } from 'react'
import './dashboard.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../Redux/products/action'
import { useNavigate } from 'react-router-dom'



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const watches = useSelector((store) => store.ProductReducer.products)
  console.log('dash', watches)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])



  return (
    <>
      <div className='dashboard-screen'>
        <div className='dashboard-wrappeer'>
          <div className='dash-admin-addbtn'>
            <span>Total Products -{watches.length}</span>
            <button onClick={()=>navigate('/admin/add-product')} className='your-events'>Add Products</button>
          </div>
          <div className='break-line '>
          </div>
          <div className='product-listing-dash'>
            {watches.length > 0 &&
              watches.map((item) => (
                <div className="productlist-design-dash" key={item.id} >
                  <img className='product-imgstyle-dash' src={item.image} alt="cloth products" />
                  <p className='product-brandname-dash'>{item.brand_namez}</p>
                  <p className='product-actual-title-dash'>{item.title}</p>
                  {/* <p className='product-actual-price'>₹{item.price}</p> */}
                  <div className='product-price-description-dash'>
                    <p className='product-discount-price-dash'>₹{item.discountedPriceText}</p>
                    <p className='product-actual-price-dash'>₹{item.actualPriceText}</p>
                  </div>
                  <p className='product-title-members-dash'>₹{item.discount_price_box} For Tribe Members</p>
                  <button onClick={() => navigate(`/cartproducts/${item.id}`)} className='dash-ad-viewdtls'>View details</button>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard