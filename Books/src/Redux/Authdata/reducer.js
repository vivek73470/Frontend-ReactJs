import * as types from "./actionTypes";
const initstate = {
  isAuth: false,
  token: "",
  isAuthLoding: false,
  isAuthError: false,
};

export const reducer = (state = initstate, action) => {
  // DESTRUCTURE Type AND Payload from action object
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoding: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthLoding:false,
        token: payload,
        isAuth: true,
      };
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        isAuth:false,
        isAuthLoding:false,
        isAuthError: true,
      };

    default:
      return state;
  }
};
