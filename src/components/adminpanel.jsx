import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Corrected import: removed { use }
import './css/adminpanel.css'; // Ensure this path matches your structure

export default function AdminPanel() {
    const navigate = useNavigate();

    const handleProducts = () => {
        navigate("/adminproducts");
    };

    const handleOrders = () => {
        navigate("/adminorders");
    };

    const handleUsers = () => {
        navigate("/adminusers");
    };

    const handleAddProduct = () => {
        navigate("/addproducts");
    };

    const handlehomeclick = () => {
        navigate("/")

    }


    return (
        <div className="admin-panel">
            {/* <Link to="/">Home</Link> */}
            <img
                src="home.png"
                alt="User"
                style={{ width: "50px", height: "40px" }}
                onClick={handlehomeclick}
            />
            <br />
            <br />
            <h2>Welcome to the Admin Panel</h2>
            <p>Here you can manage products, view orders, and handle user accounts.</p>
            <div className="admin-panel-buttons">
                <button onClick={handleProducts}>Manage Products</button>
                <button onClick={handleAddProduct}>Add Product</button>
                <button onClick={handleOrders}>View Orders</button>
                <button onClick={handleUsers}>Manage Users</button>
            </div>
        </div>
    );
}