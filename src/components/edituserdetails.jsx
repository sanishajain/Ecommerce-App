import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";
//import "./css/edituser.css";
import { Link } from "react-router-dom";
export default function EditUser() {
    const { users, setUsers, updateuser, setUpdateuser } = useContext(myContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    // ✅ Pre-fill existing user data when page loads
    // useEffect(() => {
    //     if (updateuser) {
    //         setUsername(updateuser.username || "");
    //         setEmail(updateuser.email || "");
    //         setPassword(updateuser.password || "");
    //         setIsLoading(false); // Stop loading once data is set
    //     } else {
    //         // If no updateuser, redirect back to profile (should not happen post-login)
    //         navigate("/profile");
    //         setIsLoading(false);
    //     }
    // }, [updateuser, navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!updateuser) {
            alert("No user data available to update!");
            navigate("/profile");
            return;
        }

        if (username === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Invalid email format!");
            return;
        }

        // ✅ Create updated user object
        const updatedUser = { ...updateuser, username, email, password };

        // ✅ Update the user in the users list
        const updatedUsers = users.map((user) =>
            user.email === updateuser.email ? updatedUser : user
        );

        setUsers(updatedUsers);
        setUpdateuser(updatedUser);

        alert("User details updated successfully!");
        navigate("/profile"); // ✅ redirect back to profile
    };

    if (isLoading) {
        return <div>Loading...</div>; // Show loading state until data is ready
    }

    console.log(users)
    return (

        <div className="edituser-container">


            <Link to="/dashboard">Back</Link>


            <h1>Edit User Details</h1>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                <button type="submit">Save Changes</button>
                <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => navigate("/profile")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}