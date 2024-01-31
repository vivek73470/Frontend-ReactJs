
import * as types from './actionType'
// creator fn

const handleAdd = (payload)=>{
    return {  
        type: types.ADD,
        payload,
    } 
}
const handleReduce = (payload) => {
    return {   
        type: types.REDUCE,
        payload,
    } 
}

const GeTodosRequest =()=>{
    return {
        type:types.GET_TODOS_REQUEST
        
    }
}

const GeTodosSuccess =(payload)=>{
    return {
        type:types.GET_TODOS_SUCCESS,
        payload,
    }
}

const GeTodosError =()=>{
    return {
        type:types.GET_TODOS_ERROR
   
    }
}

const PostTodosRequest =()=>{
    return {
        type:types.POST_TODOS_REQUEST
        
    }
}

const PostTodosSuccess =(payload)=>{
    return {
        type:types.POST_TODOS_SUCCESS,
        payload,
    }
}

const PostTodosError =()=>{
    return {
        type:types.POST_TODOS_ERROR
   
    }
}


export {handleAdd,
    handleReduce,
    GeTodosError,
    GeTodosSuccess,
    GeTodosRequest,
PostTodosError,
PostTodosSuccess,
PostTodosRequest}