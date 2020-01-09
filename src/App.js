import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from './components/ProductCard';

function App() {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // fetch all items
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products');
      setProducts(res.data);
    }
    fetchItems();
  }, [])

  return (
    <div className="App container">
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default App;
