import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento.js';
import Form from './components/Form.js';
import Condicional from './components/Condicional.js';
import ListaComponent from './components/ListaComponent.js';
import { useState } from 'react';
import SeuNome from './components/SeuNome.js';
import Saudacao from './components/Saudacao.js';

function App() {

  const meusItens = ['React','Vue','Angular']
  const listaVazia = []

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h2>Testando eventos</h2>
      <Evento></Evento>
      <h2>Testando useState</h2>
      <Form></Form>
      <h2>Testando Renderização condicional</h2>
      <Condicional></Condicional>
      <h2>Renderização de listas</h2>
      <ListaComponent itens={meusItens}></ListaComponent>
      <ListaComponent itens={listaVazia}></ListaComponent>
      <h2>Testando State Lift</h2>
      <SeuNome setNome={setNome}></SeuNome>
      <Saudacao nome={nome}></Saudacao>
    </div>
  );
}

export default App;
