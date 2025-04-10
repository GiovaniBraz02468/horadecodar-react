import styles from './ModFrase.module.css'

function ModFrase(props){
    return(
        <div className={styles.fraseContainer}>
            <h3>Iniciando módulo de frase....</h3>
            <p className={styles.frasecontent}>Frase 1:{props.f1}</p>
            <p className={styles.frasecontent}>Frase 2:{props.f2}</p>
        </div>
    )
}

export default ModFrase