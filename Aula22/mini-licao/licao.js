function questao01(){
    let resposta = document.querySelector("#resposta01");
    console.log(resposta.textContent);
    let n = 0;
    while(n < 500){
        console.log(n);
        resposta.textContent += `${n}`;
        n += 1;
    }
}

questao01();


function questao02(){
    let A = 0;
    let resposta = document.querySelector("#resposta02");
    let val01 = (document.querySelector("valor01").value);
    let val02 = (document.querySelector("valor02").value);
    for (let i = A; i <= 30; i++){
        if(i % 2 == 0){
            document.write(`${i} `);
        }
    }
}

questao02();

function questao03(){
    let saida = document.querySelector("#resposta03");
    let entrada = parseInt(document.querySelector("#entrada").value);
    for(let i = 0; i <= 10; i++){
        saida.textContent += `${entrada * i}\n`;
    }
}


    