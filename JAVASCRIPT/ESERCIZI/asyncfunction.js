// es. funzione asincrona semplice
/*
Funzione asincrona semplice
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
    console.log(risultato);
}

inizio();