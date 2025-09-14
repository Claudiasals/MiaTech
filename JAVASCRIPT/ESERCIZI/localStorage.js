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
