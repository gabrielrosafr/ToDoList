const input = document.getElementById("adicionarTarefa");
const button = document.getElementById("addBotao");
const list = document.getElementById("listaTarefas");


function adicionarTarefa(){

    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.innerText = text;

    list.appendChild(li);

    input.value = "";
};

button.addEventListener("click", function() {
    adicionarTarefa();

});

input.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
         adicionarTarefa();
    }
});