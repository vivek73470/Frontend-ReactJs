import * as types from './actionType';
import axios from 'axios';

// we write here fn and this return action object
const getMusicRecordRequest =()=>{
    return{
        type:types.getMusicRecordRequest
    }
}

const getMusicRecord = async(dispatch) =>{
    try{
        dispatch(getMusicRecordRequest());
        const res = await axios.get(``)
        dispatch({
            type:types.GET_MUSIC_RECORD_SUCCESS,
            payload:res.data
        }

        )

    }
    catch(err){
        dispatch({
            type:types.GET_MUSIC_RECORD_ERROR
        })

    }
   

}
export {getMusicRecord}