import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./mycontext";
import { Link } from "react-router-dom";

export default function AddProducts() {
  const { products, setProducts } = useContext(myContext);
  const navigate = useNavigate();

  // Local state for new product fields
  const [newProduct, setNewProduct] = useState({
    id: products.length + 1,
    name: "",
    description: "",
    fulldescription: "",
    price: "",
    image: ""
  });

  // Update local state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Add product to context and navigate
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Name and price are required!");
      return;
    }
    setProducts([...products, newProduct]);
    navigate("/adminproducts");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Link to="/adminpanel" style={{ textDecoration: "none", color: "blue" }}>Admin Panel</Link>
      <br /><br />
      <h2>Add Product</h2>
      <input
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <br /><br />
      <textarea
        name="description"
        value={newProduct.description}
        onChange={handleChange}
        placeholder="Description"
        rows="4"
        cols="40"
      />
      <br /><br />
      <textarea
        name="fulldescription"
        value={newProduct.fulldescription}
        onChange={handleChange}
        placeholder="Full Description"
        rows="4"
        cols="40"
      />
      <br /><br />
      <input
        type="number"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <br /><br />
      <input
        type="text"
        name="image"
        value={newProduct.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <br /><br />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}