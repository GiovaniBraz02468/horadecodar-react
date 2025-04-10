import logo from './logo.svg';
import './App.css';
import ComPessoa from './components/CompPessoa'
import CompPessoa from './components/CompPessoa';
import CompDescPessoa from './components/CompDescPessoa';
import CompSoma from './components/CompSoma';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Teste de componentes básicos
        </p>
        <CompPessoa nome='Giovani Braz' data='05/07/2003' cep='14962.086' cidade='Novo horizonte'></CompPessoa>
        <CompDescPessoa comp={<CompPessoa nome='Giovani Braz' data='05/07/2003' cep='14962.086' cidade='Novo horizonte'></CompPessoa>}></CompDescPessoa>
        <CompSoma a='1' b='2'></CompSoma>
        <CompSoma a='536.22' b='566'></CompSoma>
        <CompSoma a='1250.002' b='268.63'></CompSoma>
        <CompSoma a='1.000' b='2.123'></CompSoma>
        <List></List>
      </header>
    </div>
  );
}

export default App;
