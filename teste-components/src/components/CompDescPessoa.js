import CompPessoa from "./CompPessoa"

function CompDescPessoa(props){
    return(
        <div>
            <h3>Teste de receber um componente!</h3>
            <p>A pessoa tem o nome de {props.comp.nome} e a data de nascimento é {props.comp.data}</p>
            <h3>Estrutura da CompPessoa:</h3>
            {props.comp}
        </div>
    )
}

export default CompDescPessoa