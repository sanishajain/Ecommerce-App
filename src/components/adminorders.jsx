import React, { useContext } from "react";
import { myContext } from "./mycontext";
import { Link } from "react-router-dom";
import './css/adminorders.css'; // Ensure this path matches your structure
import { useNavigate } from "react-router-dom";

export default function AdminOrders() {
  const { order } = useContext(myContext);
const navigate=useNavigate();
 const handlehomeclick=()=>{
    navigate("/adminpanel")
  }

  return (
    <div className="admin-orders">
      <h1>My Orders</h1>
       <img
            src="arrow.png"
            alt="User"
            style={{ width: "50px", height: "40px" }}
            onClick={handlehomeclick}
          />
      <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>

      {order.length === 0 ? (
        <p className="empty-orders">No orders placed yet!</p>
      ) : (
        order.map((ord) => (
          <div key={ord.id} className="order-card">
            <h3>Order #{ord.id}</h3>
            <p>Date: {new Date(ord.date).toLocaleString()}</p>
            <p>
              <strong>Total:</strong> <span className="total-amount">₹{ord.total}</span>
            </p>
            <ul>
              {ord.items.map((item) => (
                <li key={item.id}>
                  {item.name} (x{item.quantity}) — ₹{item.subtotal}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}