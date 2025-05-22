import { useEffect, useState } from "react";
import { API_BASE_URL } from "./config";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="container">
      <header className="header">
      <h1>🛍️ Product Catalog</h1>

        <div className="cart-icon">
          <FaShoppingCart size={24} />
          <span className="cart-count">0</span>
        </div>
      </header>

      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.imgUrl} alt={p.name} />
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
            <img
              src={selectedProduct.imgUrl}
              alt={selectedProduct.name}
              style={{ width: "100%", borderRadius: "8px", margin: "1rem 0" }}
            />
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
            <p><em>Additional information can go here.</em></p>
            <button onClick={() => setSelectedProduct(null)} className="btn">Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
