
import './App.css';
import React, { useState } from 'react'
import Counter from './Components/Counter';
import Todo from './Components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginError, loginRequest, loginSuccess } from './React-Redux/AuthReducer/action';
// import { store } from './Redux/store';
// import {handleAddActionObj} from './Redux/action'
// import { useState } from 'react';

function App() {
  const isAuth =useSelector(store => store.AuthReducer.isAuth)
const[useremail,setUserEmail]=useState('');
const[userpassword,setUserPassword]=useState('');
const dispatch =useDispatch();


const handleLogin =()=>{
  if(useremail){
    const payload ={
      email:useremail,
      password:userpassword
    }
    dispatch(loginRequest())
      axios.post('https://reqres.in/api/login',payload ).then(r =>{
        dispatch(loginSuccess(r.data.token))
      })
      .catch(e=>{
        dispatch(loginError)
      })
    
  }

}
  //we can access it by  calling the getstate() from store
// const {dispatch,getState,subscribe}=store;
//   const {count} =getState() // return same initial state 16 and destructuring the count

//   const [forceUpdate,setForceUpdate]=useState(0);

//   // we have to tell react to re-render
//   subscribe(()=>{
//     // any logic inside subscribe method will be invoked if, the data inside redux store changes
//     console.log('inside subscribe',store.getState())
//     setForceUpdate((prev)=>prev+1);
//   })

//   const addHandler = ()=>{
// // setCount((prev)=>prev+1);

// // dispatching action object to reducer
// // some kind of identifier to deffrentiate b/w logic and reducer and if there is any info we can pass through payload
// // dispatch({type:'ADD',payload:2})
// // console.log(store.getState());

// // OR

// dispatch(handleAddActionObj(2));

//   }
//   const reduceHandler =() =>{
//     // setCount((prev)=>prev-1);
//     dispatch({type:'REDUCE',payload:1})
//     console.log(store.getState());
//   }
// console.log('component re-render');

  return (
<>
<Counter/>
{isAuth && <Todo/>}

<div>
  <input
  type='email'
  placeholder='email'
  value={useremail}
  onChange ={(e)=>setUserEmail(e.target.value)}
  />
  <br/>
  <input
  type='password'
  placeholder='password'
  value={userpassword}
  onChange ={(e)=>setUserPassword(e.target.value)}
  />
  <br/>
  <button onClick={handleLogin}>Login</button>
  </div>

{/* <div>
  <h1>count {count}</h1>
  <button onClick={addHandler} >Add</button>
  <button onClick={reduceHandler}>reduce</button>
</div> */}

</>
  );
}

export default App;
