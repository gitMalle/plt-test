import React, { useState } from "react";
import "../styles/ProductCard.css";

export const ProductCard = props => {
  const { product, handleTotal } = props;

  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
    handleTotal(product.price);
  };

  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
      handleTotal(-product.price);
    }
  };

  const removeAll = () => {
    handleTotal(-product.price * count);
    setCount(0);
  };

  return (
    <div className="card product-card">
      <div className="card-content">
        <div className="media align-items-center">
          <div className="media-left">
            <img
              src={product.img}
              alt="product image"
              className="product-img"
            />
          </div>
          <div className="media-content">
            <p className="title is-5">{product.name}</p>
            <p className="subtitle is-5">£{product.price}</p>
          </div>
          <div className="media-right text-center">
            <button className="button is-primary" onClick={removeItem}>
              -
            </button>
            <span className="title"> {count} </span>
            <button className="button is-primary" onClick={addItem}>
              +
            </button>
            {count > 0 && (
              <div>
                <a className="has-text-primary" onClick={removeAll}>
                  remove
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
