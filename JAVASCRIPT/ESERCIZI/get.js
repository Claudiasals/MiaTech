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



// ES. RICHIESTA GET SEMPLICE
fetch ("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) //then dice: appena hai risolto la promise fetch, 
    // ovvero hai preso i dati dall'api, esegui la funzione che ti scrivo qui, 
    // ovvero response.json, che ci permette di prendere la promise che ci restituisce fetch 
    // e trasformarla in dati json
    .then(data => console.log(data)) //altro then che dice, appena hai eseguito la promise di prima (ovvero: response.json(),
    // e quindi abbiamo ottenuto i dati effettivi che saranno contenuti in automatico nel parametro "data" 
    // di questo then) stampa questi dati.
    .catch(err => console.error(err)) // creimao una funzione "err" che trova errori nella richiesta e
/* stamperà prima un messaggio in rosso che dipende dal tipo di errore reale 
che si verifica come risultato della funzione err
e l’errore reale generato dalla Promise o dal browser: 
Network Error → il browser non riesce a raggiungere l’URL, es. server offline o URL inesistente.
Errori generati nel .then → ad esempio se scrivi data.users.map(...) e data.users non esiste.
Errore di parsing JSON → se chiami .json() su qualcosa che non è JSON valido.
In tutti questi casi, .catch(err => ...) viene chiamato automaticamente, 
e err contiene l’oggetto errore reale. */




// GESTIONE DEGLI ERRORI CON ASYNC E AWAIT
// Creare una funzione asincrona che utilizzi fetch per eseguire una richiesta GET 
// a un'API pubblica e gestire eventuali errori utilizzando try e catch. 
// Stampare i dati restituiti o il messaggio di errore nella console.

