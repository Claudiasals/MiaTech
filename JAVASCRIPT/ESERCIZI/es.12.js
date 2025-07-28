//ESERCIZIO 12
//Switch - Verifica il punteggio
/*
let number = parseInt(prompt("scrivi un numero:"));
switch (true) {
    case number <= 100 && number >= 90:
        console.log("voto ottimo");
        break; //per farlo fermare quando non trova una corrispondenza

    case number <= 89 && number >= 70:
        console.log("voto buono");
        break;

    case number <= 69 && number >= 60:
        console.log("voto sufficiente");
        break;

    case
        number <= 59:
        console.log("voto insufficiente");
        break;
    default:
        console.log("Numero non valido")
}
*/

//ES array somma di numeri
let numberArr = [3, 4, 56, 5, 78, 3];
let sum = 0; //var con valore iniziale 0, inizia a 0 perché non abbiamo ancora sommato niente. 
//Che terrà il conto, sevre a salvare la somma totale degli array.
for (let i = 0; i < numberArr.length; i++) {
    /* inizializziamo la var i alla pozizione 0; 
    poi diciamo a i di continuare finché è più piccolo 
    della lumghezza totale dell'array, ovvero 6;
    i++ indica come aunentano ad ogni ciclo, ovvero ad ogni 
    ciclo aumentano di 1, cioè passimo al numero successivo; 
    Dopo il 6° giro, i diventa 6, ma numberArr.length è 6,quindi 
    la condizione i < 6 non è più vera, e il ciclo si ferma.*/
    sum = sum + numberArr[i]; /* aggiungi ogni valore a sum; significa:
    ➕ prendi il numero che c’è in numberArr[i],
    ➕ aggiungilo a sum,
    ➕ e salva il risultato dentro sum di nuovo. */
}
console.log(sum);

 // FOREACH E MAP

    /* forEach — per fare qualcosa con ogni elemento, è un metodo degli array in JavaScript.
    Serve per eseguire una funzione su ogni elemento dell’array. */
/* map —  è un metodo degli array per trasformare e creare un nuovo array.
Serve per trasformare ogni elemento dell’array in un nuovo valore. Restituisce un nuovo array. */

let numbers = [1, 2, 3, 4, 5];
// Uso forEach per moltiplicare ogni numero per 2 ( nomevariabile.forEach(...) ) 
numbers.forEach(function(value) { /* "value" è il nome che do al parametro, 
  si riferisce all'elemento dell'array, ad ogni giro passerà all'elemento successivo
  scorrendoli tutti. Scrivo una funzione anonima solo per dare le istruzioni */
  console.log(value * 2); // Stampa il risultato dell'elemento x 2: 2, 4, 6, 8, 10
});

// Uso map per creare un nuovo array con i quadrati dei numeri ( nomevariabile.map(...) )
let squaredNumbers = numbers.map(function(value) { /* Scrivo una funzione anonima solo per 
  dare le istruzioni su come modificare l'array*/
  return value * value; // gli diciamo di rimandarci il quadrato di ogni numero
});

console.log(squaredNumbers); 
// Stampa un nuovo array: [1, 4, 9, 16, 25]

/* In questi casi non serve richiamare la funzion, 
perché la funzione passata a map viene eseguita da map per ogni elemento dell’array.
Quindi, anche se non la chiami esplicitamente, 
la funzione viene “eseguita” da map perché è passata come argomento.
"Passata come argomento" significa che una funzione viene data in input 
a un'altra funzione, come se fosse un valore o una variabile.
In questo caso "forEach" e "map" ricevono in input la funzione anonima: (function(value) { console.log(value); }) */