import React, { useState } from "react";
import "../styles/ProductCard.css";

export const ProductCard = props => {
  const { product } = props;

  const [count, setCount] = useState(0);

  return (
    <div class="card product-card">
      <div class="card-content">
        <div class="media align-items-center">
          <div class="media-left">
            <img
              src={product.img}
              alt="product image"
              className="product-img"
            />
          </div>
          <div class="media-content">
            <p class="title is-5">{product.name}</p>
            <p class="subtitle is-5">£{product.price}</p>
          </div>
          <div className="media-right">
            <button
              class="button is-primary"
              onClick={() => {
                count > 0 && setCount(count - 1);
              }}
            >
              -
            </button>
            <span className="title"> {count} </span>
            <button
              class="button is-primary"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
