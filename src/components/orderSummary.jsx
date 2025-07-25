import React from "react";

const OrderSummary = ({ items, promoCode, setPromoCode, shipping = 5 }) => {
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="summary-row">
        <span>Items {itemCount}</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>₹{shipping.toFixed(2)}</span>
      </div>
      <div className="promo">
        <label>PROMO CODE</label>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter your code"
        />
        <button className="apply-btn">Apply</button>
      </div>
      <div className="summary-row total-cost">
        <strong>Total Cost</strong>
        <strong>₹{total.toFixed(2)}</strong>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default OrderSummary;
