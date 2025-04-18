import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    return (
        <form className={styles.forms}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            ></Input>
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            ></Input>
            <Select
            name="Category_id" text="Selecione uma categoria"></Select>
            <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ProjectForm