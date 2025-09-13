// TECNICA DEI COOCKIE PER GESTIRE IL LOCAL STORAGE: --> TECNICA IN DISUSO! <--

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000); // aggiunge 24 ore in millisecondi
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