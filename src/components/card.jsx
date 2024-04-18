import React from "react";
import "./css/card.css";

const Card = ({ cryptoName }) => {
  const equivalencias = {
    Bitcoin: "BTC",
    Ethereum: "ETH",
  };
  return (
    <section className="card">
      <h2>{cryptoName}</h2>
    </section>
  );
};

export default Card;
