/* Utilizzare localStorage e sessionStorage insieme.
Crea uno script che: 
- salva i valori sia nel localStorage che nel sessionStorage
- recuperi e rimuove i valori 
- stampa i valori nella console durante ogni operazione
*/ 

// seleziono i bottoni 
const elementButtonUser = document.getElementById("user-button");
const elementButtonUserDelete = document.getElementById("delete-user-button");
const elementButtonPassword = document.getElementById("password-button");
const elementButtonPasswordDelete = document.getElementById("delete-password-button");

const elementUserId = document.getElementById("nome-utente")
const elementPassword = document.getElementById("password")

// creo le variabili che conterranno i valori associati alle chiavi username e password
// chiavi e valori si troveranno negli storage
const userId = localStorage.getItem("username");
const psw = sessionStorage.getItem("password");

/*
getItem("username") → prende il valore salvato sotto la chiave "username".
getItem("password") → prende il valore salvato sotto la chiave "password".
Quindi:
userId contiene il valore associato alla chiave "username".
psw contiene il valore associato alla chiave "password".
*/

// mostra l'user in pagina e stampa in console
elementUserId.innerText = userId;
elementPassword.innerText = psw;
console.log(userId)
console.log(psw)

// aggiungo evento a elementButtonUser
elementButtonUser.addEventListener("click", function () {
    const userId = prompt("Inserisci il tuo usarname", "nome-utente");
    if (userId) {
        localStorage.setItem("username", userId); // (chiave, valore)
        elementUserId.innerText = userId;
        console.log(userId);
    }
});

// aggiungo evento a elementButtonPassword
elementButtonPassword.addEventListener("click", function () {
    const psw = prompt("Inserisci qui la tua password", "password");
    // "Inserisci qui la tua password" --> questa è la frase che compare nel prompt
    // "password" --> è dove apparirà il testo inserito dall'utente
    if (psw) {
        sessionStorage.setItem("password", psw); // (chiave, valore)
        elementPassword.innerText = psw;
        console.log(psw);
    }
});

// aggiungo evento a elementButtonUserDelete
elementButtonUserDelete.addEventListener("click", function() {
        localStorage.removeItem("username"); 
        // removeItem prende solo la chiave
        elementUserId.innerText = "";
        console.log(userId);
})


// aggiungo evento a elementButtonPasswordDelete
elementButtonPasswordDelete.addEventListener("click", function() {
        sessionStorage.removeItem("password");
        elementPassword.innerText = "";
        console.log(psw);
})

/*
PER LE FUNZIONI DI RIMOZIONE NON SERVE "IF". PERCHÉ?
1. Non importa se la chiave esiste o meno
2. Se la chiave non esiste, non succede nulla, il browser non dà errori
*/