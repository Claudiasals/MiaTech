//SINTASSI BASE
fetch("https://miosito.com/risorse?parametro=valore")
    .then(response => response.json())  // converte la risposta in JSON
    .then(data => {
        console.log("Dati ricevuti:", data); // usa i dati ricevuti
    })
    .catch(error => console.error("Errore:", error)); // gestisce eventuali errori

/*
Spiegazione:
fetch(url) → invia la richiesta GET all’URL specificato (di default GET).
response.json() → legge i dati inviati dal server in formato JSON.
.then() → gestisce la Promise quando arriva il risultato.
.catch() → cattura eventuali errori (es. server non raggiungibile).
*/
