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

button.addEventListener("click", function () {

    paragrafo.innerText = ("NUOVO PARAGRAFO");
});


// modifico lo style del paragrafo
// 1. seleziono il bottone che cliccherà l'utente per modificare il paragrafo
const style = document.querySelector("#styleButton");
// 2. creo l'evento sul bottone con la proprietà "style"
style.addEventListener("click", function () {
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

// Aggiungo un botton e con innerText
// Seleziono il paragrafo
const newButton = document.querySelector("#addButton");
newButton.addEventListener("click", function () {
    // Modifico il contenuto HTML del paragrafo e creo un pulsante nuovo
    paragrafo.innerHTML = ` 
    Testo modificato! <br>
    <button id="new-button">NEW BUTTON</button>
`; // utilizzare backticks per unire testo e codice html
});

// creo una lista non ordinata con js
const newList = document.getElementById("listButton")
newList.addEventListener("click", function () {
    const nuovoElemento = document.createElement("ul"); // creo un <ul> (posso creare qualsiasi elemento HTML)
    nuovoElemento.innerText = "lista aggiunta"; // testo che apparirà
    document.getElementById("paragraph").appendChild(nuovoElemento); // aggiungo la lista al paragrafo 

})



// aggiungo 5 li alla lista


// collego il bottone all'aggiunta dei 5 "li"
const newButton5 = document.querySelector("#addItem");
newButton5.addEventListener("click", function () {
   // Seleziono il primo <ul> della pagina
const addFiveLi = document.getElementsByTagName("ul")[0];

// Creo e aggiungo 5 <li> numerati
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li"); // creo un nuovo <li>
    li.innerText = "ESERCIZIO 8: elemento in lista numero " + i;         // testo del <li>
    addFiveLi.appendChild(li);               // aggiungo il <li> al <ul>
}

});

