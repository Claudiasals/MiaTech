//LOCAL STORAGE

// Seleziona dal DOM il bottone con id "set-button"
const elementButton = document.getElementById("btn");

// Seleziona dal DOM l'elemento con id "pizza"
const elementPizza = document.getElementById("pizza");

// Recupera dal localStorage la pizza preferita (se esiste)
const pizzaName = localStorage.getItem("my_preferred_pizza") || "";

// Mostra la pizza salvata nella pagina
elementPizza.innerText = pizzaName;

// Aggiunge l'evento al bottone
elementButton.addEventListener("click", function() {
    // Chiede all’utente la sua pizza preferita
    const pizzaName = prompt("Qual è la tua pizza preferita?", "Pizza");

    // Se l’utente non ha annullato o lasciato vuoto
    if (pizzaName) {
     
        // Salva nel localStorage la pizza scelta
        localStorage.setItem("my_preferred_pizza", pizzaName);

        // Aggiorna il testo dell’elemento
        elementPizza.innerText = pizzaName;
    }
    /* PERCHé IF ESCLUDE ALCUNI VALORI DALLA FUNZIONE? 
    PERHè ALCUNI VENGONO CONSIDERATI FALSY DI DEFAULT DA IF: 
       Valori considerati falsy in JavaScript (quindi l’if NON entra):

        - false
        - 0
        - "" (stringa vuota)
        - null
        - undefined
        - NaN

    TUTTO il resto è truthy, quindi rientra nell’if e verrà inserito nel Local Storage. 
    */
       /* 
       OPPURE POTEVAMO SCRIVERE:
          if (pizzaName !== null && pizzaName !== "")

    Se pizzaName contiene un valore valido (non null, non stringa vuota),
     allora esegui il codice”. 
     */
});


// -- ES. LOCAL STORAGE --
/* Utilizzare il localStorage
Creare uno script che salvi, recuperi e rimuova un valore nel localStorage. 
Stampare i valori nella console durante ogni operazione. */

// seleziono il bottone da utilizzare
const elementSaveButton = document.getElementById("btn-user");
// seleziono dal DOM l'elemento con id=user
const elementUser = document.getElementById("user");

/*
document → rappresenta l’intera pagina HTML.
getElementById("id") → cerca l’elemento con quell’id.
Restituisce l’elemento HTML se esiste, altrimenti null.
*/

// recupero l'user scritto dall'utente e salvato nel local storage
const userId = localStorage.getItem("nome-utente") || "";
// "nome-utente" è la chiave che utilizziamo nel local storage per identificare il dato. 
// mostra l'user salvato in pagina
elementUser.innerText = userId;
console.log("Valore iniziale dal localStorage:", userId);

// aggiungo l'evento al bottone
elementSaveButton.addEventListener("click", function() {
    // "click" è un tipo di evento predefinito.
    // chiedo all'utente che nome vuole usare
    const userId = prompt("Inserisci il tuo nome utente: ");
    if (userId) {
        // salvo nel local storage il nuovo dato
        localStorage.setItem("nome-utente", userId);
        // aggiorno il testo all'interno dell'elemento id=user
        elementUser.innerText = userId;
        console.log("Valore salvato nel localStorage:", userId);

    }
});


// aggiungo funzione rimuovi

const elementRemoveButton = document.getElementById("btn-remove");

elementRemoveButton.addEventListener("click", function() {
    // Aggiunge un "listener" all'elemento elementRemoveButton
    // In pratica diciamo: "Quando il bottone viene cliccato, esegui questa funzione"
    
    localStorage.removeItem("nome-utente");
    // Rimuove dal localStorage il valore salvato con la chiave "nome-utente"
    // Dopo questa operazione, se provi a fare localStorage.getItem("nome-utente"), ritorna null
    
    elementUser.innerText = "";
    // Aggiorna il contenuto del paragrafo elementUser nella pagina
    // Svuota il testo che mostrava il nome utente
    
    console.log("Valore rimosso dal localStorage");
    // Stampa nella console del browser un messaggio informativo
    // Utile per verificare che l'operazione sia stata eseguita correttamente
});
