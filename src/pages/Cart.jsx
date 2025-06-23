import React from "react";
import "../App.css";

const Cart = ({ cartItems, onQuantityChange, onRemove, onOrder, form, onFormChange }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <section className="cart-page">
      <h2>Mon Panier</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Votre panier est vide.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <div className="cart-qty">
                  <button className="qty-btn" onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <span className="cart-item-price">{item.price.toFixed(2)} MAD</span>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <span>Total :</span>
        <span className="cart-total-amount">{total.toFixed(2)} MAD</span>
      </div>
      <form className="cart-form" onSubmit={onOrder}>
        <input type="text" name="name" placeholder="Nom complet" value={form.name} onChange={onFormChange} required />
        <input type="tel" name="phone" placeholder="Téléphone" value={form.phone} onChange={onFormChange} required />
        <input type="text" name="address" placeholder="Adresse de livraison" value={form.address} onChange={onFormChange} required />
        <textarea name="notes" placeholder="Notes (optionnel)" value={form.notes} onChange={onFormChange} />
        <button type="submit" className="order-btn">Commander via WhatsApp</button>
      </form>
    </section>
  );
};

export default Cart; 