import { SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNIN_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST } from "./action";

const initialState = {
    auth: false,
    user:null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log("user data reducer",payload)
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
                user:payload.user,
                
            }
     
        case SIGNIN_FAILURE:
            return {
                auth: false
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

        default:
            return state;

    }

}
export { reducer }