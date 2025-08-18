//es. try - catch

try {
  errorFunction(); // funzione inesistente per generare un errore
} catch (error) {
  console.error("Errore controllato:", error.message);
}

//es. errore semplice con try e catch
/* Gestione di un errore semplice:
Creare uno script che utilizzi un blocco try per eseguire una divisione 
e un blocco catch per gestire un errore se il divisore è zero. 
Stampare un messaggio di errore nella console se viene sollevata un'eccezione. */

  try {
    function divisione(a, b) {

      return a / b;
    }
  } catch (error) {
    if (b === 0) {
      return "Errore: impossibile dividere per zero!";
    }
    console.error("Errore controllato:", error.message);
  }

divisione(10, 2);  // Risultato: 5
divisione(8, 0);   // Errore controllato: Impossibile dividere per zero!





//es. error e warn
function sum (a, b) {
    return a + b;
}
let numbers = sum(8, 6);
console.log(numbers);


if (numbers !== 14) {
    
console.error ("Errore") //errore xke il risultato non è 14

} else if (isNaN(numbers)) { // senon è un numero
    console.warn("Attenzione: puoi inserire solo numeri."); 
  } 

  //es. console.table

  let persone = [
    { nome: "Anna", eta: 25, città: "Milano" },
    { nome: "Luca", eta: 30, città: "Roma" },
    { nome: "Piero", eta: 68, città: "Torino" }
];

console.table(persone); 

//console.group
console.group("Messaggi di debug");
console.log("Primo messaggio dentro al gruppo");
console.log("Secondo messaggio dentro al gruppo");
console.groupEnd();

//es.settimeout
//Creo una funzione che stampa il messaggio
function messaggioRitardato() {
    console.log("Questo messaggio appare dopo 3 secondi");
  }
  
  //Uso setTimeout per eseguire la funzione dopo 3 secondi
  setTimeout(messaggioRitardato, 3000); //3000 millisecndi



  //es. setIntervallar
  // Creo la funzione che contiene il messaggio
function messaggio() {
    console.log("Questo messaggio appare ogni 2 secondi");
}

//setInterval chiama la funzione ogni 2 secondi
let intervallo = setInterval(messaggio, 2000);


//es. clearIntervallar
// Uso setTimeout per fermare l'intervallo dopo 5 secondi (5000 ms)
setTimeout(function() {
    clearInterval(intervallo);
    console.log("Intervallo interrotto dopo 5 secondi");
  }, 5000);