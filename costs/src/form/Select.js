import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return (
        <div className={styles.form_controler}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || {}}>
                <option>Selecione uma opção</option>
                {
                    options.map(
                        (option) => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        )
                    )
                }
            </select>
        </div>
    )
}

export default Select