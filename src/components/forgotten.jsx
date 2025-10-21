import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";
import './css/forgotpassword.css';


export default function ForgotPassword() {
  const { users } = useContext(myContext);
  const navigate = useNavigate();
  const [newemailOrUsername, setnewEmailOrUsername] = useState("");

  const handleReset = () => {
    const foundUser = users.find(
      (user) =>
        user.email === newemailOrUsername ||
        user.username === newemailOrUsername
    );

    if (foundUser) {
      alert(`Account found for ${foundUser.username || foundUser.email}`);
      navigate("/resetpassword", { state: { user: foundUser } });
    } else {
      alert("No account found with that username or email.");
    }
    setnewEmailOrUsername("")
  };

   const handlehomeclick = () => {
    navigate("/")

  }


  return (
  <div className="forgot-container">
    <img
      src="home.png"
      alt="Home"
      onClick={handlehomeclick}
    />
    <h2>Forgot Password</h2>
    <label htmlFor="email">Email or Username:</label>
    <input
      type="text"
      id="email"
      name="reset_field"
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      placeholder="Enter your email or username"
      value={newemailOrUsername}
      onChange={(e) => setnewEmailOrUsername(e.target.value)}
    />
    <button onClick={handleReset}>Reset Password</button>
  </div>
);

}
