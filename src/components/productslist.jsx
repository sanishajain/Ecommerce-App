import React, { useState, useEffect, useContext } from "react";
import { Products } from "./products";
import "./css/products.css";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./mycontext";

export default function ProductsList() {
  const { products, cartItems, setCartItems, wishIds, setWishIds, emailOrUsername } =
    useContext(myContext);
  const [search, setsearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("");

  function handleWish(id) {
    if (wishIds.includes(id)) {
      setWishIds(wishIds.filter((item) => item !== id));
    } else {
      setWishIds([...wishIds, id]);
    }
  }

  function handleCart(id) {
    if (cartItems.includes(id)) {
      setCartItems(cartItems.filter((item) => item !== id));
    } else {
      setCartItems([...cartItems, id]);
    }
  }

  const navigate = useNavigate();

  const HandlePriceSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    let sortedProducts = [...filteredProducts];
    if (order === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  const Handlesearch = () => {
    const found = Products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(found.length > 0 ? found : []);
  };

  const handlehomeclick = () => {
    navigate("/home");
  };

  return (
    <div>
      {/* ---------- Header ---------- */}
      <div className="header">
        <div>
          <h1 className="back-home">Ecommerce</h1>
          <h2>App</h2>
        </div>

        <input
          type="text"
          name="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") Handlesearch();
          }}
        />

        <select name="category" className="sortby" onChange={HandlePriceSort}>
          <option value="">price</option>
          <option value="low-to-high">low to high</option>
          <option value="high-to-low">high to low</option>
        </select>

        {/* Wishlist Icon */}
        <div className="wishlist-icon" style={{ position: "relative", cursor: "pointer" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt="Wishlist"
            style={{ width: "30px", height: "30px" }}
            onClick={() => navigate("/wishlist", { state: { wishIds } })}
          />
          <span
            className="wishlist-count"
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {wishIds.length}
          </span>
        </div>

        {/* Cart Icon */}
        <div className="cart-icon" style={{ position: "relative", cursor: "pointer" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart"
            style={{ width: "30px", height: "30px" }}
            onClick={() => navigate("/cart", { state: { cartItems } })}
          />
          <span
            className="cart-count"
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {cartItems.length}
          </span>
        </div>

        <div className="user-icon" style={{ position: "relative", cursor: "pointer" }}>
          <img
            src="hi.png"
            alt="User"
            style={{ width: "40px", height: "40px" }}
            onClick={() => navigate("/profile")}
          />
        </div>

        <div className="home-icon" style={{ position: "relative", cursor: "pointer" }}>
          <img
            src="home.png"
            alt="Home"
            style={{ width: "50px", height: "40px" }}
            onClick={handlehomeclick}
          />
        </div>
      </div>

      {/* ---------- Products Section ---------- */}
      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div className="product-card" key={index}>
                <img src={item.imageview} alt={item.name} />
                <Link to={`/dashboard/${item.id}`} className="user-link">
                  <h2>{item.name}</h2>
                </Link>
                <p>{item.description}</p>

                <div
                  className="product-card-footer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p className="product-price">₹{item.price}</p>

                  <div style={{ display: "flex", gap: "10px" }}>
                    {/* Add to Cart */}
                    <img
                      src={
                        cartItems.includes(item.id)
                          ? "/shopping-cart.png"
                          : "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                      }
                      alt="cart"
                      className="cart-icon"
                      onClick={() => handleCart(item.id)}
                      style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    />

                    {/* Add to Wishlist */}
                    <img
                      src={
                        wishIds.includes(item.id)
                          ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                          : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                      }
                      alt="Wishlist"
                      style={{ width: "30px", height: "30px", cursor: "pointer" }}
                      onClick={() => handleWish(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "red" }}>No product found!</p>
          )}
        </div>
      </div>

      {/* ---------- Footer ---------- */}<footer>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li>Men's Fashion</li>
              <li>Women's Fashion</li>
              <li>Electronics</li>
              <li>Home & Kitchen</li>
              <li>Beauty & Health</li>
              <li>Sports & Fitness</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>Shipping Info</li>
              <li>Payment Options</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Investor Relations</li>
              <li>Corporate Responsibility</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Policies</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
              <li>Cookie Policy</li>
              <li>Security</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>
            <ul>
              <li>Contact Us</li>
              <li>Customer Support</li>
              <li>Email: support@ecommerce.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Live Chat</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} E-Shop | All Rights Reserved <br />
          <a href="#" style={{ color: "#999", marginRight: "10px" }}>
            Contact
          </a>
          <a href="#" style={{ color: "#999", marginRight: "10px" }}>
            Terms of Use
          </a>
          <a href="#" style={{ color: "#999" }}>
            Privacy Policy
          </a>
        </div>
      </footer>

    </div>
  );
}
