import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  CheckCircle2,
  Package,
  MapPin,
  Mail,
  CreditCard,
  Truck,
  Calendar,
  Home as HomeIcon,
  ShoppingBag,
} from "lucide-react";

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const estimateDelivery = (iso) => {
  const d = new Date(iso);
  d.setDate(d.getDate() + 2);
  return d.toLocaleDateString("ro-RO", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
};

export const OrderSuccess = () => {
  const [order] = useState(() => {
    try {
      const raw = sessionStorage.getItem("techstore_last_order");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  if (!order) return <Navigate to="/" replace />;

  return (
    <main className="ts-success-page" data-testid="order-success-page">
      <div className="ts-success-bg" />
      <div className="ts-container">
        <div className="ts-success-card">
          <div className="ts-success-icon" data-testid="success-icon">
            <CheckCircle2 size={56} strokeWidth={2} />
          </div>
          <span className="ts-success-eyebrow">Confirmare</span>
          <h1 data-testid="success-title">Comandă plasată cu succes!</h1>
          <p className="ts-success-sub">
            Mulțumim, <strong>{order.customer.firstName}</strong>! Comanda ta a fost înregistrată
            și va fi procesată în cel mai scurt timp.
          </p>

          <div className="ts-order-number" data-testid="order-number">
            <span>Număr comandă</span>
            <strong>#{order.orderNumber}</strong>
          </div>

          <div className="ts-success-meta">
            <div>
              <Calendar size={16} />
              <div>
                <small>Data plasării</small>
                <strong>{formatDate(order.date)}</strong>
              </div>
            </div>
            <div>
              <Truck size={16} />
              <div>
                <small>Estimare livrare</small>
                <strong>{estimateDelivery(order.date)}</strong>
              </div>
            </div>
            <div>
              <CreditCard size={16} />
              <div>
                <small>Plată</small>
                <strong>Card •••• {order.payment.last4}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="ts-order-grid">
          <section className="ts-order-section">
            <h3>
              <Package size={18} /> Produse comandate
            </h3>
            <div className="ts-order-items" data-testid="order-items">
              {order.items.map((i) => (
                <div className="ts-order-item" key={i.id}>
                  <img src={i.image} alt={i.name} />
                  <div className="ts-order-item-info">
                    <h4>{i.name}</h4>
                    <span>{i.quantity} × {i.price.toLocaleString("ro-RO")} lei</span>
                  </div>
                  <strong>
                    {(i.price * i.quantity).toLocaleString("ro-RO")} lei
                  </strong>
                </div>
              ))}
            </div>

            <div className="ts-order-totals">
              <div className="ts-summary-row">
                <span>Subtotal</span>
                <strong>{order.subtotal.toLocaleString("ro-RO")} lei</strong>
              </div>
              <div className="ts-summary-row">
                <span>Livrare</span>
                <strong>
                  {order.shipping === 0 ? "Gratuită" : `${order.shipping} lei`}
                </strong>
              </div>
              <div className="ts-summary-divider" />
              <div className="ts-summary-row total">
                <span>Total plătit</span>
                <strong data-testid="order-total">
                  {order.total.toLocaleString("ro-RO")} lei
                </strong>
              </div>
            </div>
          </section>

          <aside className="ts-order-side">
            <div className="ts-order-section">
              <h3>
                <MapPin size={18} /> Livrare la
              </h3>
              <p className="ts-order-address" data-testid="order-address">
                <strong>
                  {order.customer.firstName} {order.customer.lastName}
                </strong>
                <span>{order.customer.address}</span>
                <span>
                  {order.customer.city}, {order.customer.county} {order.customer.zip}
                </span>
                <span>{order.customer.phone}</span>
              </p>
            </div>

            <div className="ts-order-section">
              <h3>
                <Mail size={18} /> Confirmare email
              </h3>
              <p className="ts-order-email">
                Am trimis confirmarea pe adresa<br />
                <strong>{order.customer.email}</strong>
              </p>
            </div>

            <div className="ts-success-actions">
              <Link
                to="/"
                className="ts-btn ts-btn-ghost ts-btn-full"
                data-testid="back-home-button"
              >
                <HomeIcon size={16} /> Acasă
              </Link>
              <Link
                to="/produse"
                className="ts-btn ts-btn-primary ts-btn-full"
                data-testid="continue-shopping-button"
              >
                <ShoppingBag size={16} /> Continuă cumpărăturile
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
