// Seleziona l'elemento con id "paragraph"
const paragrafo = document.getElementById("paragraph");

/* Cos'è querySelector?
querySelector è un metodo del DOM che permette di selezionare
un elemento che corrisponde a un selettore CSS.
Esempio: "#id" per id, ".classe" per classi, "tag" per tag HTML. */

// seleziono l'elemento con id="list"
const lista = document.querySelector("#list");

// modifica paragrafo con innerText

const button = document.getElementById("button")

button.addEventListener("click", function() {

    paragrafo.innerText = ("NUOVO PARAGRAFO");
});




