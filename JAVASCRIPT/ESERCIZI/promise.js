let attendiCaricamento = new Promise(function (myResolve, myReject) {
    let ok = false;

    // operazioni che richiedono tempi incerti di elaborazione
    if (ok) {
        myResolve("Caricato con successo");
    } else {
        myReject("Caricamento fallito");
    }
});

// utilizzo la promise
attendiCaricamento.then(
    function (risultato) {
        console.log(risultato);
    },
    function (errore) {
        console.error(errore);
    }
);


//oppure metodo compatto con arrow function
attendiCaricamento.then(
    risultato => console.log(risultato),
    errore => console.error(errore)
);


//aggiungo catch
attendiCaricamento
    .then(risultato => {
        console.log(risultato);
    })
    .catch(errore => {
        console.error("Errore:", errore);
    });




//ES.FINALLY

function finallyPromise() {
    return new Promise((resolve, reject) => {
        let successo = true;
        if (successo) {
            resolve("Resolve");
        } else {
            reject("Reject");
        }
    });
}

// Utilizzo della promessa con finally
finallyPromise()
    .then(risultato => {
        console.log(risultato);
    })
    .catch(errore => {
        console.error(errore);
    })
    .finally(() => {
        console.log("Finally: questa azione viene eseguita sempre, indipendentemente dal risultato");
    });



//ES. CATENA DI PROMESSE

// Funzione che restituisce una promessa che si risolve dopo 1 secondo con un numero
function getNumber() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(5); // restituisce 5 dopo 1 secondo
      }, 1000);
    });
  }
  
  // Catena di promesse
  getNumber()
    .then(function(num) {
      return num * 2; // prendi il valore e moltiplica per 2
    })
    .then(function(num) {
      return num + 3; // prendi il valore e aggiungi 3
    })
    .then(function(result) {
      console.log("Risultato finale:", result); 
    });
