function CompPessoa(props){

    return(
        <div>
            <hr></hr>
            <h3>Componente pessoa</h3>
            <p>Recebe várias informações de uma pessoa, sendo personalizavel.</p>
            <h4>Dados da pessoa</h4>
            <p>Nome: {props.nome}</p>
            <p>Data de nascimento: {props.data}</p>
            <p>CEP: {props.cep}</p>
            <p>Cidade: {props.cidade}</p>
            <hr></hr>
        </div>
    )

}

export default CompPessoa