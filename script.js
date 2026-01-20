const input = document.getElementById("adicionarTarefa");
const button = document.getElementById("addBotao");
const list = document.getElementById("listaTarefas");

button.addEventListener("click", function() {

    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.innerText = text;

    list.appendChild(li);

    input.value = "";

});