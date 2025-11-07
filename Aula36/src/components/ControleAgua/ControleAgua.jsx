import {useState, useEffect} from "react"

export default function ControleAgua({nome = "Daniel"}){
	
    const [copos, Setcopos] = useState(0);

    function BeberAgua (){
        Setcopos(copos + 1);
    }
return (
	<>
	<div>
        <h2>controle de agua bebida</h2>
        <button onClick={BeberAgua}>Beber Agua?</button>
        <p>senhor {nome}</p>
        <p>copos bebidos: {copos} </p> 
    </div>
	</>
)	
}