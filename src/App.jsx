import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import "./App.css";

// Exemple de produits (à remplacer par un vrai fichier plus tard)
const EXAMPLE_PRODUCTS = [
  { id: 1, name: "Fraises fraîches", price: 25, image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Tomates marocaines", price: 15, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Baklava maison", price: 40, image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const navigate = useNavigate();

  // Ajout au panier (à utiliser dans Products plus tard)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Changer quantité
  const handleQuantityChange = (id, qty) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  // Supprimer
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Formulaire
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Commander via WhatsApp
  const handleOrder = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) return;
    const msg =
      `Nouvelle commande:\n` +
      cart.map((item) => `- ${item.name} x${item.quantity} (${item.price} MAD)`).join("\n") +
      `\nTotal: ${cart.reduce((sum, i) => sum + i.price * i.quantity, 0)} MAD\n` +
      `Nom: ${form.name}\nTéléphone: ${form.phone}\nAdresse: ${form.address}\nNotes: ${form.notes || "-"}`;
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  // Navigation bouton panier
  const handleCartClick = () => {
    setShowCart(true);
    navigate("/panier");
  };

  // Fermer panier si on change de page
  React.useEffect(() => {
    setShowCart(false);
  }, [window.location.pathname]);

  return (
    <Router>
      <div className="app-layout">
        <header className="header">
          <div className="logo">Mama Saida</div>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/produits">Produits</Link>
            <Link to="/histoire">Notre Histoire</Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products products={EXAMPLE_PRODUCTS} addToCart={addToCart} />} />
            <Route path="/histoire" element={<About />} />
            <Route path="/panier" element={<Cart cartItems={cart} onQuantityChange={handleQuantityChange} onRemove={handleRemove} onOrder={handleOrder} form={form} onFormChange={handleFormChange} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CartButton count={cart.reduce((sum, i) => sum + i.quantity, 0)} onClick={handleCartClick} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
