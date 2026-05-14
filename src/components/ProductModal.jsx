import { X, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export const ProductModal = ({ product, onClose }) => {
  const { addItem } = useCart();
  if (!product) return null;

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} adăugat în coș`);
    onClose();
  };

  return (
    <div className="ts-modal-overlay" onClick={onClose} data-testid="product-modal-overlay">
      <div
        className="ts-modal"
        onClick={(e) => e.stopPropagation()}
        data-testid="product-modal"
      >
        <button
          className="ts-modal-close"
          onClick={onClose}
          data-testid="close-product-modal"
          aria-label="Închide"
        >
          <X size={22} />
        </button>
        <div className="ts-modal-grid">
          <div className="ts-modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="ts-modal-info">
            <span className="ts-product-cat">{product.category}</span>
            <h2>{product.name}</h2>
            <div className="ts-modal-prices">
              <span className="ts-price-new-lg">
                {product.price.toLocaleString("ro-RO")} lei
              </span>
              {product.oldPrice && (
                <span className="ts-price-old-lg">
                  {product.oldPrice.toLocaleString("ro-RO")} lei
                </span>
              )}
            </div>
            <p className="ts-modal-desc">{product.description}</p>
            <ul className="ts-specs-list">
              {product.specs.map((spec, i) => (
                <li key={i}>
                  <Check size={16} strokeWidth={3} />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
            <button
              className="ts-btn ts-btn-primary ts-btn-lg"
              onClick={handleAdd}
              data-testid="modal-add-to-cart"
            >
              <ShoppingCart size={18} /> Adaugă în coș
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
