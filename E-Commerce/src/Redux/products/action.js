import Axios  from 'axios';
import * as types from './actionType';

const fetchDataRequest =(payload)=>{
    return{
        type:types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess =(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure =(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}

// const fetchData = ()=>{
//     return (dispatch) =>{
//         dispatch(fetchDataRequest());
//         Axios.get("http://localhost:8080/products")
//         .then((r)=> dispatch(fetchDataSuccess(r.data)))
//         .catch((e)=> dispatch(fetchDataFailure(e.data)));
//     }
// }

const fetchData = (payload) => {
    return async (dispatch) => {

        dispatch(fetchDataRequest());
        try {
            const response = await Axios.get("/products");
            dispatch(fetchDataSuccess(response.data));
        } 
        catch (error) {
            dispatch(fetchDataFailure(error.data));
        }
    };
};

export {fetchData};