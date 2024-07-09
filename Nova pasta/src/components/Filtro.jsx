import React, { useState } from 'react';
import './Filtro.css';

const Filtro = ({ onFiltroSelecionado }) => {
  const [estiloSelecionado, setEstiloSelecionado] = useState('Adoração'); // Estilo inicial

  const handleClick = (estilo) => {
    setEstiloSelecionado(estilo);
    onFiltroSelecionado(estilo);
  };

  return (
    <div className="filtro">
      <button
        className={estiloSelecionado === 'Adoração' ? 'ativo' : ''}
        onClick={() => handleClick('Adoração')}
      >
        Adoração
      </button>
      <button
        className={estiloSelecionado === 'MPB' ? 'ativo' : ''}
        onClick={() => handleClick('MPB')}
      >
        MPB
      </button>
      <button
        className={estiloSelecionado === 'Pop' ? 'ativo' : ''}
        onClick={() => handleClick('Pop')}
      >
        Pop
      </button>
    </div>
  );
};

export default Filtro;



