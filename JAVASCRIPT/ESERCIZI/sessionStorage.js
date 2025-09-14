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
/*
// Seleziono il bottone HTML con id "button-user"
const elementButton1 = document.getElementById("button-user");

// Seleziono l'elemento HTML dove apparirà il mio username
const elementUser = document.getElementById("username");

// Recupero dal sessionStorage il valore salvato con chiave "userId"
// Se non esiste, uso una stringa vuota come default
const userId = sessionStorage.getItem("userId") || "";

// Mostro subito l'user nella pagina (se già presente nel sessionStorage)
elementUser.innerText = userId;
console.log("Valore iniziale del session storage:", userId);

// Aggiungo un "listener" al bottone: quando viene cliccato esegue la funzione
elementButton1.addEventListener("click", function() {
    // Chiedo all'utente di inserire il proprio nome
    const userId = prompt("Scegli il tuo nome:");
    
    // Se l'utente inserisce qualcosa (non null e non stringa vuota)
    if (userId) {
        // Salvo il valore nel sessionStorage con la chiave "userId"
        sessionStorage.setItem("userId", userId);
        
        // Aggiorno il contenuto del paragrafo con il nuovo username
        elementUser.innerText = userId;
        
        // Stampo nella console il valore salvato
        console.log("Valore salvato nel session storage:", userId);
    }
});

*/

// ESERCIZIO SESSION STORAGE 

// seleziono bottone
const elementButton2 = document.getElementById("button-user");
// seleziono elemento testo
const elementUser = document.getElementById("username");
//recupera user da storage
const userId = sessionStorage.getItem("username") ||"";
//mostra user in pagina
elementUser.innerText = userId;
console.log(userId); //stampo
// aggiungo evento al bottone
elementButton2.addEventListener("click", function() {
    const userIdNew = prompt("Inserisci il tuo nome utente");
    sessionStorage.setItem("username", userIdNew);
    elementUser.innerText = userIdNew;
    console.log("Nome utente: ", userIdNew)
})

// funzione di rimozione
// seleziono bottone
const removeButton = document.getElementById("remove")
removeButton.addEventListener("click", function() { // evebto su bottone con funzione
sessionStorage.removeItem("username"); // elimino da chiave
elementUser.innerText = ""; // aggiorno contenuto
console.log("user rimosso dallo storage");
});


