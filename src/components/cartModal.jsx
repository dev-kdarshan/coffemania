import React, { useState } from "react";
import "../styles/cartModal.css";
import CartItem from "./cartitem.jsx";
import OrderSummary from "./orderSummary.jsx";

function CartModal({ cartItems = [], setCartItems, onClose }) {
  const [promoCode, setPromoCode] = useState("");

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-backdrop">
      <div className="cart-modal">
        <button className="cartModal-close-btn" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
        <div className="cart-left">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <p>{cartItems.length} Items</p>
          </div>
          <div className="cart-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={handleRemove}
              />
             
            ))}
          </div>
        </div>
        <div className="cart-right">
          <OrderSummary
            items={cartItems}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
          />
        </div>
      </div>
    </div>
  );
}

export default CartModal;
