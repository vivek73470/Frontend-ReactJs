import React, { } from "react";
import './products.css'
import { Filter } from "../../Components/FilterComponent/FilterComponent"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { fetchData } from "../../Redux/products/action";
import Footer from "../../Components/Footer/footer";


const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const watches = useSelector((store) => store.ProductReducer.products)

  const [searchParams] = useSearchParams()


  useEffect(() => {
    let getParams = {
      params: { category: searchParams.getAll("category") }
    }
    dispatch(fetchData(getParams))

  }, [searchParams, dispatch])


  return (
    <>
      <div className='product-screen'>
        <div className='product-screen-wrapper'>
          <div className='product-filter'>
            <Filter />
          </div>
          <div className='product-listing'>
            {watches.length > 0 &&
              watches.map((item) => (
                <div className="productlist-design" key={item.id}
                    onClick={() => navigate(`/cartproducts/${item.id}`)}>
                  <img className='product-imgstyle' src={item.image} alt="cloth products" />
                  <p className='product-brandname'>{item.brand_namez}</p>
                  <p className='product-actual-title'>{item.title}</p>
                  {/* <p className='product-actual-price'>₹{item.price}</p> */}
                  <div className='product-price-description'>
                    <p className='product-discount-price'>₹{item.discountedPriceText}</p>
                    <p className='product-actual-price'>₹{item.actualPriceText}</p>
                  </div>
                  <p className='product-title-members'>₹{item.discount_price_box} For Tribe Members</p>
                  
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products