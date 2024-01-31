import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd } from '../React-Redux/action';
import { handleReduce } from '../React-Redux/action';

function Counter() {
    // reduxStore - can name anything
    const count = useSelector((reduxStore) => {
   return reduxStore.count;
});


 const dispatch = useDispatch();
 
    const addHandler =()=>{
        dispatch(handleAdd(1))
    }

    const reduceHandler =()=>{
        dispatch(handleReduce(1))
    }

  return (
   <>
   <div>
    <h1> count {count} </h1>
    <button onClick={addHandler}>Add</button>
    <button onClick={reduceHandler}>Reduce</button>
   </div>
   </>
  )
}

export default Counter