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

/* ERRORE RETURN CATCH FUORI DALLA FUNZIONE
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

*/

//CORREZIONE TRY E CATCH
function divisione(a, b) { //creo funzione divisione
  try {
    if (b === 0) {
      throw new Error("Impossibile dividere per zero"); //errore se divisore è zero
    }
    let risultato = a / b;
    console.log("Risultato:", risultato); //stampo risultato
    return risultato;
  } catch (error) { //messggio di errore con catch se /0
    console.error("Errore controllato:", error.message);
  }
}
divisione(10, 2);  
divisione(8, 0);
divisione(4, 2); 

//ES. GESTIONE DI PIù ERRORI
/* Gestione di più tipi di errori:
Creare uno script che utilizzi un blocco try per eseguire un'operazione su una stringa 
e gestisca diversi tipi di errori (ad esempio, un errore di tipo e un errore generico). 
Stampare un messaggio di errore appropriato nella console. */

const LettereMinuscole = (string) => {
  try {
    if (string === "") {
      throw new Error("La stringa non può essere vuota"); // ERRORE GENERICO
    } //NON CHIARISSIMO TROW
    // Operazione su una stringa: trasformo la stringa in maiuscolo
    let lettereMaiuscole = string.toUpperCase(); 
    /*Se il valore non è una stringa JS non trova il metodo toUpperCase() e genera un errore.*/
    console.log("Risultato:", lettereMaiuscole);
  } catch (error) {
    console.error("Errore:", error.message); 
    //error.message è una PROPRIETA' dell’oggetto errore che contiene il messaggio dell’errore generato da JavaScript.
  }
};

LettereMinuscole("ciao");   // js esegue CIAO
LettereMinuscole(123);    //ERRORE DI TIPO
// js trova errore perché non ha le virgolette e quindi non è una stringa.
LettereMinuscole("");  //ERRORE GENERICO: stringa vuota



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






  //FINALLY
/* Finally è un blocco che Ppossiamo aggiungere a try/catch. 
La sua particolarità è che viene eseguito sempre, 
indipendentemente dal fatto che ci sia stato un errore o meno.

try {
  // codice che potrebbe generare un errore, il codice "a rischio" che potrebbe fallire.
  Serve ad interrompe l’esecuzione della funzione nel punto in cui si trova
} catch (error) {
  // codice che gestisce l'errore
} finally {
  // codice che DEVE ESSERE ESEGUITO COMUNQUE SEMPRE, anche se c'è stato un errore.
  Può servire per pulire risorse(?), stampare un messaggio di conferma, o altre operazioni obbligatorie(?).
}   
*/

  function division(a, b) {
    try {
      if (b === 0) {
        throw new Error("Impossibile dividere per zero"); // errore generico
      }
      let result = a / b;
      console.log("Risultato:", result); // stampa se va tutto bene
      return result;
    } catch (error) {
      console.error("Errore:", error.message); // gestisce l'errore
    } finally {
      console.log("Operazione completata"); // eseguito sempre
    }
  }
  

  division(10, 2); // Risultato: 5, Operazione completata
  division(8, 0);  // Errore, Operazione completata


