let attendiCaricamento = new Promise(function (myResolve, myReject) {
    let ok = true;

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


