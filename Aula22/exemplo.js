let chico = 1.50;
let ze = 1.10;
let ano = 0;
do{
    chico += 0.02;
    ze += 0.03;
    ano += 1;
} while(chico > ze);
console.log(`vai demorar ${ano} anos ate ze ficar maior que chico`);