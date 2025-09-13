
// ES. Comprendere un errore CORS
/* Crea uno script che tenti di fare una fetch all'API http://example.com 
Apri la console e vedi l'errore CORS. 
Cerca di capire come mai facendo ricerche online. */

function cors() {
    fetch("http://example.com") 
    .then(response => response.json())
    .then(data => console.log("DATI RICEVUTI:", data))
    .catch(error => console.error("Errore", error));
    }
    
    cors();

    /*
    PROBLEMA: non posso leggere con fetch i dati di un server che non abilita CORS.

    Il server deve abilitare CORS aggiungendo un header di risposta come:
    
    Access-Control-Allow-Origin: *

    oppure con:  Access-Control-Allow-Origin: http://127.0.0.1:5502

    Non è possibile rimuovere questo problema dal lato front-end.
    */