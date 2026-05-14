import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export const ProductCard = ({ product, onView }) => {
  const { addItem } = useCart();
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} adăugat în coș`);
  };

  return (
    <article
      className="ts-product-card"
      onClick={() => onView(product)}
      data-testid={`product-card-${product.id}`}
    >
      {discount > 0 && (
        <span className="ts-discount-badge">-{discount}%</span>
      )}
      <div className="ts-product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="ts-product-body">
        <span className="ts-product-cat">{product.category}</span>
        <h3 className="ts-product-name">{product.name}</h3>
        <div className="ts-product-prices">
          <span className="ts-price-new">{product.price.toLocaleString("ro-RO")} lei</span>
          {product.oldPrice && (
            <span className="ts-price-old">
              {product.oldPrice.toLocaleString("ro-RO")} lei
            </span>
          )}
        </div>
        <div className="ts-product-actions">
          <button
            className="ts-btn ts-btn-ghost"
            onClick={(e) => {
              e.stopPropagation();
              onView(product);
            }}
            data-testid={`view-product-${product.id}`}
          >
            <Eye size={16} /> Detalii
          </button>
          <button
            className="ts-btn ts-btn-primary"
            onClick={handleAdd}
            data-testid={`add-to-cart-${product.id}`}
          >
            <ShoppingCart size={16} /> Adaugă
          </button>
        </div>
      </div>
    </article>
  );
};
