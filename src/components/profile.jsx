import React, { useContext, useEffect } from "react";
import "./css/profile.css"; // Ensure this path matches your structure
import { useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";

export default function Profile() {
  const { setUpdateuser, username } = useContext(myContext); // Use username from context
  const navigate = useNavigate();

  // Get additional user info from localStorage with fallbacks
  const email = localStorage.getItem("email") || "Not provided";
  const profilePic = localStorage.getItem("profilePic") || "/hi.png"; // Fallback to default image

  // Set updateuser when component mounts
  // useEffect(() => {
  //   const userData = {
  //     username: localStorage.getItem("username") || "",
  //     email: localStorage.getItem("email") || "",
  //     password: localStorage.getItem("password") || "",
  //   };
  //   setUpdateuser(userData);
  // }, [setUpdateuser]);

  // Navigation handlers
  const handleEditProfile = () => {
    navigate("/edituser");
  };

  const handleViewOrders = () => {
    navigate("/adminorders");
  };

  const handleChangePassword = () => {
    navigate("/resetpassword");
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          onError={(e) => { e.target.src = "/default-profile.png"; }} // Fallback image
        />
        <h2>{username || "Guest"}</h2> {/* Display username from context or fallback */}
        {/* <p className="profile-email">{email}</p> */}
        <hr />
        <div className="profile-actions">
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={handleViewOrders}>View Orders</button>
          <button className="profile-btn" onClick={handleChangePassword}>
            Change Password
          </button>
          <button className="profile-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}