import Button from "./Button";

function Evento(){

    function meuEvento(){
        console.log("Ativando o primeiro evento")
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento