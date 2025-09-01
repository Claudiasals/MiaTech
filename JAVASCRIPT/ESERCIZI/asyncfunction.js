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