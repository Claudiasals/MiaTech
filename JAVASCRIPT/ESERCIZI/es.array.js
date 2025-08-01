
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


// con ARROW FUNCTION
// FOREACH E MAP

/* forEach — per fare qualcosa con ogni elemento, è un metodo degli array in JavaScript.
Serve per eseguire una funzione su ogni elemento dell’array. */
/* map —  è un metodo degli array per trasformare e creare un nuovo array.
Serve per trasformare ogni elemento dell’array in un nuovo valore. Restituisce un nuovo array. */

let numbers = [1, 2, 3, 4, 5];
numbers.forEach (value) => {  
  
 return value * 2;

 console.log(value * 2); 
};

let squaredNumbers = numbers.map (value) => { 
  return value * value; 
};

console.log(squaredNumbers);
// Stampa un nuovo array: [1, 4, 9, 16, 25]


// corretto da chat gpt

let numbers = [1, 2, 3, 4, 5];

// Con forEach e arrow function
numbers.forEach((value) => {
  console.log(value * 2); // Stampa: 2, 4, 6, 8, 10
});

// Con map e arrow function
let squaredNumbers = numbers.map(value => value * value);

console.log(squaredNumbers); // Stampa: [1, 4, 9, 16, 25]




// FILTER & FIND

/* Callback
È una funzione che passi come argomento a un'altra funzione.
Viene chiamata (eseguita) all'interno di quella funzione più grande. */


let students = [
  { name: "Sofia", grade: "degree" },
  { name: "Greta", grade: "degree" },
  { name: "Jenny", grade: "degree" },
];


// filter serve per ottenere solo gli studenti con grade >= 60
let passedStudents = students.filter(function (student) {
  return student.grade >= 60;
  /* .filter(...) restituisce un nuovo array con tutti 
  gli studenti che rispettano la condizione (grade >= 60). */
  /* student è il nome scelto per il parametro temporaneo 
  che rappresenta ogni oggetto dell'array durante il ciclo. */

  // find serve per trovare il primo studente dell'array con grade < 60
  let failedStudent = students.find(function (student) {
    return student.grade < 60;
    /* .find(...) restituisce solo il primo studente dell'array
    che rispetta la condizione (grade < 60). */

    console.log("Studenti promossi:", passedStudents);
    console.log("Primo studente bocciato:", failedStudent);




// REDUCE & SORT

let expenses = [123, 45, 67, 4, 87, 90];

const sum = expenses.reduce (function() (value)) {
 return = i++; i >= 5; 
 console.log ()
}

let words = [ "banana", "apple", "cherry", "date"];

const sum = expenses.sort (function() (value)) {
  return = 
  console.log ()
 }



 // Array di numeri che rappresentano spese
const expenses = [50, 20, 30, 10, 40];

// Uso reduce per sommare tutte le spese
const totalExpenses = expenses.reduce(function(accumulatore, valoreCorrente) {
  return accumulatore + valoreCorrente; // Sommo il valore corrente all'accumulatore
}, 0); // 0 è il valore iniziale dell'accumulatore

// Array di parole da ordinare
const words = ["banana", "apple", "cherry", "date"];

// Uso sort per ordinare l'array in ordine alfabetico
words.sort(); // Ordina direttamente l'array words

// Stampo la somma totale delle spese
console.log("Somma totale spese:", totalExpenses);

// Stampo l'array ordinato
console.log("Array ordinato:", words);
