import React, { useEffect } from 'react';
import './order.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../Redux/products/action';
import Navbar from '../../Components/Navbar/Navbar';

function Order() {
    const dispatch = useDispatch();
    const orders = useSelector((store) => store.ProductReducer.orders);
    console.log('ordersstore', orders);

    useEffect(() => {
        dispatch(fetchOrder());
    }, []);

    return (
        <>
        <Navbar/>
            <div>
                <h2 style={{textAlign:'center'}}>Your Orders</h2>
                <div  className='order-scroll style-4'>
                    {orders.length > 0 &&
                        orders.map((order, index) => (
                            <div key={index}>
                                {order.map((elem) => (
                                    <div key={elem.id}>
                                        <div className='orders-degn-flx '>
                                            <div className='cartitm-bdr-ims'>
                                                <img src={elem.image} alt="" />
                                            </div>
                                            <div className='cartitm-bdr'>
                                                <h2 style={{textAlign:'center',padding:'4px'}}>{elem.title}</h2>
                                                <p className='order-description'>{elem.description}</p>
                                                <p className='cart-add-price-order'>रु.{elem.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Order;
