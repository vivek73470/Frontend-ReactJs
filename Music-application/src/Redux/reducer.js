import * as types from './actionType';

const initialState ={
    musicRecords:[],
    isLoading:false,
    isError:false,
}

const reducer =(oldstate =initialState,action) =>{
// destructure type and payload
const{type,payload} =action;

switch(type){

    case types.GET_MUSIC_RECORD_REQUEST:
        return{
            ...oldstate,isLoading:true,
        }

        case types.GET_MUSIC_RECORD_SUCCESS:
        return{
            ...oldstate,
            isLoading:false,
            musicRecords:payload,
        }

        case types.GET_MUSIC_RECORD_FAILURE:
        return{
            ...oldstate,
            isLoading:false,
            isError:false
        }
    default:
        return oldstate;
}


}
export {reducer}