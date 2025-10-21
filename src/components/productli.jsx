import React from 'react';
import { useState } from 'react';
import { Products } from './products';
import { useContext } from 'react';
import { myContext } from './mycontext';
import { Link } from 'react-router-dom';
import './css/products.css';

export default function Productli(){
    const { products } = useContext(myContext);
    const [cartItems, setCartItems] = useState([]);
    function handleCart(id) {
        if (cartItems.includes(id)) {
          setCartItems(cartItems.filter((item) => item !== id));
        } else {
          setCartItems([...cartItems, id]);
        }
      }
    return(
        <div>
            <h2>Product List Component</h2>
            <p>This is a placeholder for the Product List component.</p>
            <div>
              <Link to="/cart">View Cart  {cartItems.length}</Link>
            </div>
            <p>Number of products available: {products.length}</p>
            <ul>{products.map(item => 
                <li key={item.id}><Link to={`/dashboard/${item.id}`}>{item.name}</Link>
                     <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.name} width="100"/>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {/* Add to Cart */}
                    <div className="add-to-cart-button">
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
                    </div>
                </div>
                </li>
                )}
            </ul>
            
        </div>
    )
}