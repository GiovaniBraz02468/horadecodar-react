
import { useEffect, useState } from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ btnText, handleSubmit, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(
        () => {
            fetch("http://localhost:5000/categories", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((dados) => {
                    setCategories(dados)
                })
                .catch((err) => console.log(err))
        }, []
    )


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }


    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } })
    }

    return (
        <form onSubmit={submit} className={styles.forms}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                value={project.name ? project.name: ''}
                handleOnChange={handleChange}
            ></Input>
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                value={project.budget ? project.budget: ''}
                handleOnChange={handleChange}
            ></Input>
            <Select
                name="Category_id"
                text="Selecione uma categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}></Select>
            <SubmitButton text={btnText} ></SubmitButton>
        </form>
    )
}

export default ProjectForm