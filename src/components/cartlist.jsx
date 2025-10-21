import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Products } from "./products";
import { myContext } from "./mycontext";
import "./css/cart.css";

export default function Cartlist() {
  const { cartItems, setCartItems, order, setOrder, wishIds, setWishIds } = useContext(myContext);
  const navigate = useNavigate();

  // Get products added to cart
  const cartProducts = Products.filter((item) => cartItems.includes(item.id));

  // Initialize quantities with 1 for each product
  const initialQuantities = cartProducts.reduce((acc, item) => {
    acc[item.id] = 1;
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(initialQuantities);

  const increaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 1) }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((itemId) => itemId !== id));
  };

  const totalAmount = cartProducts.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );

  const handleBuyNow = (item) => {
    const itemPrice = item.price * (quantities[item.id] || 1);
    const newOrder = {
      id: Date.now(),
      items: [{ ...item, quantity: quantities[item.id] || 1 }],
      total: itemPrice,
      date: new Date().toISOString(),
    };

    setOrder((prevOrders) => [...(prevOrders || []), newOrder]);

    // Navigate to payment
    navigate("/payment", { state: { amount: itemPrice, order: newOrder } });

    // Remove purchased item from cart
    setCartItems(cartItems.filter((itemId) => itemId !== item.id));
  };

  const handleProceedToPayment = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cartProducts.map((item) => ({
        ...item,
        quantity: quantities[item.id] || 1,
        subtotal: item.price * (quantities[item.id] || 1),
      })),
      total: totalAmount,
      date: new Date().toISOString(),
    };

    setOrder((prevOrders) => [...(prevOrders || []), newOrder]);

    navigate("/payment", { state: { amount: totalAmount, order: newOrder } });

    // Remove purchased items from cart
    const purchasedIds = newOrder.items.map((item) => item.id);
    setCartItems(cartItems.filter((itemId) => !purchasedIds.includes(itemId)));
  };

  const handleWishlist = (item) => {
    const productId = item.id;

    // Add to wishlist if not already there
    if (!wishIds.includes(productId)) {
      setWishIds([...wishIds, productId]);
    }

    // Remove from cart
    setCartItems(cartItems.filter((id) => id !== productId));

    // Navigate to wishlist page
    navigate("/wishlist");
  };

  const handlehomeclick=()=>{
      navigate("/dashboard")

}
 

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">My Cart</h1>
        {/* <Link to="/dashboard" className="back-link">← Back to Products</Link> */}

          <img
            src="arrow.png"
            alt="User"
            style={{ width: "50px", height: "40px" }}
            onClick={handlehomeclick}
          />
        
      </div>

      {cartProducts.length === 0 ? (
        <p className="empty-cart">No products in cart!</p>
      ) : (
        <>
          <div className="cart-list">
            {cartProducts.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.imageview} alt={item.name} />
                </div>

                <div className="cart-item-info">
                  <Link to={`/dashboard/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <p className="cart-item-desc">{item.description}</p>
                  <p className="cart-item-price">
                    ₹{item.price * (quantities[item.id] || 1)}
                  </p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{quantities[item.id]}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button className="cart-btn" onClick={() => removeItem(item.id)}>Remove</button>
                  <button className="cart-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
                  <button className="cart-btn wishlist-btn" onClick={() => handleWishlist(item)}>Save for Later</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h2 className="total-amount">Total Amount: ₹{totalAmount}</h2>
            <button className="cart-btn proceed-btn" onClick={handleProceedToPayment}>
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
