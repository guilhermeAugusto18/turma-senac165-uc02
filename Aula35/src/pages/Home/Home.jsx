import Pokemoncard from "../../components/pokemoncard/Pokemoncard";
import { useState, useEffect } from "react";

export default function home(){
    const [nomeBusca, setNomeBusca] = useState("Pikachu");
    const [pokemon, setpokemon] = useState(null);
    const [erro, setErro] = useState("");

    useEffect (() =>{
        if(nomeBusca===""){
            return;
        }

        async function buscarpokemon(){
            try {
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLowerCase()}`);
                if (!resposta){
                    throw new error("pokemon nao encontrado!");
                }
                const dados = await resposta.json();
                const info = {
                    nome: dados.name,
                    imagem: dados.sprites.front_default,
                    tipo: dados.types[0].type.name
                }
                console.log(info);
                setpokemon(info);
                setErro("");
            } catch (error) {
                setErro(error.message);
            }
        }
        buscarpokemon();
    },[nomeBusca])

    return(
        <>
        <div>
        <h1>buscar pokemon</h1>
        <input type="text" placeholder="digite o nome do pokemon" onKeyDown={(e) =>{
            if(e.key === "Enter"){setNomeBusca(e.target.value)} 
        }}
        />
        {pokemon && <Pokemoncard nome={pokemon.nome} tipo={pokemon.tipo} imagem={pokemon.imagem} />};
        <Pokemoncard nome={nomeBusca} tipo="agua" imagem="texto" />
        </div>
        </>
    )
}