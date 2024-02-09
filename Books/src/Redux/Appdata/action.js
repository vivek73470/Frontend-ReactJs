import axios from "axios";
import * as types from "./actionTypes";


export const getBooksRequest = () => {
  return { 
    type: types.GET_BOOKS_REQUEST
  }
}

export const getBookssuccess = (payload) => {
  return { 
    type: types.GET_BOOKS_SUCCESS,
            payload
  }
}

export const getBooksError = () => {
  return { 
    type: types.GET_BOOKS_ERROR
  }
}


export const getbooks=(params)=>(dispatch)=>{
    dispatch(getBooksRequest())
    return axios.get("http://localhost:8080/books",params).then((r)=>{
        dispatch(getBookssuccess(r.data))
        console.log(r.data)
    }).catch((e)=>{
        dispatch(getBooksError())
    })
}