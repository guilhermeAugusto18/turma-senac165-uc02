let tarefas = [];
let input = document.querySelector('#tarefa');
let Lista = document.querySelector('#Lista');
let btnadd = document.querySelector('#btnadd');

btnadd.addEventListener("click", () => {
    if(input.value === ""){
        alert('digite uma tarefa');
    } else {
        tarefas.push(input.value);
    }
    input.value = "";
    console.log(tarefas);
});

function mostrartarefas(){
    tarefas.forEach(t=>{
        let li = document.createElement("li");
        li.textContent = t;
        let editar = document.createElement("button");
        editar.textContent = "editar";
        let excluir = document.createElement("button");
        excluir.textContent = "excluir";
        li.appendChild(editar);
        li.appendChild(excluir);
        Lista.appendChild(li);
    })
}

function excluir(i){
    tarefas.splice(i, 1);
    mostrartarefas();
}
