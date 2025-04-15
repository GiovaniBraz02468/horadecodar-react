import styles from './Home.module.css'
import saving from '../img/savings.svg'
import Btn from '../Layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Btn text="Criar projeto" to="/newproject"></Btn>
            <img src={saving}></img>
        </section>
    )
}

export default Home