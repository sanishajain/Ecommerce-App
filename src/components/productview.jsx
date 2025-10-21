
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "./products";
import "./css/productview.css";
import { useContext } from "react";
import { myContext } from "./mycontext";

export default function Productview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { wishIds, setWishIds, cartItems, setCartItems } = useContext(myContext);
 
  const Totalproducts = Products.find((item) => item.id === Number(id));

  function handlecart(id) {
    if (!cartItems.includes(id)) {
      const updatedCart = [...cartItems, id];
      setCartItems(updatedCart);
    }
    navigate("/cart");
    const updatedWish = wishIds.filter((itemId) => itemId !== id);
    setWishIds(updatedWish);
  }

  function handlewishlist(productId) {
    let updatedWishlist;
    if (wishIds.includes(productId)) {
      updatedWishlist = wishIds.filter((id) => id !== productId);
    } else {
      updatedWishlist = [...wishIds, productId];
    }
    setWishIds(updatedWishlist);
    navigate("/wishlist");
  }

  if (!Totalproducts) {
    return <h3>Product not found! Check again</h3>;
  }

  // Use the image array (always an array in your data)
  const productImages = Totalproducts.image;

  return (
    <div className="product-view">
      <h1>{Totalproducts.name}</h1>
      <div className="product-view-content">
        <div className="product-gallery">
          {productImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${Totalproducts.name} - Image ${index + 1}`}
              className="product-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/fallback-image.jpg"; // Fallback image in /public
              }}
            />
          ))}
          {productImages.length > 1 && (
            <div className="product-gallery-dots">
              {productImages.map((_, index) => (
                <div key={index} className="product-gallery-dot" />
              ))}
            </div>
          )}
        </div>
        <div className="product-details">
          <h2>ID: {Totalproducts.id}</h2>
          <h2>Name: {Totalproducts.name}</h2>
          <p className="description">{Totalproducts.fulldescription}</p>
          <p className="price">₹ {Totalproducts.price}</p>
        </div>
        <div>
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>
        </div>
      </div>
      <div className="product-card-footer">
        <button className="cart-btn" onClick={() => handlecart(Totalproducts.id)}>
          Add to Cart
        </button>
        <button className="wishlist-btn" onClick={() => handlewishlist(Totalproducts.id)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
