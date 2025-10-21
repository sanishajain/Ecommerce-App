import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/home.css';
import { myContext } from './mycontext';
import { useContext } from 'react';

export default function Home() {
  const { users, banUser, emailOrUsername, setEmailOrUsername } = useContext(myContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handlehomeclick = () => {
    navigate("/")

  }


  const handleLogin = () => {

    const loggedUser = users.find(user =>
        (user.email === emailOrUsername || user.username === emailOrUsername) &&
        user.password === password
    );
    if (loggedUser) {
      if (banUser.includes(loggedUser.email)) {
        return alert("Your account has been banned. Please contact support.");
      } else {
        alert("Login successful!");
        setEmailOrUsername(""); // Clear input field
        setPassword(""); // Clear password field
        navigate("/dashboard");
      }
    }
    else {
      alert("Invalid email or password!");
      setEmailOrUsername(""); // Clear input field
      setPassword(""); // Clear password field

    }
    setEmailOrUsername(""); // Clear input field
    setPassword(""); // Clear password field
  };


  console.log(emailOrUsername)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>E-commerceApp</h1>
      <br />
      <input
        type="text"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        placeholder="Username or Email"
        value={emailOrUsername}
        onChange={(e) => setEmailOrUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"

        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <Link to="/forgot">Forgot Password?</Link>
      <br />
      <p>Don't have an account? <Link to="/register">Signup</Link></p>
      {/* <p> <Link to="/">Back</Link></p> */}

      <img
        src="home.png"
        alt="User"
        style={{ width: "50px", height: "40px" }}
        onClick={handlehomeclick}
      />

    </div>
  );
}
