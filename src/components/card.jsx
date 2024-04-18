import React from 'react';
import './css/card.css';

const Card = ({ cryptoName }) => {
  return (
    <section className="card">
      <h2>{cryptoName}</h2>
      {/* Agrega aquí el contenido adicional de la tarjeta */}
    </section>
  );
};

export default Card;