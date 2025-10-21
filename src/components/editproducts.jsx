import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";

export default function EditProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const { products, setProducts } = useContext(myContext);

  const { product } = location.state || {}; // ✅ receiving product from navigate
  const [updatedProduct, setUpdatedProduct] = useState(product || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    const updatedList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedList);
    navigate("/adminproducts"); // go back after saving
  };

  if (!product) {
    return <h3 style={{ textAlign: "center" }}>No product data found!</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Edit Product Details</h2>

      <h3>ID: {updatedProduct.id}</h3> {/* ✅ shows old ID */}

      <input
        type="text"
        name="name"
        value={updatedProduct.name || ""}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <br /><br />

      <textarea
        name="fulldescription"
        value={updatedProduct.fulldescription || ""}
        onChange={handleChange}
        placeholder="Full Description"
        rows="4"
        cols="40"
      />
      <br /><br />

      <input
        type="number"
        name="price"
        value={updatedProduct.price || ""}
        onChange={handleChange}
        placeholder="Price"
      />
      <br /><br />

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}
