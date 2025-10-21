import React, { useContext, useState } from "react";
import { myContext } from "./mycontext";
import { Products } from "./products";
import "./css/adminproducts.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AdminProducts() {
  const { products, setProducts } = useContext(myContext);
  const [editproducts, setEditProducts] = useState(products)
  const navigate = useNavigate();


  function EditProducts(product) {
    navigate("/editproducts", { state: { product } });


  }

  function handleDelete(deleteProduct) {
    setProducts(products.filter(product => product !== deleteProduct))
  }

   const handlehomeclick=()=>{
    navigate("/adminpanel")
  }
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
   <img
            src="arrow.png"
            alt="User"
            style={{ width: "50px", height: "40px" }}
            onClick={handlehomeclick}
          />
      <h2>All Saved Products</h2>

      {products.length === 0 ? (
        <p>No products added yet!</p>
      ) : (
        products.map((product) => (
          <div className="product-view-content" key={product.id}>
            <img src={product.imageview} alt={product.name} />
            <div className="product-details">
              <h2>ID: {product.id}</h2>
              <h2>Name: {product.name}</h2>
              <p className="description">{product.fulldescription}</p>
              <p className="price">₹ {product.price}</p>
            </div>
            <div>
              <button onClick={() => EditProducts(product)}>Edit</button>
              <button onClick={() => handleDelete(product)}>delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
