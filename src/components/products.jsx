import React, { useEffect } from "react";
import ProductCard from "./productcard.jsx";
import "../styles/products.css";
import coffeeProducts from "./data.js";

const Products = ({ searchTerm, setSearchTerm, cartItems, setCartItems, setShowCart })  => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [showAll, setShowAll] = React.useState(false);

  const categories = ["All", ...new Set(coffeeProducts.map((p) => p.category))];

  const filteredProducts = coffeeProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setShowCart(true);
  };

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <div className="products-wrapper">
      <div className="search-filter-bar">
<input
  type="text"
  placeholder="Search products..."
  className="search-input"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setShowAll(false);
          }}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="products-container">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.img}
              price={product.price}
              info={product.info}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <p style={{ color: "#fff" }}>No matching products found.</p>
        )}
      </div>

      {filteredProducts.length > 6 && !showAll && (
        <div className="view-more-btn">
          <button onClick={() => setShowAll(true)}>
            View More <i className="bi bi-chevron-compact-down"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
