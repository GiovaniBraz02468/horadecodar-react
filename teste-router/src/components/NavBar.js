import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavBar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/empresa">Empresa</Link></li>
            <li><Link to="/redacao">redação</Link></li>
        </ul>
    )
}

export default NavBar