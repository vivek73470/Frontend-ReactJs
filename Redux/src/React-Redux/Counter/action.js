
import * as types from './actionType'
// creator fn

const handleAdd = (payload)=>{
    console.log("add",payload)
    return {  
        type: types.ADD,
        payload,
    } 
}
const handleReduce = (payload) => {
    console.log("reduce",payload)
    return {   
        type: types.REDUCE,
        payload,
    } 
}


// const PostTodosRequest =()=>{
//     return {
//         type:types.POST_TODOS_REQUEST
        
//     }
// }

// const PostTodosSuccess =(payload)=>{
//     return {
//         type:types.POST_TODOS_SUCCESS,
//         payload,
//     }
// }

// const PostTodosError =()=>{
//     return {
//         type:types.POST_TODOS_ERROR
   
//     }
// }


export {handleAdd,
    handleReduce
// PostTodosError,
// PostTodosSuccess,
// PostTodosRequest
}