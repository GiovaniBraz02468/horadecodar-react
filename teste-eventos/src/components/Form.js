import { useState } from 'react'


function Form() {

    function CadUser(e) {
        e.preventDefault()
        console.log(`Usuário: ${name} cadastrado com a senha de: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h4>Meus cadastro teste:</h4>
            <form onSubmit={CadUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite o nome"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input type="submit" onClick={CadUser} value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form