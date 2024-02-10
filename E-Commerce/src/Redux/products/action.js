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

