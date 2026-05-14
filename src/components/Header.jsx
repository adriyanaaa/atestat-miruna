import { Link, NavLink } from "react-router-dom";
import { Zap, ShoppingCart, Home, Smartphone, Mail } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="ts-header" data-testid="site-header">
      <div className="ts-container ts-header-inner">
        <Link to="/" className="ts-brand" data-testid="brand-link">
          <div className="ts-logo">
            <Zap size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="ts-brand-name">TECHSTORE</div>
            <div className="ts-brand-sub">ELECTRONICS SHOP</div>
          </div>
        </Link>

        <nav className="ts-nav" data-testid="site-nav">
          <NavLink to="/" end data-testid="nav-home">
            <Home size={16} /> Acasă
          </NavLink>
          <NavLink to="/produse" data-testid="nav-products">
            <Smartphone size={16} /> Produse
          </NavLink>
          <NavLink to="/contact" data-testid="nav-contact">
            <Mail size={16} /> Contact
          </NavLink>
        </nav>

        <button
          className="ts-cart-button"
          onClick={() => setIsOpen(true)}
          data-testid="cart-button-header"
        >
          <ShoppingCart size={18} />
          <span>Coș</span>
          {totalItems > 0 && (
            <span className="ts-cart-badge" data-testid="cart-count">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
