import { useState, useEffect } from "react";
import BuscarCEP from "../../components/BuscarCEP/BuscarCEP";
import ControleAgua from "../../components/AlertaHidratacao/AlertaHidratacao";

export default function Home(){
    const [cep, setcep] = useState("");
    const [dadosendereco, setdadosendereco] = useState(null);
    const [erro, setErro] = useState("");

    useEffect(() =>{
        if(cep===""){
            return;
        }
        async function Buscarendereco(){
            try{
                const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                if(!resposta.ok){
                    throw new Error("erro ao buscar o cep");
                }
                const dados = await resposta.json();
                if(dados.erro){
                    setErro("CEP nao encontrado");
                } else {
                    setdadosendereco(dados);
                    setErro("");
                }
            } catch (error) {
                setErro(error.message);
            }
        }
        Buscarendereco();
    }, [cep]);

    return(
        <>
        <input type="text" placeholder="digite o CEP" onKeyDown={(e)=>{
            if(e.key === "Enter") setcep(e.target.value);
        }}/>
        {erro && <p>{erro}</p>}
        {dadosendereco &&
            <BuscarCEP
            cep={dadosendereco.cep}
            logradouro={dadosendereco.logradouro}
            bairro={dadosendereco.bairro}
            uf={dadosendereco.uf}
            localidade={dadosendereco.localidade}/>
        }
    <ControleAgua />   
    </>
    )
}