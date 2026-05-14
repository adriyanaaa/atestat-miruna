import { Zap, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="ts-footer" data-testid="site-footer">
      <div className="ts-container ts-footer-inner">
        <div className="ts-footer-col">
          <div className="ts-brand">
            <div className="ts-logo">
              <Zap size={18} strokeWidth={2.5} />
            </div>
            <div>
              <div className="ts-brand-name">TECHSTORE</div>
              <div className="ts-brand-sub">ELECTRONICS SHOP</div>
            </div>
          </div>
          <p className="ts-footer-text">
            Magazin online de electronice premium. Livrare rapidă în toată
            România.
          </p>
        </div>

        <div className="ts-footer-col">
          <h4>Magazin</h4>
          <Link to="/produse">Toate produsele</Link>
          <Link to="/produse">Telefoane</Link>
          <Link to="/produse">Laptopuri</Link>
          <Link to="/produse">Accesorii</Link>
        </div>

        <div className="ts-footer-col">
          <h4>Companie</h4>
          <Link to="/contact">Contact</Link>
          <a href="#">Despre noi</a>
          <a href="#">Termeni</a>
          <a href="#">Confidențialitate</a>
        </div>

        <div className="ts-footer-col">
          <h4>Urmărește-ne</h4>
          <div className="ts-socials">
            <a href="#" className="ts-social" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="ts-social" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="ts-social" aria-label="Youtube">
              <Youtube size={18} />
            </a>
            <a href="#" className="ts-social" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="ts-footer-bottom">
        <p>© {new Date().getFullYear()} TechStore. Proiect personal demonstrativ.</p>
      </div>
    </footer>
  );
};
