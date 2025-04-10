function CompSoma(props){
    return(
        <div>
            <h3>A soma da conta {props.a} + {props.b} = {SomaNumbers(Number(props.a), Number(props.b))}</h3>
        </div>
    )
}

function SomaNumbers(a, b){
    return a+b
}

export default CompSoma