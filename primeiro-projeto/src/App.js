import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SeparaAulas from './components/SeparaAula';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const name = 'Giovani Braz'
  const uppername = name.toUpperCase()

  function sum (a,b){
    return a+b
  }

  const url = "https://placehold.co/150"

  return (
    <div className="App">
      <h1>Primeiros passos, conhecendo componentes e seu uso</h1>
      <h1>Olá react!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {uppername}</p>
      <p>Soma: {sum(1,1)}</p>
      <img src={url} alt='Imagem dinamica carregada!'/>
      <HelloWorld></HelloWorld>
      <SeparaAulas></SeparaAulas>
      <h1>Conhecendo as props</h1>
      <SayMyName name="Giovani"></SayMyName>
      <SayMyName name="Gabriel"></SayMyName>
      <SayMyName name="Tuestue"></SayMyName>
      <SayMyName name="JapinJapas"></SayMyName>
      <SayMyName name={uppername}></SayMyName>
      <Pessoa nome="Giovani Braz" profissao="Desenvolvedor" idade = "21 anos" foto = "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"></Pessoa><Pessoa nome="Giovani Braz" profissao="Desenvolvedor" idade = "21 anos" foto = "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"></Pessoa>
      <Pessoa nome="Giovani Braz" profissao="Desenvolvedor" idade = "25 anos" foto = "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"></Pessoa>
      <Pessoa nome="Giovani Braz" profissao="Desenvolvedor" idade = "28 anos" foto = "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"></Pessoa>
      <Pessoa nome="Giovani Braz" profissao="Desenvolvedor" idade = "34 anos" foto = "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"></Pessoa>
    </div>
  );
}

export default App;
