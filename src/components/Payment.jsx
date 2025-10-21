import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";
import { useContext } from "react";

export default function Payment() {
  const location = useLocation();
  const { amount, order } = location.state || {};
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("Payment successful!");
    navigate("/adminorders"); // ✅ redirect to total orders page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Page</h1>
      <p>Total Amount: ₹{amount}</p>
      <button
        onClick={handleSuccess}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
