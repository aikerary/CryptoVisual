import React from "react";
import CryptoChart from "./cryptochart";
import "./css/card.css";

const Card = ({ cryptoName }) => {
  const equivalencias = {
    Bitcoin: "BTC",
    Ethereum: "ETH",
  };

  const equivalencia = equivalencias[cryptoName];
  return (
    <section className="card">
      <h2>{cryptoName}</h2>
        <CryptoChart cryptoId={equivalencia} />
    </section>
  );
};

export default Card;
