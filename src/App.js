import { useEffect, useState } from "react";
import { API_BASE_URL } from "./config";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={`https://via.placeholder.com/150?text=${p.name}`} alt={p.name} />
            <h2>{p.name}</h2>
            <p className="price">${p.price}</p>
            <button className="btn" onClick={() => setSelectedProduct(p)}>More Info</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
            <p><em>Additional information can go here.</em></p>
            <button onClick={() => setSelectedProduct(null)} className="btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;