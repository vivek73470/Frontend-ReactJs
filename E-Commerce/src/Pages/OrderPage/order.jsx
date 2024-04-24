import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder } from '../../Redux/products/action';

function Order() {
    const dispatch = useDispatch();
    const orders = useSelector((store) => store.ProductReducer.orders)
    console.log('ordersstore', orders)

    useEffect(() => {
        dispatch(fetchOrder())
    }, [])

    return (
        <>
            <div>
                <h2 >Your Orders</h2>
                <div>
                    {orders.length > 0 &&
                        orders[0].map((elem) => (
                            <div key={elem.id}>
                                <img src={elem.image} alt="" />
                                <p>{elem.title}</p>
                                <p>{elem.description}</p>
                                <p>{elem.price}</p>
                            </div>

                        ))}
                </div>
            </div>
        </>
    )
}

export default Order