import React, { useState, useEffect } from "react";

export const ColourDropdown = props => {
  const { products, setFilter } = props;

  const [isOpen, setOpen] = useState(false);
  const [colours, setColours] = useState([]);

  // filter all unique colours of all products
  useEffect(() => {
    setColours([...new Set(products.map(p => p.colour))]);
  }, [products]);

  return (
    <div
      className={`dropdown ${isOpen && "is-active"}`}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setOpen(!isOpen)}
        >
          <span>Filter by colour</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {colours.map(colour => (
            <a
              key={colour}
              className="dropdown-item"
              onClick={() => setFilter(colour)}
            >
              {colour}
            </a>
          ))}
          <a className="dropdown-item" onClick={() => setFilter("")}>
            Show all
          </a>
        </div>
      </div>
    </div>
  );
};
