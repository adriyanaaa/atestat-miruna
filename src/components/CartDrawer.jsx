import { useNavigate } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export const CartDrawer = () => {
  const navigate = useNavigate();
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQty,
    totalPrice,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="ts-drawer-overlay" onClick={() => setIsOpen(false)} data-testid="cart-drawer-overlay">
      <aside
        className="ts-drawer"
        onClick={(e) => e.stopPropagation()}
        data-testid="cart-drawer"
      >
        <div className="ts-drawer-header">
          <h3>Coșul meu</h3>
          <button
            className="ts-icon-btn"
            onClick={() => setIsOpen(false)}
            data-testid="close-cart-button"
            aria-label="Închide coș"
          >
            <X size={22} />
          </button>
        </div>

        <div className="ts-drawer-body">
          {items.length === 0 ? (
            <div className="ts-drawer-empty" data-testid="cart-empty-state">
              <ShoppingBag size={56} strokeWidth={1.2} />
              <p>Coșul tău este gol</p>
              <span>Adaugă produse pentru a începe</span>
            </div>
          ) : (
            items.map((item) => (
              <div className="ts-drawer-item" key={item.id} data-testid={`cart-item-${item.id}`}>
                <img src={item.image} alt={item.name} />
                <div className="ts-drawer-item-info">
                  <h4>{item.name}</h4>
                  <div className="ts-drawer-item-price">{item.price} lei</div>
                  <div className="ts-qty">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      data-testid={`decrease-qty-${item.id}`}
                      aria-label="Scade cantitate"
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      data-testid={`increase-qty-${item.id}`}
                      aria-label="Crește cantitate"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  className="ts-trash-btn"
                  onClick={() => removeItem(item.id)}
                  data-testid={`remove-item-${item.id}`}
                  aria-label="Șterge"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="ts-drawer-footer">
            <div className="ts-drawer-total">
              <span>Total</span>
              <strong data-testid="cart-total">{totalPrice.toLocaleString("ro-RO")} lei</strong>
            </div>
            <button
              className="ts-btn ts-btn-primary ts-btn-full"
              onClick={handleCheckout}
              data-testid="go-to-checkout-button"
            >
              Continuă comanda
            </button>
            <button
              className="ts-btn ts-btn-ghost ts-btn-full"
              onClick={clearCart}
              data-testid="clear-cart-button"
            >
              Golește coșul
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};
