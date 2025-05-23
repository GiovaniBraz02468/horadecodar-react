import Message from '../Layout/Message'
import { useLocation } from 'react-router-dom'

function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div>
            <h1>Meus projetos</h1>
            {message && <Message msg={message} type="success"></Message>}
        </div>
    )
}

export default Projects