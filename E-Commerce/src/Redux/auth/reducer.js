import { SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNIN_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST, UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAILURE,SET_SUCCESS } from "./action";

const initialState = {
    auth: false,
    userData:{}
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    
    switch (type) {
        case SIGNIN_REQUEST:
            return {
                ...state,
                auth: false
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                auth: true,      
            }
     
        case SIGNIN_FAILURE:
            return {
                auth: false
            }

        case SET_SUCCESS:
            return {
                ...state,
                auth: true,
                userData:payload,
            }
    
        case SIGNUP_REQUEST:
            return {
                ...state,
                auth: false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                auth: true,
            }
        case SIGNUP_FAILURE:
            return {
                auth: false
            }

        case UPDATE_REQUEST:
            return {
                ...state,
                auth: false
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                auth: true,
                user:payload
            }
        case UPDATE_FAILURE:
            return {
                auth: false
            }

        default:
            return state;

    }

}
export { reducer }