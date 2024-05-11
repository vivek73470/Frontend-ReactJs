// import { useDispatch } from "react-redux";
// import { axios } from "axios";


export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const SignInRequest = () => {
    return {
        type: SIGNIN_REQUEST
    }
}
const SignInSuccess = (payload) => {
    return {
        type: SIGNIN_SUCCESS,
        payload,
    }
}
const SignInFailure = () => {
    return {
        type: SIGNIN_FAILURE
    }
}

export const signIn = (formData) => async (dispatch) => {
    try {
        dispatch(SignInRequest());
        const res = await fetch('http://localhost:8080/user');
        const users = await res.json();
        const userdata = users.find(u => u.email === formData.email && u.password === formData.password);
            localStorage.setItem('userId', userdata.id);
             dispatch(SignInSuccess({status:true,user:userdata}))
            return {status:true}
                
    } 
    catch (error) {
      return {status:false}
    }
};


const SignUpRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}
const SignUpSuccess = (payload) => {
    return {
        type: SIGNUP_SUCCESS,
        payload,
      
    }
}
const SignUpFailure = () => {
    return {
        type: SIGNUP_FAILURE
    }
}

export const signUp = (formData) => async (dispatch) => {
    try {
        dispatch(SignUpRequest());
        const res = await fetch('http://localhost:8080/user', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = await res.json();
            dispatch(SignUpSuccess(user));
 
    } catch (error) {
        console.error('Error during sign up:', error);
        dispatch(SignUpFailure());
    }
};