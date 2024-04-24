import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder } from '../../Redux/products/action';

function Order() {
    const dispatch = useDispatch();
    const orders=useSelector((store)=>store.ProductReducer.orders)
    console.log('ordersstore',orders)

    useEffect(()=>{
dispatch(fetchOrder())
    },[])

  return (
 <>
 <div>
    <h2 >Your Orders</h2>
 </div>
 </>
  )
}

export default Order