//ES. CHAIN PROMISE

// Funzione che restituisce una Promise con un numero dopo 1 secondo
function numeroCasuale() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5); // ad esempio il numero 5
        }, 1000);
    });
}
/*
La Promise di numeroCasuale() viene risolta con il valore 5 tramite resolve(5).
Il primo .then((num) => {...}) riceve automaticamente il valore passato a resolve.
Quindi num = 5 dentro la funzione del .then().
*/
// Catena di promesse
numeroCasuale()
    .then((num) => {
        return num * 2; // primo then: moltiplica per 2
    })
    .then((numMoltiplicato) => {
        return numMoltiplicato + 3; // secondo then: aggiunge 3
    })
    .then((risultatoFinale) => {
        console.log("Risultato finale:", risultatoFinale); // stampa risultato
    })
    .catch((errore) => {
        console.error("Errore:", errore);
    });


// PROVA 2

function casualN() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let numero = (Math.floor(Math.random() * 10)); 
            resolve(numero);
        }, 1000);
    });
}

casualN()
.then((numero) => {
    if (numero % 2 === 0) { //pari
console.log("Il numero è pari?", numero);
return numero;
    }
}
)

.then((numero) => {
    if (numero % 2 !== 0){ //dispari
        console.log("Il numero è disprari?", numero); 
    } 
});

/*
1. casualN() → restituisce una Promise che si risolve dopo 1 secondo con un numero casuale.
2. Il primo .then riceve quel numero come argomento:
  - se ritorni qualcosa (return numero;) → il valore diventa l’input per il prossimo .then.
  - se ritorni una nuova Promise → la catena aspetta che anche quella venga risolta.
3. Il secondo .then riceve il valore restituito dal primo.
4. E così via: è come una catena che si passa il risultato, uno alla volta.
*/