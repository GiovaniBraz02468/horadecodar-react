import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../projects/ProjectForm'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((dados) => {
            console.log(dados)
            navigate('/projects', { state: { message: 'Projeto criado com sucesso' } })
        })
        .catch((err => console.log(err)))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto, para depois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"></ProjectForm>
        </div>
    )
}

export default NewProject