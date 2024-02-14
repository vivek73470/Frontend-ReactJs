import * as types from './actionType';

const initialState = {
    products: [],
    error: '',
    CurrentProduct:{},
    loading: false

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                products: payload,
                error: '',
                loading: false
            }

        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }

            case types.GET_SINGLE_PRODUCT_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
    
            case types.GET_SINGLE_PRODUCT_SUCCESS:
                return {
                    ...state,
                    error: '',
                    CurrentProduct:payload,
                    loading: false
                }
    
            case types.GET_SINGLE_PRODUCT_FAILURE:
                return {
                    ...state,
                    error: payload,
                    loading: false
                }
        default:
            return state;
    }

}

export { reducer }




// import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType";

// // NOTE: DO NOT MODIFY the intial state structure in this file.
// const initialState = {
//   watches: [],
//   isLoading: false,
//   isError: false,
// };

// const reducer = (state = initialState, {type, payload}) => {
//   console.log("payload",payload)
//   switch(type){
//     case GET_WATCHES_DATA_REQUEST:
//       return {...state, isLoading:true}
//     case GET_WATCHES_DATA_SUCCESS:
//       return {...state, isLoading:false, watches:payload, isError:false}
//     case GET_WATCHES_DATA_FAILURE:
//       return {...state, isError:true}
//       default:
//         return state
//   }
// };

// export { reducer };
