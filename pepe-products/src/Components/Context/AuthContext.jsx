import React from "react";
import { useState} from "react";

// creates a new context using React createContext().This context will hold the authentication information,
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    // isAuth holds the current authentication status, which is initially set to false.
    const [isAuth, setIsAuth] = useState(() => {
  const storedAuthStatus = localStorage.getItem('!isAuth');
  return storedAuthStatus ? JSON.parse(storedAuthStatus) : false;
});


    // The toggleAuth function changes the authentication status.
    // When it's called, it flips the value of isAuth. 
    // If a user was authenticated (isAuth was true), it becomes unauthenticated (false) and vice versa.
    const toggleAuth = () => {
        const newAuthStatus = !isAuth;
        setIsAuth(newAuthStatus);
        localStorage.setItem('isAuth', JSON.stringify(newAuthStatus));
      };
    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth }}>{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider