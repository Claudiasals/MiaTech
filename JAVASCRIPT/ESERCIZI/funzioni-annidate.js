
function outerFunction(x, initialValue) {
    // outerFunction accetta un parametro x
    // aggiungo paramero initialValue
    let result = initialValue;  
    // memorizza il valore iniziale
    function innerFunction(y) {
        // innerFunction accetta un parametro y
        return result + y;  
        // somma result e y e restituisce il risultato
    }
    return innerFunction;  
    // outerFunction restituisce innerFunction
}

// cunter: metodi increment e decrement

function createCounter () {
    //Definiamo una funzione chiamata createCounter
    //che serve per creare un nuovo contatore
  
    let count = 0;
    //Questa è la var locale che tiene traccia del valore attuale del contatore
    //Inizia da 0 e NON è accessibile da fuori
  
    return {
      //Funzione per restituire con i due metodi
  
      increment: function() {
        //Metodo chiamato "increment" che aumenta count di 1
        count++;           
        return count;       
        //restituisce il nuovo valore
      },
  
      decrement: function() {
        //Metodo chiamato "decrement" che diminuisce count di 1
        count--;           
        return count;       
        //restituisce il nuovo valore
      }
    };
  }
