const card = document.getElementById("card");
const destino = document.getElementById("destino");

card.addEventListener("dragstart", function (event) {
    console.log("Começou a arrastar!");
    event.dataTransfer.setData("text", event.target.id);
});

destino.addEventListener("dragover", function (event) {
    event.preventDefault(); 
});

destino.addEventListener("drop", function (event) {
    console.log("elemento solto!");
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.getElementById(id);

    destino.appendChild(elemento);

    console.log("terminou de arrastar");
});