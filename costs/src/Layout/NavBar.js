import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './NavBar.module.css'
import logo from '../img/costs_logo.png'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link><img src={logo} alt="Costs"></img></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link to="/company">Compainha</Link></li>
                    <li className={styles.item}><Link to="/contact">Empresa</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar