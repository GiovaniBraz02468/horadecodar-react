function Saudacao({ nome }) {
    if (nome && nome.trim() !== "") {
        return <p>Saudações, {nome}</p>;
    } else {
        return <p>Sem mensagem até o momento</p>;
    }
}

export default Saudacao;