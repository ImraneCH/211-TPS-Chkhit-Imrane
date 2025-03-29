import React from "react";
import "./Card.css";

function Card({ image, titre, description }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={titre} />
      <div className="card-description">
        <h2 className="card-titre">{titre}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;