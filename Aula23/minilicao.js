
function exibir_cores(){
    let cores = ["red", "white", "purple"];
    let section = document.querySelector("section");

    for(let i = 0; i < cores.length; i++){
        let p =document.createElement("p");
        p.textContent = cores[i];
        p.classList.add(cores[i]);
        section.appendChild(p);
    }
}

function alunos(){
    let alunos = [];
    let section = document.querySelectorAll("section");
    console.log(section.length);
    let quantia = parseInt(prompt("informe o numero de alunos: "));
    if (quantidade > 0 && typeof quantidade === "number"){
        for(let i=0; i < quantidade; i++){
            let nome = prompt(`informe o nome do aluno: ${i++}: `);
            alunos.push(nome);
        }
        alunos.forEach(a =>{
            let item = document.createElement("li")
            item.textContent = a;
            section[1].appendChild(item);
        })
    } else{
        alert("entrada invalida");
    }
}


