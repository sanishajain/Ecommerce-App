import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { myContext } from './mycontext';
import { useContext } from 'react';

export default function ResetPassword() {

    const { users, password } = useContext(myContext)
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();





    const handleSubmit = () => {
        if (newPassword === "" || confirmPassword === "") {
            alert("Please fill in both fields.");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!/[@!#]/.test(newPassword)) {
            alert("Password must include at least one special character (@, !, #)");
            return;
        }
        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        alert("Password reset successful.");
        localStorage.setItem("password", newPassword);
      
        setConfirmPassword("")
        setNewPassword("")
          navigate("/");
    };
    return (
        <div>
            <h2>Reset Password Page</h2>
            <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <input type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            <p><Link to="/home">Back</Link></p>

        </div>
    )
}


