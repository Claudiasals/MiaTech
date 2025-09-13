// TECNICA DEI COOCKIE PER GESTIRE IL LOCAL STORAGE: --> TECNICA IN DISUSO! <--

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000); // imposta una durata di 24 ore in millisecondi
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


// ES. GESTIRE I COOKIE

// FUNZIONE PER CREARE UN COOKIE
function setCookie(name, value, days) { 
    // definisce una funzione 'setCookie' che prende come parametri:
    // name → nome del cookie
    // value → valore del cookie
    // days → durata del cookie in giorni

    const d = new Date(); 
    // crea un oggetto Date con la data e l'ora correnti

    d.setTime(d.getTime() + (days*24*60*60*1000)); 
    // aggiunge al timestamp corrente il numero di millisecondi corrispondente a 'days' giorni
    // (1 giorno = 24 ore * 60 minuti * 60 secondi * 1000 millisecondi) 
    // * 1000 millisecondi serve per convertire la scadenza in millisecondi

    const expires = "expires=" + d.toUTCString(); 
    // converte la data in formato UTC compatibile con i cookie
    // genera la stringa da inserire nell'header del cookie: es. "expires=Fri, 13 Sep 2025 12:00:00 GMT"

    document.cookie = name + "=" + value + ";" + expires + ";path=/"; 
    // imposta il cookie nel browser con:
    // name=value → nome e valore
    // expires=... → data di scadenza
    // path=/ → il cookie è valido in tutte le pagine del sito

    console.log(`Cookie creato: ${name}=${value}`); 
    // stampa in console un messaggio che indica che il cookie è stato creato correttamente
}

setCookie("username", "Claudia", 7);  
// crea un cookie chiamato "username" con valore "Claudia" valido 7 giorni


// FUNZIONE PER LEGGERE UN COOKIE
function getCookie(name) { 
    // definisce una funzione per leggere il valore di un cookie dato il nome

    const cookieArr = document.cookie.split(";"); 
    // prende tutti i cookie disponibili come stringa
    // e li divide in un array usando il separatore ';'

    for(let cookie of cookieArr) { 
        // ciclo su ciascun cookie nell'array

        cookie = cookie.trim(); 
        // rimuove eventuali spazi all'inizio o alla fine della stringa del cookie

        if (cookie.startsWith(name + "=")) { 
            // verifica se il cookie corrente inizia con "name="
            // se sì, significa che abbiamo trovato il cookie cercato

            const value = cookie.substring(name.length + 1); 
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

deleteCookie("username");              
// elimina il cookie "username"





