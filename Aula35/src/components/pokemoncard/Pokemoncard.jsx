import style from "./Pokemoncard.module.css"
export default function pokemoncard({nome, tipo, imagem}){
    return(
    <>
    <div>
        <h2>{nome}</h2>
        <img src={imagem} alt={nome} />
        <p><strong>tipo: </strong>{tipo}</p>
    </div>
    </>

    )
}