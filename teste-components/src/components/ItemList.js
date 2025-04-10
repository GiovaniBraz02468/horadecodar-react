import PropTypes from 'prop-types';

function ItemList({ marca = 'Faltou a marca', lancamento = 0 }) {
    return (
        <li>
            {marca} - {lancamento}
        </li>
    );
}

ItemList.propTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number,
};

export default ItemList;
