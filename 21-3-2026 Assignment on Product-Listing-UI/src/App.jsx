import { useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {

  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div style={{ textAlign: "center" }}>

      <h1>Product Listing UI 🛒</h1>

      {/* Filter Buttons */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Clothing")}>Clothing</button>

      {/* Products */}
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default App;