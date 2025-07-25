import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Products from './components/products';
import Contacts from './components/contacts';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AuthModal from './components/authModal';
import CartModal from './components/cartModal';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);      
  const [showCart, setShowCart] = useState(false);     

  return (
    <Router>
      <Navbar
        onSearch={setSearchTerm}
        user={user}
        setUser={setUser}
        setShowCart={setShowCart}   
        cartItems={cartItems}
      />


      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/shop"
          element={
              <Products
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}   
            cartItems={cartItems}
            setCartItems={setCartItems}
            setShowCart={setShowCart}
          />
            }
        />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/login" element={<AuthModal />} />
      </Routes>

      {showCart && (
        <CartModal
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setShowCart(false)}
        />
      )}

      <Footer />
    </Router>
  );
}

export default App;
