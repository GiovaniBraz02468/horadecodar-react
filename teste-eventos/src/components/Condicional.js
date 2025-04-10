import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }

    return(
        <div>
            <h4>Cadastre o seu e-mail:</h4>
            <form>
                <input type="email" placeholder="Difite seu email..." onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional