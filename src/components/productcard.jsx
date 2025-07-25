import React from 'react';
import "../styles/products.css";

const ProductCard = ({ name, image, price, info, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <p className="product-description">{info}</p>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        <i className="bi bi-plus"></i> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
