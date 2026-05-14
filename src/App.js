import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import { OrderSuccess } from "./pages/OrderSuccess";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="ts-app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produse" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/comanda-succes" element={<OrderSuccess />} />
          </Routes>
          <Footer />
          <CartDrawer />
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "rgba(11, 50, 75, 0.95)",
                color: "white",
                border: "1px solid rgba(40, 224, 210, 0.3)",
                backdropFilter: "blur(12px)",
              },
            }}
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
