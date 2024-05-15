import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../../Redux/products/action';


function CartAdmin() {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.ProductReducer.cart)
    console.log('admin cart', cart)

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch])

    return (
        <>
        <div className='cart-container'>
            {cart.length > 0 && cart.map((item, index) => (
                <div key={index}>
                    <div className='orders-degn-flx'>
                        <div className='cartitm-bdr-ims'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='cartitm-bdr'>
                            <h2 style={{ textAlign: 'center', padding: '4px' }}>{item.title}</h2>
                            <p className='order-description'>{item.description}</p>
                            <p className='cart-add-price-order'>रु.{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}

export default CartAdmin