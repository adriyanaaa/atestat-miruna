import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";

export const Products = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("toate");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchText = p.name.toLowerCase().includes(query.toLowerCase());
      const matchCat = category === "toate" || p.category === category;
      return matchText && matchCat;
    });
  }, [query, category]);

  return (
    <main className="ts-products-page" data-testid="products-page">
      <div className="ts-container">
        <div className="ts-products-header">
          <div>
            <span className="ts-eyebrow">Magazin</span>
            <h1>Toate produsele</h1>
            <p>Descoperă {products.length}+ produse premium la prețuri imbatabile.</p>
          </div>
          <div className="ts-filters">
            <div className="ts-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Caută produs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-testid="search-input"
              />
            </div>
            <div className="ts-cat-chips" data-testid="category-filters">
              <button
                className={`ts-chip ${category === "toate" ? "active" : ""}`}
                onClick={() => setCategory("toate")}
                data-testid="chip-toate"
              >
                Toate
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`ts-chip ${category === c.id ? "active" : ""}`}
                  onClick={() => setCategory(c.id)}
                  data-testid={`chip-${c.id}`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="ts-empty-state" data-testid="no-products">
            <p>Nu am găsit produse care să corespundă căutării tale.</p>
          </div>
        ) : (
          <div className="ts-products-grid" data-testid="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onView={setSelected} />
            ))}
          </div>
        )}
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
};
