import * as types from './actionType';
import axios from 'axios';

// we write here fn and this return action object
const getMusicRecordRequest =()=>{
    return{
        type:types.GET_MUSIC_RECORD_REQUEST,
    };
};

const getMusicRecord  = (queryParams) =>(dispatch) =>{
        dispatch(getMusicRecordRequest());

        return axios
        .get("http://localhost:3500/albums", queryParams)
        .then((r)=>{
            dispatch({
                type:types.GET_MUSIC_RECORD_SUCCESS,
                payload:r.data,
            });
        })
    .catch((e)=>{
        dispatch({ type:types.GET_MUSIC_RECORD_FAILURE })

    });
}

export {getMusicRecord}