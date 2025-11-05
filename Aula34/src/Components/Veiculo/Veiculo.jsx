import {useState, useEffect} from "react";
import styles from "./Veiculo.module.css";
export default function Veiculo(){
    const [ligado, setLigado] = useState(false);

    const [velocidade, setVelocidade] = useState(0);
 
    const [combustivel, setCombustivel] = useState(100);

    useEffect (() => {
        if (ligado){
            console.log(`velocidade atual: ${velocidade} km/h`);

            if (velocidade === 100){
                alert("cuidado, acima do limite de velocidade");
            }
        }
    }, [velocidade, ligado]);

    useEffect (() => {
        if (ligado){
            console.log(`carro ligado`);
        } else {
            console.log(`carro desligado`);
            setVelocidade(0);
        }
    }, [ligado]);

    //desafio 2:
    useEffect (() => {
        if(combustivel <= 20){
            alert(`combustivel baixo`);
        }
    }, [combustivel]);

    function LigarDesligar(){
        if (!ligado && combustivel < 10){
            alert(`combustivel baixo, abasteca o carro`);
            return;
        }

        if (!ligado && combustivel <= 0){
            alert(`sem combustivel, abasteca o carro`);
            return;
        }
        
        setLigado(!ligado);
    }

    function acelerar(){
        if (!ligado){
            return;
        }
        if (combustivel > 0){
            setVelocidade(velocidade + 10);
            setCombustivel(Math.max(combustivel - 5, 0));
        } else {
            alert(`alerta, acabou o combustivel!`);
            setLigado(false);
        }
    }

    function frear(){
        if (!ligado) return;

        if (velocidade  > 0){
            setVelocidade(velocidade - 10);
            setCombustivel(Math.min(combustivel + 1, 100));
        }
    }

    function abastecer (){
        if (combustivel == 100){
            alert(`tanque ja esta cheio`);
        }
        setCombustivel(100);
        alert(`tanque cheio`);
    }

    return(
        <>
        <div className={styles.painel}>
        <h2>Painel do Veículo</h2>
        <p><strong>Status:</strong> {ligado ? "🚗 Ligado" : "🛑 Desligado"}</p>
        <p><strong>Velocidade:</strong> {velocidade} km/h</p>
        <p><strong>Combustível:</strong> {combustivel.toFixed(0)}%</p>
        <progress value={combustivel} max="100"></progress>
        <div className={styles.botoes}>
        <button onClick={LigarDesligar}>
        {ligado ? "Desligar" : "Ligar"}
        </button>
        <button onClick={acelerar} disabled={!ligado}>Acelerar</button>
        <button onClick={frear} disabled={!ligado || velocidade ===0}>Frear</button>
        <button onClick={abastecer} disabled={ligado || combustivel===100}>abastecer</button>
        </div>
        </div>
        </>
    );
}