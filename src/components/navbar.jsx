import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import AuthModal from "./authModal";

const Navbar = ({ user, setUser, setShowCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };
  const handleLogin = (userData) => setUser(userData);

  useEffect(() => {
    if (showAuth) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [showAuth]);

  return (
    <nav className="navbar">
      <div className="logo">CoffeeMania</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link className="navlinks" to="/">Home</Link>
        <Link className="navlinks" to="/shop">Shop</Link>
        <Link className="navlinks" to="/contact">Contact</Link>
      </div>

      <div className="right-section">
        {!user ? (
          <button className="log-btn" onClick={() => setShowAuth(true)}>Login / Signup</button>
        ) : (
          <div className="profile-container">
            <i
              className="myprofile bi bi-person-circle nav-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            ></i>

            {dropdownOpen && (
              <div className="profile-dropdown">
                <p>Hello, {user.username}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}

        <i className="mycart bi bi-cart3 nav-icon" onClick={() => setShowCart(true)}></i>

        <div className="hamburger" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
      </div>

      {showAuth && !user && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
        />
      )}
    </nav>
  );
};

export default Navbar;
