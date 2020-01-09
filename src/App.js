import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // fetch all items
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/benirvingplt/products/products"
      );
      setProducts(res.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="App container">
      {products.map(product => (
        <ProductCard
          product={product}
          handleTotal={price => setTotal(Number(Math.abs(total + price).toFixed(2)))}
        />
      ))}
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <p className="title is-3">Total</p>
            </div>
            <div className="media-content" />
            <div className="media-right">
              <p className="title is-3">£{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
