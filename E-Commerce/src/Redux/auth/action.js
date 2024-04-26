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
const SignInSuccess = (token) => {
    return {
        type: SIGNIN_SUCCESS,
        payload:token
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
        // Make API call to authenticate user
        const res = await fetch('http://localhost:8080/user');
        const users = await res.json();
        const user = users.find(u => u.email === formData.email && u.password === formData.password);
        if (user) {
            dispatch(SignInSuccess(user.id));
            localStorage.setItem('userId', user.id);
        } else {
            dispatch(SignInFailure());
        }
    } catch (error) {
        console.error('Error during sign in:', error);
        dispatch(SignInFailure());
   
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
        // Make API call to register user
        const res = await fetch('http://localhost:8080/user', {
            method: 'POST',

            body: JSON.stringify(formData),

            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = await res.json();
        if (user) {
            dispatch(SignUpSuccess(user.token));
            localStorage.setItem('token', user.token);
        } else {
            dispatch(SignUpFailure());
        }
    } catch (error) {
        console.error('Error during sign up:', error);
        dispatch(SignUpFailure());
    }
};