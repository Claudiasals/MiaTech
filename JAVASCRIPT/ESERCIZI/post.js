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



// ES. RICHIESTA POST
// Eseguire una richiesta POST
// Creare una funzione che utilizzi fetch per eseguire una richiesta POST a un'API pubblica, 
// inviando alcuni dati nel corpo della richiesta, e stampare i dati restituiti nella console.

//richiesta post
fetch ("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome: "Claudia",
        cognome: "Salsini",
        età: 34
    })
})



.then(response => response.json()) //trasformo la risposta di fetch (una promise) in dati json
.then(posts => console.log(posts))
.catch(errore => console.log(errore)) 