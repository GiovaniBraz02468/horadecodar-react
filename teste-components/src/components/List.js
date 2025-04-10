import ItemList from "./ItemList";

function List() {
    return (
        <>
            <h3>Minha lista</h3>
            <ul>
                <ItemList marca="Honda" lancamento={1950} /> 
                <ItemList marca="Ford" lancamento="sefsef" /> 
                <ItemList />
            </ul>
        </>
    );
}

export default List;
