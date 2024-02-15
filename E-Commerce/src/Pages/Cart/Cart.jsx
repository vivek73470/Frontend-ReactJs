import React from 'react'
import './cart.css'
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductCart } from '../../Redux/products/action';
import Checkout from '../../Components/Checkout/Checkout';


function Cart() {
  const cart = useSelector((store) => store.ProductReducer.cart)
  console.log("cart",cart)
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    console.log("going to remove product", id)
    dispatch(deleteProductCart(id))
  }
  return (
    <>
      <div className='cart-design-screen'>
        <div className='cart-headinf'>
          <h2>Cart</h2>
          {cart.length && cart.map((product) => {
            return <CartItem
             key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              removeProduct={removeProduct}
              />
          
          })}
        </div>
      <Checkout cart = {cart}/>
      </div>
    </>
  )
}

function CartItem({ id, title, image, description, price, removeProduct }) {
  return (
    <>
      <div className='cart-container'>
        <div className='cart-scrn-bdr'>
          <div className='cartitm-bdr'>
            <img src={image} alt="" />
          </div>
          <div className='cartitm-bdr'>
            <h2>{title}</h2>
            <p>
              {description}
            </p>
            <p>{price}</p>
            <button onClick={() => removeProduct(id)} className='rmv-btn'><MdDelete />Remove  </button>
          </div>
        </div>
      
      </div>

    </>
  )
}

export default Cart