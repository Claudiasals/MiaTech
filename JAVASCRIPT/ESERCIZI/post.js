//SINTASSI BASE 
fetch("https://miosito.com/risorse", {
    method: "POST",                     // tipo di richiesta
    headers: {
        "Content-Type": "application/json" // tipo di dati inviati
    },
    body: JSON.stringify({               // dati da inviare
        nome: "Claudia",
        email: "claudia@email.com"
    })
})
.then(response => response.json())      // converte la risposta in JSON
.then(data => console.log("Risposta server:", data))
.catch(error => console.error("Errore:", error));

/*
Spiegazione:
method: "POST" → indica che vogliamo inviare dati al server.
headers → comunica il formato dei dati (qui JSON).
body → il contenuto da inviare, convertito in stringa JSON.
.then() e .catch() funzionano come per GET.
*/

