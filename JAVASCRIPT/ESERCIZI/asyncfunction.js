// ES. FUNZIONE ASINCRONA SEMPLICE
/* Funzione asincrona semplice
Creare una funzione asincrona che utilizzi await per attendere una promessa 
che si risolve dopo 2 secondi con un messaggio. 
Stampare il messaggio quando la promessa viene risolta. */

async function attendiPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risultato");
        }, 2000);
    });
}

async function inizio() {
    let risultato = await attendiPromise(); // aspetta che la promessa si risolva
    console.log("es.1", risultato);
}

inizio();



//ES. GESTIONE ERRORI TRY CATCH
/* Gestione degli errori con try e catch. Creare una funzione asincrona 
che utilizzi await per attendere una promessa che può essere risolta o 
rifiutata in base a un valore booleano passato come parametro. 
Utilizzare try e catch per gestire l'errore e stampare il messaggio di errore. */

// Funzione asincrona che restituisce una Promise 
async function attendiPromise2(valoreBooleano) {
    return new Promise((resolve, reject) => { //creo una promise dentro la funzione, che ha come parametri altre 2 funzioni
        setTimeout(() => {
            if (valoreBooleano) {
                resolve("Risultato positivo"); // funzione resolve se viene risolta
            } else {
                reject("Errore: valore booleano falso"); // funzione rejject se iene rifiutata
            }
        }, 2000);
    });
}

// Funzione asincrona principale con gestione errori
async function inizio2(valore) {
    try {
        // aspetta che la promessa si risolva
        let risultato = await attendiPromise2(valore);

    } catch (errore) {
        // cattura l'errore se la promise viene rifiutata
        console.error("Messaggio di errore:", errore);
    }
}

// Chiamata della funzione con valore true (risolta)
inizio2(true);

// Chiamata della funzione con valore false (rifiutata)
inizio2(false);


// ES. FUNZIONI ASINCRONE IN SERIE
/* Creare due funzioni asincrone che restituiscano promesse che si risolvono 
dopo tempi diversi. Creare una terza funzione asincrona che utilizzi await 
per chiamare le prime due funzioni in serie e stampare i risultati quando 
en

/* Resolve è un parametro che possiamo chiamare come vogliamo ma tutti gli sviluppatori 
usano resolve e reject come nomi standard, così chi legge capisce subito di cosa si tratta.
*/

function primaFunzione() {
    // Definiamo una funzione chiamata "primaFunzione".
    // La mettiamo dentro una funzione così possiamo richiamarla ogni volta che vogliamo simulare un'operazione asincrona.

    return new Promise((resolve) => {
        // Restituiamo una Promise: serve per rappresentare qualcosa che "non è pronto subito"
        // ma sarà pronto in futuro. Usiamo Promise perché è lo standard moderno in JavaScript
        // per gestire codice asincrono (meglio delle vecchie callback).

        setTimeout(() => {
            // Usiamo setTimeout per simulare un’attesa (come se fosse una chiamata a un server).
            // In un caso reale potrebbe essere "aspetta che arrivi una risposta dal server".

            resolve("Prima completata");
            // Qui scegliamo resolve perché vogliamo dire: "l’operazione è finita bene".
            // Restituiamo una stringa, ma potrebbe essere qualsiasi dato (numeri, oggetti, ecc).
        }, 3000);
        // 3000 millisecondi = 3 secondi. Scegliamo 3 secondi per simulare un’operazione lenta.
    });
    // Chiudiamo la Promise: ora primaFunzione restituisce questo "pacchetto asincrono".
}

function secondaFunzione() {
    // Stessa logica della prima, ma con un tempo diverso.

    return new Promise((resolve) => {
        // Anche qui restituiamo una Promise: così possiamo gestirla con await.

        setTimeout(() => {
            // Simuliamo un'altra operazione asincrona, ma più veloce.

            resolve("Seconda completata");
            // Usiamo di nuovo resolve perché vogliamo dire che tutto è andato bene.
        }, 1000);
        // Qui mettiamo 1000 ms (1 secondo), per simulare un'operazione più veloce.
    });
}

async function terzaFunzione() {
    // Definiamo una funzione asincrona con la parola chiave async.
    // Perché async? Perché ci permette di usare "await" dentro: senza async non si può.
    // async rende più facile leggere codice asincrono: sembra codice "normale".

    let risultato1 = await primaFunzione();
    // Chiediamo a primaFunzione di partire.
    // Mettiamo "await" per dire: "aspetta che finisca prima di andare avanti".
    // Lo facciamo perché vogliamo che le funzioni vengano eseguite in SERIE (una dopo l'altra).
    // Quando la Promise si risolve, il valore ("Prima completa") viene messo in risultato1.

    console.log(risultato1);
    // Stampiamo il risultato. Questa riga serve solo per vedere il valore e capire il flusso.

    let risultato2 = await secondaFunzione();
    // Solo adesso facciamo partire la seconda funzione.
    // Anche qui usiamo await: vogliamo che finisca prima di andare avanti.
    // Scegliamo di metterla qui e non prima, perché l’esercizio richiede di eseguirle in serie.

    console.log(risultato2);
    // Stampiamo il risultato della seconda funzione.
}

terzaFunzione();
// Infine richiamiamo terzaFunzione.
// Questo serve a far partire tutta la catena: senza questa riga, il programma definirebbe le funzioni
// ma non le eseguirebbe mai.
// Abbiamo scelto di non mettere "await" qui fuori, perché siamo nel "file principale" e non in un'altra async function.


// ESEMPIO IN CONTESTO REALE:

function datiUtente() {
    return new Promise((check) => {
        setTimeout(() => {
            check("Dati utente caricati");
        }, 5000)
    });
}

function ordiniUtente() {
    return new Promise((check) => {
        setTimeout(() => {
            check("ordine effettuato");
        }, 2000)
    });
}
async function caricaDatiUtente() {
    let utente = await datiUtente();
    console.log("Utente:", utente);

    let ordini = await ordiniUtente();
    console.log("Ordini:", ordini);
}
caricaDatiUtente();



// FUNZIONI ASINCRONE IN SERIE
/*
Creare due funzioni asincrone che restituiscano promesse che si risolvono dopo tempi diversi.
Creare una terza funzione asincrona che utilizzi await per chiamare le prime due funzioni 
in serie e stampare i risultati quando entrambe sono risolte.
*/

function first() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("firse completata ");//quello che mstra dopo 4 secondi a fine promise
            resolve("Risultato first promise");
        }, 8000);
    });
}

function second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("second completata");
            resolve("Ruslutato second");
        }, 2000);
    });
}

/* SUPPONIAMO CHE LA SECONDA FUNZIONE DIPENDA DALLA PRIMA, 
NEL NOSTRO CASO LA PRIMA (8 secondi) SAREBBE PIù LENTA DELLA SECONDA (2 secondi), 
SAREBBE QUINDI NECESSARIO CREARE UNA TERZA FUNZIONE ASINCRONA CON AWAIT PER 
DIRE ALLA SECONDA DI ASPETTARE IL TERMINE DELLA PRIMA FUNZIONE PER PROCEDERE
*/ 

// creiamo la terza funzione che contiene await
async function eseguiInSerie() {
    let risultatoFirst = await first(); // gli diciamo di attendere la fine 
    //di questa prima funzione prima di andare avanti
    console.log("Risultato prima promise", risultatoFirse);

    let risultatoSecond = await second(); // await = aspetta la fine di --> "second"
    // glielo diciamo eseguendo "second" perché JS deve attendere la fine 
    //dell'esecuzione di second prima di andare oltre
    console.log("Risultato seconda primise", risultatoSecond);
}
eseguiInSerie(); //eseguiamo la funzione eseguiInSerie che contiene la procedura per 
// eseguire in serie le due funzioni che hanno due tempi diversi.