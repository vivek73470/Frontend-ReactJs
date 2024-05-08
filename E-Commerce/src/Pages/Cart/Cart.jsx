import React from 'react'
import './cart.css'
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { addOrder, deleteProductCart } from '../../Redux/products/action';
import Checkout from '../../Components/Checkout/Checkout';


function Cart() {
  const cart = useSelector((store) => store.ProductReducer.cart)
  const dispatch = useDispatch();
  
  const removeProduct = (id) => {
    dispatch(deleteProductCart(id))
  };

  const checkoutHandler =()=>{
    dispatch(addOrder(cart))
  }
  return (
    <>
    
      <div className='cart-design-screen'> 
        <div className='cart-headinf'>
          <h2>Shopping Cart</h2>
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
      <Checkout cart = {cart} checkoutHandler={checkoutHandler}/>
      {/* curly braces like {cart} passing a JavaScript expression as a prop, we can write anything inside curly braces and pass as a props */}
      </div>
    </>
  )
}

function CartItem({ id, title, image, description, price, removeProduct }) {
  return (
    <>
      <div className='cart-container'>
        <div className='cart-scrn-bdr'>
          <div className='cart-brdr'>
          <div className='cartitm-bdr-ims'>
            <img src={image} alt="" />
          </div>
          <div className='cartitm-bdr'>
            <h2>{title}</h2>
            <p>
              {description}
            </p>
            <p className='cart-add-price'>रु.{price}</p>
            <button onClick={() => removeProduct(id)} className='rmv-btn'>
              <MdDelete />   Remove  </button>
          </div>
          </div>
       
        </div>
      </div>
    </>
  )
}

export default Cart