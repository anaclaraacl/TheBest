import React from 'react';
import Card from './Card';
import './Lista.css';

const Lista = ({ musicas }) => {
  return (
    <div className="lista">
      {musicas.map(musica => (
        <Card key={musica.id} musica={musica} />
      ))}
    </div>
  );
};

export default Lista;

