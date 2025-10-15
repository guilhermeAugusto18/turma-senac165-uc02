let itens01 = document.getElementsByClassName("teste");
console.log(itens01[0].innerText);
console.log(itens01[1].innerText);

let paragrafos = document.querySelector("p");
console.log(paragrafos.innerText);

let cabecalho01 = getElementsByTagName("h1");


itens01[0].textContent = "estou manipulando o dom";
itens01[0].innerHTML = "<u>estou manipulando o dom</u>";

itens01[0].style.color = "red";
itens01[0].style.fontsize = "1.5rem";


