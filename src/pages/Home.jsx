import { Link } from "react-router-dom";
import {
  Flame,
  ShoppingBag,
  Headphones as HeadphonesIcon,
  Users,
  Package,
  Star,
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Plug,
  Send,
  ArrowRight,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const Home = () => {
  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="ts-hero">
        <div className="ts-hero-bg ts-hero-bg-one" />
        <div className="ts-hero-bg ts-hero-bg-two" />
        <div className="ts-hero-bg ts-hero-bg-three" />

        <div className="ts-container ts-hero-content">
          <div className="ts-hero-left">
            <span className="ts-hero-badge" data-testid="hero-badge">
              <Flame size={14} /> Cele mai noi gadgeturi 2025
            </span>
            <h1 className="ts-hero-title">
              Tehnologie <span className="ts-accent">premium</span><br />
              pentru viitorul tău
            </h1>
            <p className="ts-hero-sub">
              Descoperă telefoane, laptopuri, accesorii și smartwatch-uri premium
              la cele mai bune prețuri. Livrare rapidă în toată România.
            </p>
            <div className="ts-hero-buttons">
              <Link
                to="/produse"
                className="ts-btn ts-btn-primary ts-btn-lg"
                data-testid="hero-cta-products"
              >
                <ShoppingBag size={18} /> Vezi produsele
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="ts-btn ts-btn-ghost ts-btn-lg"
                data-testid="hero-cta-contact"
              >
                <HeadphonesIcon size={18} /> Contactează-ne
              </Link>
            </div>

            <div className="ts-hero-trust">
              <div className="ts-trust-item">
                <Truck size={18} />
                <span>Livrare 24h</span>
              </div>
              <div className="ts-trust-item">
                <ShieldCheck size={18} />
                <span>Garanție 2 ani</span>
              </div>
              <div className="ts-trust-item">
                <Sparkles size={18} />
                <span>Produse originale</span>
              </div>
            </div>
          </div>

          <div className="ts-hero-right">
            <div className="ts-hero-main-card">
              <div className="ts-hero-main-image">
                <img
                  src="https://images.unsplash.com/photo-1592286927505-1def25115558?w=900&q=80"
                  alt="iPhone 15 Pro"
                />
              </div>
              <div className="ts-hero-main-body">
                <span className="ts-hero-main-tag">NOUTATE</span>
                <h2>iPhone 15 Pro</h2>
                <p>Putere și performanță premium</p>
                <div className="ts-hero-main-price">
                  <span>4.499 lei</span>
                  <small>5.499 lei</small>
                </div>
              </div>
            </div>

            <div className="ts-float-card ts-float-one">
              <Laptop size={20} />
              <div>
                <strong>Gaming Laptop</strong>
                <span>de la 3.299 lei</span>
              </div>
            </div>
            <div className="ts-float-card ts-float-two">
              <Headphones size={20} />
              <div>
                <strong>Audio Premium</strong>
                <span>Reducere 30%</span>
              </div>
            </div>
            <div className="ts-float-card ts-float-three">
              <Watch size={20} />
              <div>
                <strong>Smart Watch</strong>
                <span>Stoc nou</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ts-stats">
        <div className="ts-container ts-stats-grid">
          <div className="ts-stat-card">
            <div className="ts-stat-icon">
              <Users size={28} />
            </div>
            <h2>10K+</h2>
            <p>Clienți mulțumiți</p>
          </div>
          <div className="ts-stat-card">
            <div className="ts-stat-icon">
              <Package size={28} />
            </div>
            <h2>500+</h2>
            <p>Produse disponibile</p>
          </div>
          <div className="ts-stat-card">
            <div className="ts-stat-icon">
              <Star size={28} />
            </div>
            <h2>4.9</h2>
            <p>Rating magazin</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="ts-section">
        <div className="ts-container">
          <div className="ts-section-title">
            <span className="ts-eyebrow">Magazin</span>
            <h2>Categorii populare</h2>
            <p>Explorează cele mai căutate produse din magazin.</p>
          </div>
          <div className="ts-cats-grid">
            <Link to="/produse" className="ts-cat-card" data-testid="cat-phones">
              <div className="ts-cat-icon"><Smartphone size={42} /></div>
              <h3>Telefoane</h3>
              <span>120+ modele</span>
            </Link>
            <Link to="/produse" className="ts-cat-card" data-testid="cat-laptops">
              <div className="ts-cat-icon"><Laptop size={42} /></div>
              <h3>Laptopuri</h3>
              <span>80+ modele</span>
            </Link>
            <Link to="/produse" className="ts-cat-card" data-testid="cat-audio">
              <div className="ts-cat-icon"><Headphones size={42} /></div>
              <h3>Audio</h3>
              <span>200+ produse</span>
            </Link>
            <Link to="/produse" className="ts-cat-card" data-testid="cat-watch">
              <div className="ts-cat-icon"><Watch size={42} /></div>
              <h3>Smartwatch</h3>
              <span>50+ modele</span>
            </Link>
            <Link to="/produse" className="ts-cat-card" data-testid="cat-acc">
              <div className="ts-cat-icon"><Plug size={42} /></div>
              <h3>Accesorii</h3>
              <span>300+ produse</span>
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="ts-section">
        <div className="ts-container">
          <div className="ts-section-title">
            <span className="ts-eyebrow">Testimoniale</span>
            <h2>Recenzii clienți</h2>
            <p>Ce spun clienții despre TechStore.</p>
          </div>
          <div className="ts-reviews-grid">
            {[
              {
                name: "Andrei Popescu",
                init: "A",
                text: "Produse excelente și livrare foarte rapidă. Telefonul a ajuns în 24h, exact cum era descris. Recomand cu încredere!",
                role: "Cumpărător verificat",
              },
              {
                name: "Maria Ionescu",
                init: "M",
                text: "Design modern, produse premium, prețuri corecte. Am cumpărat laptopul pentru muncă și sunt extrem de mulțumită.",
                role: "Cumpărător verificat",
              },
              {
                name: "Vlad Dumitru",
                init: "V",
                text: "Cel mai bun magazin online pentru gadgeturi din România. Suport excelent, garanție rapidă pe produse.",
                role: "Cumpărător verificat",
              },
            ].map((r) => (
              <div className="ts-review-card" key={r.name} data-testid={`review-${r.init}`}>
                <div className="ts-review-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#FFD24A" stroke="#FFD24A" />
                  ))}
                </div>
                <p>"{r.text}"</p>
                <div className="ts-review-author">
                  <div className="ts-review-avatar">{r.init}</div>
                  <div>
                    <h4>{r.name}</h4>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="ts-section">
        <div className="ts-container">
          <div className="ts-newsletter">
            <div className="ts-newsletter-icon">
              <Send size={28} />
            </div>
            <h2>Primește cele mai noi oferte</h2>
            <p>Abonează-te pentru reduceri, promoții și produse noi direct în inbox.</p>
            <form
              className="ts-newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
              }}
            >
              <input
                type="email"
                required
                placeholder="Adresa ta de email"
                data-testid="newsletter-email"
              />
              <button type="submit" data-testid="newsletter-submit">
                <Send size={16} /> Abonează-te
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
