import React, { useEffect, useState } from 'react';
import Filtro from './components/Filtro';
import Lista from './components/Lista';
import { fetchMusicas } from './services/api';
import './App.css';

const App = () => {
  const [musicas, setMusicas] = useState([]);
  const [musicasFiltradas, setMusicasFiltradas] = useState([]);
  const [estiloSelecionado, setEstiloSelecionado] = useState('Adoração');

  useEffect(() => {
    const carregarMusicas = async () => {
      const dados = await fetchMusicas();
      setMusicas(dados);
      setMusicasFiltradas(dados.filter(musica => musica.estilo === 'Adoração'));
    };
    carregarMusicas();
  }, []);

  const filtrarMusicas = (estilo) => {
    setEstiloSelecionado(estilo);
    setMusicasFiltradas(musicas.filter(musica => musica.estilo === estilo));
  };

  return (
    <div className="app">
      <img src="TB.png"/>
      <h3>as melhores músicas do ano</h3>
      <Filtro onFiltroSelecionado={filtrarMusicas} />
      <Lista musicas={musicasFiltradas} />
    </div>
  );
};

export default App;

