import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./components/ProductCard";
import { ColourDropdown } from "./components/ColourDropdown";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [total, setTotal] = useState(0);

  // fetch all items
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/benirvingplt/products/products"
      );
      setAllProducts(res.data);
      setProducts(res.data);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    filter.length > 0
      ? setProducts(allProducts.filter(p => p.colour === filter))
      : setProducts(allProducts);
    setTotal(0);
  }, [filter]);

  return (
    <div className="container" style={{ padding: "64px 0" }}>
      <ColourDropdown
        products={allProducts}
        setFilter={filter => setFilter(filter)}
      />
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          handleTotal={price =>
            setTotal(Number(Math.abs(total + price).toFixed(2)))
          }
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
