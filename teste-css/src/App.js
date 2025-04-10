import logo from './logo.svg';
import './App.css';
import ModFrase from './components/ModFrase'

function App() {
  return (
    <div>
      <div className="titulo">
        <h2>Testando o CSS personalizado (Index e por componente)</h2>
      </div>
      <div>
        <ModFrase f1="Aqui é a frase 1" f2='Aqui é a frase 2'></ModFrase>
      </div>
    </div>
  );
}

export default App;
