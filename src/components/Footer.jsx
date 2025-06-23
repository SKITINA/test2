import React from "react";
import "../App.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <h3>Mama Saida</h3>
        <p>Créer des desserts marocains authentiques avec amour et tradition depuis 2020. Chaque bouchée raconte une histoire de patrimoine et de saveur.</p>
      </div>
      <div className="footer-contact">
        <h4>Contactez-Nous</h4>
        <p>📞 (555) 123-4567</p>
        <p>✉️ hello@mamasida.com</p>
        <p>📍 123 Main St, City, State</p>
      </div>
      <div className="footer-social">
        <h4>Suivez Notre Parcours</h4>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="footer-lang">
          <button className="lang-btn">🇫🇷 Français</button>
          <button className="lang-btn">🇲🇦 العربية</button>
          <button className="lang-btn">🇬🇧 English</button>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2024 Mama Saida. Tous droits réservés.</span>
    </div>
  </footer>
);

export default Footer; 