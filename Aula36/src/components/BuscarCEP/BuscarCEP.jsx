export default function BuscarCEP({cep, logradouro, bairro, uf, localidade}){
    return(
        <>
        <div>
            <p>{cep}</p>
            <p>{logradouro}</p>
            <p>{bairro}</p>
            <p>{uf}</p>
            <p>{localidade}</p>
        </div>
        </>
    )
}