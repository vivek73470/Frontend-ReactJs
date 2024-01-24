import React from "react";
import { useState} from "react";

// creates a new context using React createContext().This context will hold the authentication information,
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
    // isAuth holds the current authentication status
    const [isAuth, setIsAuth] = useState(false);

    const toggleAuth = () => {
      // whatsever value is just change it 
        setIsAuth(!isAuth);
    }

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth }}>{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider 