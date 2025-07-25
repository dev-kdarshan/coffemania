import React from 'react';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section brand">
          <h2 className="logo">CoffeeMania</h2>
          <p>Handcrafted Indian coffee for every soul. Brewed with love, delivered with care.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@coffeemania.in</p>
          <p>Phone: +91 98765 43210</p>
          <div className="socials">
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CoffeeMania · All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
