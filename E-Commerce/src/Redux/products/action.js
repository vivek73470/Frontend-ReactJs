import axios from 'axios';
import * as types from './actionType';

const fetchDataRequest =(payload)=>{
    return{
        type:types.FETCH_DATA_REQUEST,
      
    }
}

const fetchDataSuccess =(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload,
    }
}

const fetchDataFailure =(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        
    }
}


const fetchData =(params)=>(dispatch) =>{
        dispatch(fetchDataRequest());
        axios.get(`http://localhost:8080/products`,params
        )
        .then((r) => dispatch(fetchDataSuccess(r.data)))
        .catch((e) => dispatch(fetchDataFailure(e.data)))
    };



export {fetchData};
