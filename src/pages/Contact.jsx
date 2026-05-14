import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="ts-contact-page" data-testid="contact-page">
      <div className="ts-container">
        <div className="ts-contact-wrapper">
          {/* LEFT */}
          <div className="ts-contact-info">
            <span className="ts-eyebrow">Contact</span>
            <h1>Contactează-ne</h1>
            <p className="ts-contact-text">
              Ai întrebări despre produse, comenzi sau livrare? Echipa TechStore
              îți răspunde rapid și te ajută cu orice problemă.
            </p>

            <div className="ts-info-card">
              <div className="ts-info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h3>Adresă</h3>
                <p>Suceava, România</p>
              </div>
            </div>

            <div className="ts-info-card">
              <div className="ts-info-icon">
                <Phone size={22} />
              </div>
              <div>
                <h3>Telefon</h3>
                <p>+40 745 000 000</p>
              </div>
            </div>

            <div className="ts-info-card">
              <div className="ts-info-icon">
                <Mail size={22} />
              </div>
              <div>
                <h3>Email</h3>
                <p>contact@techstore.ro</p>
              </div>
            </div>

            <div className="ts-socials">
              <a href="#" className="ts-social" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="ts-social" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="ts-social" aria-label="Youtube"><Youtube size={18} /></a>
              <a href="#" className="ts-social" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ts-contact-form-wrap">
            <h2>Trimite un mesaj</h2>
            <p className="ts-form-helper">Răspundem în 24 de ore lucrătoare.</p>
            <form
              className="ts-form"
              onSubmit={handleSubmit}
              data-testid="contact-form"
            >
              <div className="ts-input-group">
                <label>Nume complet</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ion Popescu"
                  data-testid="contact-name"
                />
              </div>
              <div className="ts-input-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ion@email.com"
                  data-testid="contact-email"
                />
              </div>
              <div className="ts-input-group">
                <label>Subiect</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Întrebare despre comandă"
                  data-testid="contact-subject"
                />
              </div>
              <div className="ts-input-group">
                <label>Mesaj</label>
                <textarea
                  rows="6"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Scrie mesajul tău..."
                  data-testid="contact-message"
                />
              </div>
              <button
                type="submit"
                className="ts-btn ts-btn-primary ts-btn-lg ts-btn-full"
                data-testid="contact-submit"
              >
                <Send size={16} /> Trimite mesajul
              </button>
              {submitted && (
                <div className="ts-form-success" data-testid="contact-success">
                  <CheckCircle2 size={18} /> Mesaj trimis cu succes! Îți răspundem în curând.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
