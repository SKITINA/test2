import React from "react";
import "../App.css";

const CartButton = ({ count, onClick }) => (
  <button className="cart-fab" onClick={onClick} aria-label="Voir le panier">
    <span className="cart-icon">🛒</span>
    {count > 0 && <span className="cart-badge">{count}</span>}
  </button>
);

export default CartButton; 