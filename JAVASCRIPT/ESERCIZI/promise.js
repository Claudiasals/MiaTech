let attendiCaricamento = new Promise(function (myResolve, myReject) {
    let ok = false;

    // operazioni che richiedono tempi incerti di elaborazione
    if (ok) {
        myResolve("Caricato con successo");
    } else {
        myReject("Caricamento fallito");
    }
});

// utilizzo la promise
attendiCaricamento.then(
    function (risultato) {
        console.log(risultato);
    },
    function (errore) {
        console.error(errore);
    }
);


//oppure metodo compatto con arrow function
attendiCaricamento.then(
    risultato => console.log(risultato),
    errore => console.error(errore)
);


//aggiungo catch
attendiCaricamento
    .then(risultato => {
        console.log(risultato);
    })
    .catch(errore => {
        console.error("Errore:", errore);
    });




//ES.FINALLY

function finallyPromise() {
    return new Promise((resolve, reject) => {
        let successo = true;
        if (successo) {
            resolve("Resolve");
        } else {
            reject("Reject");
        }
    });
}

// Utilizzo della promise con finally
finallyPromise()
    .then(risultato => {
        console.log(risultato);
    })
    .catch(errore => {
        console.error(errore);
    })
    .finally(() => {
        console.log("Finally: questa azione viene eseguita sempre, indipendentemente dal risultato");
    });



//ES. CATENA DI PROMISE CON IF ELSE

// Funzione che restituisce una promise che si risolve dopo 1 secondo con un numero
function getNumber() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(5); // restituisce 5 dopo 1 secondo
        }, 1000);
    });
}

// Catena di promise
getNumber()
    .then(function (num) {

        if (num % 2 === 0) {  // se è pari 
            return num * 2; // prendi il valore e moltiplica per 2

        } else {
            return num + 3; // prendi il valore e aggiungi 3
        }
    })
    .then(function (result) { 
        //l'ultimo then riceve il valore del penultimo e quindi il "result"
        console.log("Risultato finale:", result);
        
    });


    //GESTIONE ERRORE CON CATCH

function number() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            
            // codice di js standard per generare un numero casuale tra 0 e 9
            let numeroCasuale = Math.floor(Math.random() * 10);

            console.log("Numero casuale generato dalla funzione:", numeroCasuale); 

            if (numeroCasuale >= 5) {
                resolve(numeroCasuale); // successo
            } else {
                reject("Numero troppo piccolo: " + numeroCasuale); // insuccesso
            }
        }, 1000);
    });
}

// Catena di promesse
number()
    .then(function(num) {
        // Controlla se il numero è pari o dispari
        if (num % 2 === 0) {
            return num * 2; // se pari, moltiplica per 2
        } else {
            return num + 3; // se dispari, aggiungi 3
        }
    })
    .then(function(result) {
        console.log("Risultato finale:", result); // stampa il risultato finale
    })
    .catch(function(error) {
        console.error("Errore:", error); // stampa eventuale errore
    });