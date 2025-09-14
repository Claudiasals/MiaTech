//SINTASSI BASE 
fetch("https://jsonplaceholder.typicode.com/posts", {
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

const elementDate = document.getElementById("result");

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
.then(posts => {
    console.log(posts);
    elementDate.innerText = JSON.stringify(posts, null, 2);
    //JSON.stringify Serve perché posts è un oggetto JavaScript, e per scriverlo come testo in pagina deve diventare stringa.
/*
I parametri di JSON.stringify:
posts → l’oggetto da trasformare in stringa.
null → è il parametro replacer, che serve se vuoi filtrare alcune proprietà. Qui non vogliamo filtrarle, quindi mettiamo null.
2 → indica il numero di spazi per l’indentazione. Serve solo per rendere la stringa leggibile, con rientri e a capo.
*/
})

.catch(errore => console.log(errore)) 

