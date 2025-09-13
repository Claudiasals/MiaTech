// TECNICA DEI COOCKIE PER GESTIRE IL LOCAL STORAGE: --> TECNICA IN DISUSO! <--

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // imposta una durata di 24 ore in millisecondi
    let expires = "expires=" + d.toUTCString(); // crea stringa 'expires' per il cookie
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    // imposta il cookie con nome, valore, scadenza e path valido per tutto il sito
}

setCookie("dati-locali", "valore-esempio"); // esempio di creazione cookie
console.log("cookies:", document.cookie);   // stampa tutti i cookie

/*

Commento riga per riga (versione corretta)

function setCookie(name, value) {
→ Definisce una funzione chiamata setCookie con due parametri: name (nome del cookie) e value (valore del cookie).

const d = new Date();
→ Crea un oggetto Date con data e ora attuali.

d.setTime(d.getTime() + 24*60*60*1000);
→ Imposta la scadenza del cookie a 24 ore nel futuro (oggi + 1 giorno).
IMPORTANTE: l'unico modo per cancellare un cookie è anticipare la data di scadenza al giorno precedente

getTime() restituisce i millisecondi correnti.

Si sommano 24*60*60*1000 millisecondi (24 ore).

let expires = "expires=" + d.toUTCString();
→ Converte la data in una stringa compatibile con i cookie (expires) per dire al browser quando deve scadere.

document.cookie = name + "=" + value + ";" + expires + ";path=/";
→ Imposta il cookie nel browser con:

name=value

expires=... → scadenza

path=/ → il cookie è disponibile in tutto il sito

setCookie("dati-locali", "valore-esempio");
→ Chiama la funzione e crea effettivamente il cookie.

console.log("cookies:", document.cookie);
→ Stampa in console tutti i cookie disponibili per il dominio corrente.

*/



// -------------------------------------------------------------------------------
// per la gestione di un solo cookie va bene lo script sopra, 
// mentre per gestire più cookie è necessario l'utilizzo di split e di un ciclo for 
// -------------------------------------------------------------------------------



// ES. GESTIRE I COOKIE

// FUNZIONE PER CREARE UN COOKIE
function setCookie(name, value, days) {
    // definisce una funzione 'setCookie' che prende come parametri:
    // name → nome del cookie
    // value → valore del cookie
    // days → durata del cookie in giorni

    const d = new Date();
    // crea un oggetto Date con la data e l'ora correnti

    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    // aggiunge al timestamp corrente il numero di millisecondi corrispondente a 'days' giorni
    // (1 giorno = 24 ore * 60 minuti * 60 secondi * 1000 millisecondi) 
    // * 1000 millisecondi serve per convertire la scadenza in millisecondi

    const expires = "expires=" + d.toUTCString();
    // expires serve a convertire l’oggetto Date (con la scadenza) in una stringa compatibile con i cookie, 
    // converte la data in formato UTC compatibile con i cookie
    // così il browser può leggerla e sa quando scade il cookie. 
    // genera la stringa da inserire nell'header del cookie: es. "expires=Fri, 13 Sep 2025 12:00:00 GMT"

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    // imposta il cookie nel browser con:
    // name=value → nome e valore
    // expires=... → data di scadenza
    // path=/ → indica al browser in quale percorsi del sito il cookie è accessibile.
    // "/" significa tutte le pagine del sito, dalla root in giù.


    // La "ROOT" in un sito web è la cartella principale del dominio, 
    // cioè il "punto di partenza" da cui partono tutte le altre cartelle e pagine.


    console.log(`Cookie creato: ${name}=${value}`);
    // stampa in console un messaggio che indica che il cookie è stato creato correttamente
}

setCookie("username", "Claudia", 7);
// crea un cookie chiamato "username" con valore "Claudia" valido 7 giorni


// FUNZIONE PER LEGGERE UN COOKIE
function getCookie(name) {
    // definisce una funzione per leggere il valore di un cookie dato il nome

    const cookieArr = document.cookie.split(";");
    // document.cookie RESTITUISCE UNA STRINGA CON CHIAVE-VALORE SEPARATI DA ";"
    // split CREA UN ARREY DI STRINGHE SEPARANDO LA STRINGA DI COOKIE AD OGNI ";"
    // OGNI STRINGA DELL'ARREY CONTIENE UNA CHIAVE COL SUO VALORE

    for (let cookie of cookieArr) {
        // ciclo su ciascun cookie nell'array. "for...of" è una forma speciale di ciclo for introdotta in ES6.
        // Serve a iterare direttamente sui valori di un oggetto iterabile (array, stringa, Map, Set, ecc.).

        cookie = cookie.trim();
        // rimuove eventuali spazi all'inizio o alla fine della stringa del cookie

        if (cookie.startsWith(name + "=")) {
            // verifica se il cookie corrente inizia con "name="
            // se sì, significa che abbiamo trovato il cookie cercato

            const value = cookie.substring(name.length + 1); // è fondamentale per isolare il valore del cookie.
            // estrae il valore del cookie rimuovendo "name=" dalla stringa

            console.log(`Cookie letto: ${name}=${value}`);
            // stampa in console il cookie trovato

            return value;
            // ritorna il valore del cookie alla chiamata della funzione
        }
    }

    console.log(`Cookie ${name} non trovato`);
    // se il cookie non viene trovato, stampa un messaggio di avviso

    return null;
    // ritorna null se il cookie non esiste
}


getCookie("username");
// legge e stampa in console il cookie "username"



// FUNZIONE PER CANCELLARE UN COOKIE
function deleteCookie(name) {
    // definisce una funzione per eliminare un cookie dato il nome

    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // imposta il cookie con valore vuoto e scadenza nel passato
    // il browser cancellerà automaticamente il cookie

    console.log(`Cookie cancellato: ${name}`);
    // stampa in console un messaggio che indica che il cookie è stato eliminato
}

// FUNZIONE PER FAR ELIMINARE I COOKIE QUANDO 'UTENTE FA LOGOUT
function logout() {
    deleteCookie("username"); // cancella il cookie solo quando l'utente fa logout
    console.log("Logout completato");
}

// COLLEGO LA FUNZIONE "LOGOUT" AL PULSANTE LOGOUT CHE CLICCHERÀ L'UTENTE
document.getElementById("btnLogout").addEventListener("click", logout);


