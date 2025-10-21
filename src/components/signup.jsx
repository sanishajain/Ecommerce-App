import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";
import "./css/signup.css";

export default function Register() {
  const { users, setUsers, password, setPassword, username, setUsername, email, setEmail } = useContext(myContext); // ✅ only users come from context
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState(""); // ✅ local state for password
  //const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  console.log("Signup page:", username);
  useEffect(() => {
    setEmail("")
    setPassword("")
  }, []);

  // ✅ Check if email already exists
  const alreadyRegd = () => users.some((user) => user.email === email);

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Validation checks
    if (username === "" || password === "" || email === "") {
      alert("All fields are required!");
      return;
    }

    if (alreadyRegd()) {
      alert("User with this email already exists!");
      return;
    }

    if (!/[@!#]/.test(password)) {
      alert("Password must include at least one special character (@, !, #)");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email is invalid!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    // 🔒 Check if password already used by another user
    const passwordUsed = users.some((user) => user.password === password);
    if (passwordUsed) {
      alert("This password has already been used. Please choose a stronger one!");
      return;
    }

    // ✅ Add new user to context
    const userData = { username, email, password };
    setUsers([...users, userData]);

    alert("Account created successfully!");

    setEmail("")
    setPassword("")
    setUsername("")
    navigate("/home");
  };

  console.log("Registered Users:", users);

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Choose a username"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your email"
          autoComplete="new-username"
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Choose a password"
            autoComplete="new-password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button> */}
        </div>

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/home">Login</Link>
        </p>
      </form>
    </div>
  );
}
