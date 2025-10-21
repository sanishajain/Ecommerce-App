import React, { useContext } from "react";
import { myContext } from "./mycontext";
import { useNavigate } from "react-router-dom";
import "./css/adminusers.css";

export default function AdminUsers() {
  const { users, setUsers, banUser, setBanUser } = useContext(myContext);
  const navigate = useNavigate();

  function handleDelete(deleteUser) {
    setUsers(users.filter((user) => user !== deleteUser));
  }

  function handleBan(user) {
    const userEmail = user.email; // Use email as the ban identifier
    if (banUser.includes(userEmail)) {
      setBanUser(banUser.filter((email) => email !== userEmail)); // Unban
    } else {
      setBanUser([...banUser, userEmail]); // Ban
    }
  }

  const handleHomeClick = () => {
    navigate("/adminpanel");
  };

  return (
    <div className="admin-users-page">
      <div className="admin-users-header">
        <h2>Registered Users</h2>
        <img
          src="arrow.png"
          alt="Go Back"
          className="back-icon"
          onClick={handleHomeClick}
        />
      </div>

      {users.length === 0 ? (
        <p className="no-users">No users found.</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(user)}>
                    Delete
                  </button>
                  <button
                    className="ban-btn"
                    onClick={() => handleBan(user)}
                  >
                    {banUser.includes(user.email) ? "Unban" : "Ban"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}