// SESSION STORAGE 

// Seleziona elementi
const elementButton = document.getElementById("button");
const elementPizza = document.getElementById("pizza");

// Recupera la pizza dalla sessione
const pizzaName = sessionStorage.getItem("my_preferred_pizza") || "";
// prende dal sessionStorage il valore associato 
// alla chiave "my_preferred_pizza".

/*
|| "" → significa:
“Se non trovi nulla in sessionStorage (ritorna null), 
usa la stringa vuota ""”.

Questo serve quando carichiamo la pagina.

sessionStorage.getItem("my_preferred_pizza") può restituire null 
se non c’è ancora nulla salvato.

|| "" dice: “Se non c’è nulla (null), usa una stringa vuota 
così possiamo comunque assegnarla a elementPizza.innerText senza errori”.
*/

elementPizza.innerText = pizzaName;
/* elementPizza È una variabile 
che punta a un elemento HTML nel DOM, ad esempio:
Quindi elementPizza rappresenta il <p id="pizza"></p> della pagina html.

InnerText: È una proprietà di un elemento HTML.
Ogni elemento HTML può contenere del testo dentro di sé, in questo caso avrà il nome 
della pizza preferita agggiunta dopo aver cliccato il bottone.
*/

// Evento click sul bottone
elementButton.addEventListener("click", function() {
    const pizzaName = prompt("Qual è la tua pizza preferita?", "Pizza");
    
    if (pizzaName) {
        // Salva nel sessionStorage invece che localStorage
        sessionStorage.setItem("my_preferred_pizza", pizzaName);
        elementPizza.innerText = pizzaName;
    }
});

// ES. SESSION STORAGE

// seleziono il bottone html
const elementButton1 = document.getElementById("button-user");

// seleziono l'elemento html dove apparirà il mio username dopo essere stato salvato nello storage
const elementUser = document.getElementById("username");

// recupero il dato inserito che si trova nello storage attraverso la sua chiave
const userId = sessionStorage.getItem("userId") || "";

// mostriamo l'user nell'elemento che abbiamo selezionato con la const elementPassword
elementUser.innerText = username;
console.log("Valore iniziale del session storage:", userId);

// aggiungo l'evento al bottone che abbiamo seezionato
elementButton1.addEventListener("click", function() {
    const userId = prompt("Scegli il tuo nome:");
    if (userId) {
        sessionStorage.setItem("username", userId) //salvo il valore di userId nella chiave "username"
        elementUser.innerText = userId;
        console.log("Valore salvato nel session storage: ", userId);

    }
}) 