import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Home from './pages/Home'
import Container from './Layout/Container'
import NavBar from './Layout/NavBar'
import Footer from './Layout/Footer'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/company' element={<Company></Company>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/newproject' element={<NewProject></NewProject>}></Route>
        </Routes>
      </Container>
      <Footer>
      </Footer>
    </Router>
  );
}

export default App;
