import React from "react";
import "../App.css";

const Products = ({ products = [], addToCart }) => (
  <section className="products-page">
    <h2>Nos Produits</h2>
    <div className="products-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-img" />
          <h4 className="product-title">{product.name}</h4>
          <span className="product-price">{product.price.toFixed(2)} MAD</span>
          <button className="add-btn" onClick={() => addToCart(product)}>
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Products; 