import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    );
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };
  return (
    <div className="list">
      {items.map(item => (
        <h2 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`} className="list-style">
            {item.name}
          </Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;
