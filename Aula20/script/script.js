let visor = document.getElementById('visor');

function limpar(){
    visor.textContent = " ";
}

function addvalor(valor){
    if(valor === "x"){
        valor = "*";
    }else if(valor === "÷"){
        valor = "/";
    } else{
    expressao += valor;
    visor.textContent = expressao;
    }
}

function calcular(){
    visor.textContent = eval(expressao);
    expressao = visor.textContent;
}

function apagar(){
    expressao = expressao.slice(1);
    visor.textContent = expressao;
}