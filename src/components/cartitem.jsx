import React from "react";
import "../styles/cartModal.css";

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} className="cartitem-product-image" />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="platform">{item.platform}</p>
        <p className="remove" onClick={() => onRemove(item.id)}>Remove</p>
      </div>
      <div className="quantity-control">
        <button onClick={() => onDecrement(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrement(item.id)}>+</button>
      </div>
      <div className="price">₹{item.price.toFixed(2)}</div>
      <div className="total">₹{(item.quantity * item.price).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
