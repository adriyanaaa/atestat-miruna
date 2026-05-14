import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Lock,
  CreditCard,
  Truck,
  ShieldCheck,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  county: "",
  zip: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
  notes: "",
};

const formatCardNumber = (v) =>
  v
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();

const formatExpiry = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 4);
  if (d.length < 3) return d;
  return d.slice(0, 2) + "/" + d.slice(2);
};

export const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (items.length === 0 && !orderPlaced) {
    return <Navigate to="/produse" replace />;
  }

  const shipping = totalPrice > 500 ? 0 : 25;
  const total = totalPrice + shipping;

  const handleChange = (field) => (e) => {
    let val = e.target.value;
    if (field === "cardNumber") val = formatCardNumber(val);
    if (field === "expiry") val = formatExpiry(val);
    if (field === "cvv") val = val.replace(/\D/g, "").slice(0, 4);
    if (field === "phone") val = val.replace(/[^\d+\s]/g, "").slice(0, 15);
    setForm({ ...form, [field]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const orderNumber = "TS" + Date.now().toString().slice(-8);
    const orderData = {
      orderNumber,
      items: items.map((i) => ({
        id: i.id,
        name: i.name,
        image: i.image,
        price: i.price,
        quantity: i.quantity,
      })),
      subtotal: totalPrice,
      shipping,
      total,
      customer: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        county: form.county,
        zip: form.zip,
      },
      payment: {
        last4: form.cardNumber.replace(/\s/g, "").slice(-4),
      },
      date: new Date().toISOString(),
    };

    sessionStorage.setItem("techstore_last_order", JSON.stringify(orderData));

    setTimeout(() => {
      setOrderPlaced(true);
      navigate("/comanda-succes", { replace: true });
      setTimeout(() => clearCart(), 50);
    }, 1500);
  };

  return (
    <main className="ts-checkout-page" data-testid="checkout-page">
      <div className="ts-container">
        <button
          className="ts-back-link"
          onClick={() => navigate(-1)}
          data-testid="checkout-back"
        >
          <ChevronLeft size={18} /> Înapoi
        </button>
        <span className="ts-eyebrow">Finalizare comandă</span>
        <h1 className="ts-checkout-title">Plătește comanda</h1>

        <form className="ts-checkout-grid" onSubmit={handleSubmit} data-testid="checkout-form">
          <div className="ts-checkout-left">
            <section className="ts-card-section">
              <div className="ts-step-head">
                <span className="ts-step-num">1</span>
                <h3>Detalii contact</h3>
              </div>
              <div className="ts-grid-2">
                <div className="ts-input-group">
                  <label>Nume</label>
                  <input
                    required
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    placeholder="Ion"
                    data-testid="input-firstname"
                  />
                </div>
                <div className="ts-input-group">
                  <label>Prenume</label>
                  <input
                    required
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    placeholder="Popescu"
                    data-testid="input-lastname"
                  />
                </div>
                <div className="ts-input-group">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="ion@email.com"
                    data-testid="input-email"
                  />
                </div>
                <div className="ts-input-group">
                  <label>Telefon</label>
                  <input
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="0745 000 000"
                    data-testid="input-phone"
                  />
                </div>
              </div>
            </section>

            <section className="ts-card-section">
              <div className="ts-step-head">
                <span className="ts-step-num">2</span>
                <h3>Adresă de livrare</h3>
              </div>
              <div className="ts-input-group">
                <label>Stradă, număr, bloc, apartament</label>
                <input
                  required
                  value={form.address}
                  onChange={handleChange("address")}
                  placeholder="Str. Ștefan cel Mare nr. 12, bl. A, ap. 5"
                  data-testid="input-address"
                />
              </div>
              <div className="ts-grid-3">
                <div className="ts-input-group">
                  <label>Oraș</label>
                  <input
                    required
                    value={form.city}
                    onChange={handleChange("city")}
                    placeholder="Suceava"
                    data-testid="input-city"
                  />
                </div>
                <div className="ts-input-group">
                  <label>Județ</label>
                  <input
                    required
                    value={form.county}
                    onChange={handleChange("county")}
                    placeholder="Suceava"
                    data-testid="input-county"
                  />
                </div>
                <div className="ts-input-group">
                  <label>Cod poștal</label>
                  <input
                    required
                    value={form.zip}
                    onChange={handleChange("zip")}
                    placeholder="720000"
                    data-testid="input-zip"
                  />
                </div>
              </div>
              <div className="ts-input-group">
                <label>Notă (opțional)</label>
                <textarea
                  rows="3"
                  value={form.notes}
                  onChange={handleChange("notes")}
                  placeholder="Instrucțiuni speciale pentru livrare..."
                  data-testid="input-notes"
                />
              </div>
            </section>

            <section className="ts-card-section">
              <div className="ts-step-head">
                <span className="ts-step-num">3</span>
                <h3>Date plată card</h3>
                <span className="ts-lock-tag">
                  <Lock size={12} /> Securizat
                </span>
              </div>
              <div className="ts-input-group">
                <label>Nume pe card</label>
                <input
                  required
                  value={form.cardName}
                  onChange={handleChange("cardName")}
                  placeholder="ION POPESCU"
                  data-testid="input-cardname"
                />
              </div>
              <div className="ts-input-group">
                <label>Număr card</label>
                <div className="ts-input-icon-wrap">
                  <input
                    required
                    value={form.cardNumber}
                    onChange={handleChange("cardNumber")}
                    placeholder="1234 5678 9012 3456"
                    inputMode="numeric"
                    data-testid="input-cardnumber"
                  />
                  <CreditCard size={18} />
                </div>
              </div>
              <div className="ts-grid-2">
                <div className="ts-input-group">
                  <label>Expirare</label>
                  <input
                    required
                    value={form.expiry}
                    onChange={handleChange("expiry")}
                    placeholder="MM/YY"
                    inputMode="numeric"
                    data-testid="input-expiry"
                  />
                </div>
                <div className="ts-input-group">
                  <label>CVV</label>
                  <input
                    required
                    value={form.cvv}
                    onChange={handleChange("cvv")}
                    placeholder="123"
                    inputMode="numeric"
                    data-testid="input-cvv"
                  />
                </div>
              </div>
              <p className="ts-fake-note">
                <Lock size={12} /> Această este o simulare de plată. Nu se reține niciun card real.
              </p>
            </section>
          </div>

          {/* RIGHT - SUMMARY */}
          <aside className="ts-checkout-summary">
            <h3>Sumar comandă</h3>
            <div className="ts-summary-items">
              {items.map((i) => (
                <div className="ts-summary-item" key={i.id}>
                  <img src={i.image} alt={i.name} />
                  <div className="ts-summary-item-info">
                    <h4>{i.name}</h4>
                    <span>{i.quantity} × {i.price.toLocaleString("ro-RO")} lei</span>
                  </div>
                  <strong>
                    {(i.price * i.quantity).toLocaleString("ro-RO")} lei
                  </strong>
                </div>
              ))}
            </div>

            <div className="ts-summary-row">
              <span>Subtotal</span>
              <strong data-testid="summary-subtotal">
                {totalPrice.toLocaleString("ro-RO")} lei
              </strong>
            </div>
            <div className="ts-summary-row">
              <span>
                <Truck size={14} /> Livrare
              </span>
              <strong>
                {shipping === 0 ? "Gratuită" : `${shipping} lei`}
              </strong>
            </div>
            <div className="ts-summary-divider" />
            <div className="ts-summary-row total">
              <span>Total</span>
              <strong data-testid="summary-total">
                {total.toLocaleString("ro-RO")} lei
              </strong>
            </div>

            <button
              type="submit"
              className="ts-btn ts-btn-primary ts-btn-lg ts-btn-full"
              disabled={loading}
              data-testid="place-order-button"
            >
              {loading ? (
                <>
                  <span className="ts-spinner" /> Se procesează...
                </>
              ) : (
                <>
                  <Lock size={16} /> Plasează comanda
                </>
              )}
            </button>

            <div className="ts-trust-row">
              <div><ShieldCheck size={14} /> Plată sigură SSL</div>
              <div><Truck size={14} /> Livrare 24-48h</div>
              <div><CheckCircle2 size={14} /> Garanție 2 ani</div>
            </div>

            <Link to="/produse" className="ts-summary-link">
              Continuă cumpărăturile
            </Link>
          </aside>
        </form>
      </div>
    </main>
  );
};
