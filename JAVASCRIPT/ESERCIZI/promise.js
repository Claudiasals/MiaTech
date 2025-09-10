/*
PROMISE:
- PROMISE SEMPLICE
- .FINALLY
- CATENA DI PROMISE
- GESTIONE DI ERRORI CON .CATCH
- RIFIUTO SU BOOLEANI
- PROMISE.ALL
- PROMISE-RACE
- PROMICE.ALLSETTLED
*/

//ES.1 promise semplice 
/*
Simulare un caricamento o un’operazione che può avere successo o fallire.
La condizione if (ok): decide se la Promise va risolta o rifiutata, 
cioè se il caricamento è riuscito o no.
*/
let ok = true;
let attendiCaricamento = new Promise(function (myResolve, myReject) {

    setTimeout(() => {
        // operazioni che richiedono tempi incerti di elaborazione
        if (ok) {
            myResolve("Caricato con successo");
        } else {
            myReject("Caricamento fallito");
        }
    }, 2000);
});

console.log("PROVA", ok);

// utilizzo la promise
attendiCaricamento
    .then(function (risultato) {
        console.log(risultato);
    })
    .catch(function (errore) {
        console.error(errore);
    });


/*oppure metodo compatto con arrow function

attendiCaricamento.then(
    risultato => console.log(risultato),
    errore => console.error(errore)
);
*/


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
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            // codice di js standard per generare un numero casuale tra 0 e 9
            let numeroCasuale = Math.floor(Math.random() * 10);
            // Math.floor() arrotonda per difetto all’intero più vicino, per non avere un numero decimale.

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
    .then(function (num) {
        // Controlla se il numero è pari o dispari
        if (num % 2 === 0) {
            return num * 2; // se pari, moltiplica per 2
        } else {
            return num + 3; // se dispari, aggiungi 3
        }
    })
    .then(function (result) {
        console.log("Risultato finale:", result); // stampa il risultato finale
    })
    .catch(function (error) {
        console.error("Errore:", error); // stampa eventuale errore
    });


//es. promise rifiutata: gestione errori catch
// Funzione che restituisce una promessa rifiutata
function errorePromessa() {
    return new Promise(function (resolve, reject) {
        // Rifiutiamo subito la promessa con un messaggio
        reject("Si è verificato un errore!");
    });
}

// Gestione dell'errore con catch
errorePromessa()
    .catch(function (error) {
        console.error("Messaggio di errore:", error);
    });


//ES. RIFIUTO DA VALORE BOOLEANO
function promiseBoo(valoreBooleano) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (valoreBooleano) {
                resolve("Risolta con successo!");
            } else {
                reject("Rifiutata!");
            }
        }, 1000); //
    });
}

// Chiamata della funzione con then e catch
promiseBoo(false)
    .then(function (messaggio) {
        console.log("Successo:", messaggio);
    })
    .catch(function (errore) {
        console.error("Errore:", errore);
    });



//ES. GESTIONE ERRORI IN UNA CATENA DI PROMISE

function casualPromise() {
    return new Promise(function (resolve, reject) { //PROMISE CHE PUò RISOLVERSI O ESSERE RIFIUTATA
        setTimeout(function () {
            let casualNumber = Math.random() * 10; // .RANDOM GENERA UN NUERO CASUALE TRA 0 E 0,99. 
            // X 10 SERVE X AVE UN NUM DA 1 A 10
            console.log("Numero generato:", casualNumber);

            if (casualNumber >= 5) {
                resolve(casualNumber); // promise risolta
            } else {
                reject("Errore: numero troppo piccolo (" + casualNumber + ")"); // promessa rifiutata
            }
        }, 1000); //SETTIMEOUT DI 1 SECONDO
    });
}

// Catena di promesse con gestione degli errori
casualPromise()
    .then(function (num) {
        console.log("Primo then:", num);
        return num * 2; // moltiplica per 2
    })
    .then(function (numRaddoppiato) {
        console.log("Secondo then:", numRaddoppiato);
        if (numRaddoppiato > 15) {
            throw "Errore: numero troppo grande dopo il raddoppio!"; // errore volontario
        }
        return numRaddoppiato + 3; // aggiungi 3
    })
    .then(function (risultatoFinale) {
        console.log("Risultato finale:", risultatoFinale);
    })
    .catch(function (error) {
        // Gestisce QUALSIASI errore che avviene nella catena
        console.error("Errore catturato:", error);
    });


/* Chiamo casualPromise()
La funzione crea subito una promis, ma non esegue ancora resolve o reject.
Dentro la promessa c’è setTimeout(..., 1000) che serve a simulare l'attesa di un'altra azione come la ricezione di dati
Questo dice: “aspetta 1 secondo, poi esegui la funzione interna”.Quindi per 1 secondo non succede nulla.
Dopo 1 secondo:
-Viene eseguito il codice dentro setTimeout:
-Genera numeroCasuale
-Stampo console.log("Numero generato:", numeroCasuale) → questo è il primo output
-poi controlla se il numero è ≥5 o <5
Chiamo resolve(numeroCasuale) o reject("Errore…")
Quando la promessa si risolve o rifiuta
-Viene eseguito il .then() se resolve()
-Viene eseguito il .catch() se reject() che gestisce l'errore*/


//ES. PROMISE.ALL
/* Promise.all() è un metodo JavaScript statico che prende un array di promesse 
(o un qualsiasi iterabile di promesse) e restituisce una nuova promessa. 
Questa nuova promessa si risolverà solo quando tutte le promesse nell'array 
di input si saranno risolte, restituendo un array con i risultati di ciascuna 
promessa nell'ordine originale. */

function promise1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Risultato promise1");
        }, 1000);
    });
}

function promise2() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Risultato promise2");
        }, 2000);
    });
}

//Eseguo entrambe le promesse in parallelo con promise.all
Promise.all([promise1(), promise2()])
    .then(function (results) {
        console.log("Entrambe le promesse sono risolte:");
        console.log(results); // stmpo un array con i risultati 
    })
    .catch(function (error) {
        console.error("Errore in una delle promesse:", error);
    });

/* Promise.all è un metodo che prende un array di promesse e restituisce una nuova promise.
La nuova promise si risolve solo quando tutte le promise dell’array sono risolte.
Se anche solo una promise viene rifiutata (reject), la promise di Promise.all viene rifiutata subito e si va nel .catch(). */



//ES. PROMISE.RACE
/* .race Restituisce solo il risultato (o errore) della prima promessa completata. 
Mentre .all restituisce i risultati di tutte le promises. */



function promessaConRitardo(valore, ritardo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Risultato: ${valore} (dopo ${ritardo}ms)`);
        }, ritardo);
    });
}
/* Funzione che restituisce una promessa che si risolve dopo un certo tempo. 
La funzione non restituisce un valore immediato (come "Ciao"), ma una Promise, 
cioè un oggetto che rappresenta un'operazione asincrona che ora non è ancora 
finita, ma che finirà in futuro. 

In JavaScript, una promessa può essere in uno di questi stati: 

pending → in attesa
fulfilled (risolta) → è andata a buon fine
rejected (rifiutata) → è fallita

In questo caso se la promise viene rosolta con successo stamperemo:
`Risultato: ${valore} (dopo ${ritardo}ms -> Risultato: Promessa 2 (dopo 1000ms)
*/

// Creiamo due promesse con tempi di risoluzione diversi
const promessa1 = promessaConRitardo("Promessa 1", 2000); // 2 secondi
const promessa2 = promessaConRitardo("Promessa 2", 1000); // 1 secondo

// Utilizziamo Promise.race per ottenere il risultato di una promise, 
// quella che per prima viene risolta con successo
Promise.race([promessa1, promessa2])
    .then((risultato) => {
        console.log("Prima promessa risolta!", risultato);
    })
    .catch((errore) => {
        console.error("Errore:", errore);
    });




//ES. PROMISE .allSettled
/*
Promise.allSettled serve per eseguire più promesse in parallelo 
e attendere che tutte siano completate, indipendentemente dal fatto 
che siano state risolte o rifiutate.
Con Promise.all se anche una sola promessa viene rifiutata, l’intero all fallisce.
Con Promise.allSettled ottieni sempre un risultato per ogni promessa, 
sia che sia fulfilled (risolta) o rejected (rifiutata).
*/

// Funzione 1: promessa risolta dopo 1 secondo
function promessa10() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa 1 completata");
        }, 1000);
    });
}

// Funzione 2: promessa risolta dopo 2 secondi
function promessa20() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa 2 completata");
        }, 2000);
    });
}

// Funzione 3: promessa rifiutata dopo 1.5 secondi
function promessa30() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promessa 3 fallita");
        }, 1500);
    });
}

// Esecuzione di tutte le promesse in parallelo
Promise.allSettled([promessa10(), promessa20(), promessa30()])
    .then((risultati) => {
        risultati.forEach((risultato, index) => {
            if (risultato.status === "fulfilled") {
                console.log(`Promessa ${index + 1}: ✅ ${risultato.value}`);
            } else {
                console.log(`Promessa ${index + 1}: ❌ ${risultato.reason}`);
            }
        });
    });

/* 
Qui stiamo chiamando le tre funzioni che restituiscono promesse.
Tutte e tre iniziano a “lavorare” in parallelo, ognuna con il suo setTimeout 
o operazione asincrona. Promise.allSettled aspetta che tutte e tre siano completate, 
sia che siano risolte (resolve) sia che siano rifiutate (reject). 
Alla fine, Promise.allSettled restituisce una nuova promessa.
*/