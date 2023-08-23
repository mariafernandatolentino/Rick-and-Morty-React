import { useState, useEffect } from 'react';
import './App.css';
import Modal from './Modal';

function App() {

  const [personagens, setPersonagens] = useState([]);
  const [personagemAtual, setPersonagemAtual] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados.results)
        setPersonagens(dados.results);
      })

  }, []);

  function aoClicar(personagem) {
    setPersonagemAtual(personagem);
  }

  return (
    <div className="App">
      {personagemAtual && <Modal personagem={personagemAtual} />}
      <ul id='lista'>
        {personagens.map((personagem => {
          return <li key={personagem.id}>
            <img src={personagem.image} onClick={
              () => aoClicar(personagem)
            } />
            <span>{personagem.name}</span>
          </li>
        }))}
      </ul>
    </div>
  );
}

export default App;
