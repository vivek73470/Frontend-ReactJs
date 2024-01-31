import * as types from './actionType'

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

export {GeTodosRequest,GeTodosSuccess,GeTodosError}