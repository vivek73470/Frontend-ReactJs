// import { useDispatch } from "react-redux";
import axios  from "axios";


export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const SET_REQUEST = 'SET_REQUEST';
export const SET_SUCCESS = 'SET_SUCCESS';
export const SET_FAILURE = 'SET_FAILURE';

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
             dispatch(SignInSuccess({status:true}))
             fetchUserData(userdata.id)(dispatch);
            return {status:true}
                
    }  
    catch (error) {
      return {status:false}
    }
};


const SetInRequest = () => {
    return {
        type: SET_REQUEST
    }
}
const SetInSuccess = (payload) => {
    console.log('action',payload)
    return {
        type: SET_SUCCESS,
        payload,
      
    }
     
}

export const fetchUserData = (userId) => async (dispatch) => {
 
    try {
        dispatch(SetInRequest())
      // Perform API call to fetch user data using userId
      const res = await fetch(`http://localhost:8080/user/${userId}`);
      const userData = await res.json();
      // Dispatch user data to reducer
      dispatch(SetInSuccess(userData));
    } catch (error) {
      // Handle error
      console.error('Error fetching user data:', error);
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

const UpdateRequest = () => {
    return {
        type: UPDATE_REQUEST
    }
}
const UpdateSuccess = (payload) => {
    return {
        type: UPDATE_SUCCESS,
        payload,
    }
}
const UpdateFailure = () => {
    return {
        type: UPDATE_FAILURE
    }
}

export const UpdateProf = (id,data)=>(dispatch)=>{
    dispatch(UpdateRequest());
    axios.put(`http://localhost:8080/user/${id}`,data)
    .then((res)=>dispatch(UpdateSuccess(res.data)))
    .catch((err)=>dispatch(UpdateFailure(err.data)))


}

