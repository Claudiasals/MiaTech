
//ES ARRAY REVERSE con ciclo FOR
let numbersArr = [3, 4, 56, 5, 78, 3];

for (let i = numbersArr.length - 1; i >= 0; i--) {
  console.log(numbersArr[i]);
}
/* 
ciclo for con dentro una variabile per dargli le indicazioni: 
- i = numbersArr.leght-1 : i (cioè l'indice da cui deve partire 
il ciclo) è pari al numero della lunghezza del ciclo for - 1, 
in questo modo se l'array è lungo 6 , partirà dalla posizione nuero 5,
potevo scrivere anche direttamente 6 ma per renderlo universale si 
prende in considerazione la lunghezza dell'array in generale.
- i >= 0 : gli do la condizione di continuazione: ovvero gli dico di 
proseguire finché i è maggiore o uguale a 0.
- i-- : che significa che ad ogni ciclo deve andare dietro di 1, 
*/




//ES. ARRAY PROMPT 5 PAROLE
let fivewords = [];
for (let i = 0; i < 5; i++) {
  let word = prompt("inserisci una parola");
  fivewords.push(word); /* push: per far aggiungere le parole nell'array*/
}
console.log(fivewords);

for (let i = 0; i < fivewords.length; i++) {
  if (fivewords[i].length % 2 !== 0) {
    // controllo se la lunghezza è dispari
    console.log(fivewords[i]);
    // stampo la parola se ha lunghezza dispari
  }
}
// fivewords[i].length: ogni richiamo è la i (posizione) successiva, quindi 
// con questa dicitura contiamo le lettere della parola alla posiz. corrente
// % 2 !== 0 significa che se il resto della div x 2 non è 0 allora è dispari





//ES. CREA OGGETTO PERSON

const person = {
  name: "Lidia",
  age: 25,
  city: "Torre Ovo"
};
console.log(person);

console.log(person.age);

person.age = 26;
console.log(person.age);

person.job = "consulente";
console.log(person.job);






// FOREACH E MAP

/* forEach — per fare qualcosa con ogni elemento, è un metodo degli array in JavaScript.
Serve per eseguire una funzione su ogni elemento dell’array. */
/* map —  è un metodo degli array per trasformare e creare un nuovo array.
Serve per trasformare ogni elemento dell’array in un nuovo valore. Restituisce un nuovo array. */

let numbers = [1, 2, 3, 4, 5];
// Uso forEach per moltiplicare ogni numero per 2 ( nomevariabile.forEach(...) ) 
numbers.forEach(function (value) { /* "value" è il nome che do al parametro, 
  si riferisce all'elemento dell'array, ad ogni giro passerà all'elemento successivo
  scorrendoli tutti. Scrivo una funzione anonima solo per dare le istruzioni */
  console.log(value * 2); // Stampa il risultato dell'elemento x 2: 2, 4, 6, 8, 10
});

// Uso map per creare un nuovo array con i quadrati dei numeri ( nomevariabile.map(...) )
let squaredNumbers = numbers.map(function (value) { /* Scrivo una funzione anonima solo per 
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







