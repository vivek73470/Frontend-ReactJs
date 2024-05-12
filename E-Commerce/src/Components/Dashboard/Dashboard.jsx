import React, { useEffect, useRef, useState } from 'react'
import './dashboard.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../Redux/products/action'
import { useNavigate } from 'react-router-dom'
import { BsThreeDotsVertical } from "react-icons/bs";


function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const watches = useSelector((store) => store.ProductReducer.products)
  console.log('dash', watches)

  const menuRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const openThree = () => {

  }

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  }
  );
  return (
    <>
      <div className='dashboard-screen'>
        <div className='dashboard-wrappeer'>
          <div className='dash-admin-addbtn'>
            <span>Total Products -{watches.length}</span>
            <button onClick={() => navigate('/admin/add-product')} className='your-events'>Add Products</button>
          </div>
          <div className='break-line '>
          </div>
          <div className='product-listing-dash'>
            {watches.length > 0 &&
              watches.map((item) => (
                <div className="productlist-design-dash" key={item.id} >

                  <div onClick={() => { openThree() }} className='dashbr-pst-abs'>
                    <span
                      ref={imgRef}
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation
                        setOpen(!open);
                      }}>
                      <BsThreeDotsVertical />
                    </span>
                    {
                      open && (
                        <div
                        ref={menuRef}
                        className='dash-menu-options'>
                <ul>
                  {
                      <li onClick={() =>setOpen(false)} >view</li>   
                  }
                </ul>
                          
                        </div>
                      )
                    }
                  </div>
                  <img className='product-imgstyle-dash' src={item.image} alt="cloth products" />
                  <p className='product-brandname-dash'>{item.brand_namez}</p>
                  <p className='product-actual-title-dash'>{item.title}</p>
                  {/* <p className='product-actual-price'>₹{item.price}</p> */}
                  <div className='product-price-description-dash'>
                    <p className='product-discount-price-dash'>₹{item.discountedPriceText}</p>
                    <p className='product-actual-price-dash'>₹{item.actualPriceText}</p>
                  </div>
                  <p className='product-title-members-dash'>₹{item.discount_price_box} For Tribe Members</p>
                  {/* <button onClick={() => navigate(`/cartproducts/${item.id}`,'_blank')} className='dash-ad-viewdtls'>View details</button> */}
                  <button onClick={() => window.open(`/cartproducts/${item.id}`, '_blank')} className='dash-ad-viewdtls'>View details</button>

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