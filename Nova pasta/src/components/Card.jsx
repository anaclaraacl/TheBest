import React from 'react';
import './Card.css';

const Card = ({ musica }) => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>{musica.nome}</h2>
        <p>Autor: {musica.autor}</p>
        <p>Estilo: {musica.estilo}</p>
        <a href={musica.link} target="_blank" rel="noopener noreferrer">Clique e ouça :)</a>
      </div>
    </div>
  );
};

export default Card;

