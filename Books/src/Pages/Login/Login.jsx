import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Authdata/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
 
  const comingFrom = location.state?.data || "/";


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then(() => {
        //do somethinhg
        navigate(comingFrom, 
          { replace: true }
          );
      });  
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>User Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};
