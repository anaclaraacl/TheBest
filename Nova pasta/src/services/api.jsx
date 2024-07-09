export const fetchMusicas = async () => {
    const response = await fetch('/musicas.json');
    const dados = await response.json();
    return dados;
  };
  
  