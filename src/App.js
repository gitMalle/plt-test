import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [items, setItems] = useState([]);

  // fetch all items
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products');
      setItems(res.data);
    }
    fetchItems();
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
