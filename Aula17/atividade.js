function questao01(){
console.log('bem vindo a nosso site, faça seu cadastro');
let nome = prompt('nome:');
let idade = prompt('idade:');
let Cidade = prompt('cidade:');
alert(`usuario: ${nome}, ${idade} anos, de ${Cidade}`);
}
//questao01();

function questao02(){
    console.log('decida o preço da comida');
    let preco = prompt('decida o preco do pao');
    alert(`preço com desconto: R$${preco * 0.8}`);
}
//questao02();

function questao03(){
    let celsius = prompt('termometro:');
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`temperatura celsius: ${celsius}, fahrenheit: ${fahrenheit}`);
}
//questao03();

function questao04(){
    let base = prompt('base: ');
    let altura = prompt('altura: ');
    let area = base * altura;
    let perimetro = (2*area) + (2*altura);
    alert(`area: ${area}, perimetro: ${perimetro}`);
}
questao04();

function questao05(){
    let nascimento = prompt('quando voce nasceu?');
    let idade = 2025 - nascimento;
    alert(`voce tem ${idade} anos`);
}
questao05();

function questao06(){
    let idade = prompt('quantos anos voce tem?');
    let nascimento = 2025 - idade;
    alert(`voce nasceu em ${nascimento}`);
}
questao06();