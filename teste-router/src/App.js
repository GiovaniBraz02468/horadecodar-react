import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js';
import Redacao from './pages/Redacao.js'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/redacao" element={<Redacao />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
