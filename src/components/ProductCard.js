import React, { useState, useEffect } from "react";
import "../styles/ProductCard.css";

export const ProductCard = props => {
  const { product, handleTotal, filter } = props;

  const [count, setCount] = useState(0);

  // reset count every time products are filtered
  useEffect(() => {
    setCount(0);
  }, [filter]);

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
    <div className="card product-card" data-testid="product">
      <div className="card-content">
        <div className="media product-card-content">
          <div className="media-left">
            <img src={product.img} alt="product" className="product-img" />
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
