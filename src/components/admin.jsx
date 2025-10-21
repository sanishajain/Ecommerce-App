import { useState } from "react"; // Removed { use } import
import { useNavigate } from "react-router-dom";
import './css/admin.css'; // Ensure this path matches your structure

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
console.log("AdminLogin:",username);

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      alert("welcome")
      setPassword("")
      setUsername("")
      navigate("/adminpanel");
    } else {
      alert("Invalid admin credentials");
        setUsername("")
    setPassword("")
    }
  
  };
const handlehomeclick=()=>{
      navigate("/")
        setUsername("")
    setPassword("")

}
  return (
    <div className="admin-login">
      <h3>Admin Dashboard</h3>
      <input
        type="text"
        name="username"
        placeholder="enter username"
          autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="enter password"
          autoComplete="new-password"
       
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
              <button onClick={handleLogin}>Login</button>

      </div>
      
       <img
            src="home.png"
            alt="User"
            style={{ width: "50px", height: "30px" }}
            onClick={handlehomeclick}
          />
          <br />
    </div>
  );
}