import logo from './logo.svg';
import './App.css';
import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import ProductsList from './components/productslist';
import { Products } from './components/products';
import ProductView from './components/productview';
import Wishlist from './components/wishlist';
import Cartlist from './components/cartlist';
import ForgotPassword from './components/forgotten';
import ResetPassword from './components/resetpassword';
import Profile from './components/profile';
import Role from './components/role';
import Admin from './components/admin';
import { myContext } from './components/mycontext';
import AdminPanel from './components/adminpanel';
import AdminProducts from './components/adminproducts';
import AdminUsers from './components/adminusers';
import EditProducts from './components/editproducts';
import AddProducts from './components/addproducts';
import Productli from './components/productli';
import Payment from './components/Payment';
import AdminOrders from './components/adminorders';
import EditUser from './components/edituserdetails';

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishIds, setWishIds] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [products, setProducts] = useState(Products);
  const [users, setUsers] = useState([]);
  const [banUser, setBanUser] = useState([]);
  const [order, setOrder] = useState([]);
  const [updateuser, setUpdateuser] = useState(null);
   useEffect(() => {
  setEmail("")
  setPassword("")
  }, []);

  const values = {
    email, setEmail,
    username, setUsername,
    password, setPassword,
    emailOrUsername, setEmailOrUsername,
    cartItems, setCartItems,
    wishIds, setWishIds,
    confirmPassword, setConfirmPassword,
    products, setProducts,
    users, setUsers,
    banUser, setBanUser,
    order, setOrder,
    updateuser, setUpdateuser
  };

  return (
    <Router>
      <myContext.Provider value={values}>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Role />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/dashboard" element={<ProductsList />} />
              <Route path="/dashboard/:id" element={<ProductView />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cartlist />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminpanel" element={<AdminPanel />} />
              <Route path="/adminproducts" element={<AdminProducts />} />
              <Route path="/adminusers" element={<AdminUsers />} />
              <Route path="/editproducts" element={<EditProducts />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/pro" element={<Productli />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/adminorders" element={<AdminOrders />} />
              <Route path="/edituser" element={<EditUser />} />
              {/* Add a fallback route for unmatched paths */}
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </header>
        </div>
      </myContext.Provider>
    </Router>
  );
}

export default App;