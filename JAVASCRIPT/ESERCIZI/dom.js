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


// modifico lo style del paragrafo
// 1. seleziono il bottone che cliccherà l'utente per modificare il paragrafo
const style = document.querySelector("#styleButton");
// 2. creo l'evento sul bottone con la proprietà "style"
style.addEventListener("click", function() {
        paragrafo.style.backgroundColor = "lightblue"; // Cambio il colore di sfondo
        paragrafo.style.fontSize = "24px"; // Cambio la dimensione del font
});

/* 
Ogni elemento DOM ha delle proprietà che corrispondono a cose che possiamo leggere o modificare.
.style è a sua volta un oggetto che contiene tutte le proprietà CSS dell’elemento.
con style possiamo accedere a tutte le porprietà css, solo che useremo la CamelCase al posto del trattino.
sintassi --> nomeElemento.style.proprietàDelCss
Style è una proprietà dell'oggetto dom proprio come innerText.
*/

// ggiungo un botton e con innerText
// Seleziono il paragrafo
const newButton = document.querySelector("#addButton");
newButton.addEventListener("click", function() {
// Modifico il contenuto HTML del paragrafo e creo un pulsante nuovo
paragrafo.innerHTML = ` 
    Testo modificato! <br>
    <button id="new-button">NEW BUTTON</button>
`; // utilizzare backticks per unire testo e codice html
});
