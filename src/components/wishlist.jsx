import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";
import { Products } from "./products";
import "./css/products.css";

export default function Wishlist() {
  const { wishIds, setWishIds, cartItems, setCartItems } = useContext(myContext);
  const navigate = useNavigate();

  const wishProducts = Products.filter((item) => wishIds.includes(item.id));

  function handleAddToCart(id) {
    // Add to cart if not already added
    if (!cartItems.includes(id)) {
      const updatedCart = [...cartItems, id];
      setCartItems(updatedCart);
    }
    // Navigate after adding (not before)
    navigate("/cart");

    // const updatedWish = wishIds.filter((itemId) => itemId !== id);
    // setWishIds(updatedWish);
 }

  function handleRemoveFromWish(id) {
    const updatedWish = wishIds.filter((itemId) => itemId !== id);
    setWishIds(updatedWish);
  }

  const handlehomeclick=()=>{
    navigate("/dashboard")
  }

  return (
    <div className="products-container">
      <p>
     {/* <Link to="/dashboard">back</Link> */}
      <img
            src="arrow.png"
            alt="User"
            style={{ width: "50px", height: "40px" }}
            onClick={handlehomeclick}
          />
        
      </p>      
      <h1>Your Wishlist</h1>
      {wishProducts.length === 0 ? (
        <p style={{ color: "red", textAlign: "center" }}>No products in wishlist!</p>
      ) : (
        <div className="products-grid">
          {wishProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.imageview} alt={item.name} />
              <Link to={`/dashboard/${item.id}`} className="user-link">
                <h2>{item.name}</h2>
              </Link>
              <p>{item.description}</p>
              <p className="product-price">₹{item.price}</p>
              <div className="product-card-footer">
                <button className="cart-btn" onClick={() => handleAddToCart(item.id)}>
                  {cartItems.includes(item.id) ? "Added to Cart" : "Add to Cart"}
                </button>
                <button className="cart-btn" onClick={() => handleRemoveFromWish(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
