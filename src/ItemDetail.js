import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/item/get?id=${
        match.params.id
      }`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
  return (
    <div className="badge">
      <h2>{item.name}</h2>
      <img src={item.images.transparent} alt="" />
      <h3>Type: {item.type}</h3>
      <p>Rarity: {item.rarity}</p>
      <Link to="/shop" className="list-style">
        Back
      </Link>
    </div>
  );
}

export default ItemDetail;
