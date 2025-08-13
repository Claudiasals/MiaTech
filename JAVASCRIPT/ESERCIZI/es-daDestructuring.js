//Creo un array di numeri
const arrayDiNumeri = [1, 3, 45, 6, 54, 87, 12];

/*Uso il destructuring ([]=nome array o {}= nome obj) 
per prendere i primi due elementi */
const [primo, , cacio] = arrayDiNumeri;
/* per saltare un elemento dell'array con il destructuring basta
lasciare lo spazio vuoto e separarlo con una virgola dagli altri elementi. 
Questo non serve quando si tratta di oggetti perché le proprietà vengono 
estratte semplicemente indicandole con il loro nome */

/* con il destructuring js crea già le variabili che inserisci 
nella parentesi quadra, in questo caso la variabile primo e la variabile secondo, e la variabile cacio
che prenderanno rispettivamente il primo, il secondo e il terzo numero dell' array
*/

// 3. Stampo le variabili nella console
console.log(primo);   // 1

console.log(cacio) // 45

/* Il destructuring è una sintassi di JavaScript che ti 
permette di “spacchettare” valori da array o oggetti 
(e in realtà anche da altre strutture iterabili) 
direttamente in variabili. 
Nel caso degli oggetti non conta l'ordine elle prprietà, 
quindi il nome della variabile deve corrispondere 
al nome delle proprietà */

console.log(primo);
console.log(cacio);


//array 4 elementi
let arreyFor = [1, 22, 3, 44];
/* per estrarre un quinto elemento inesistente nell'array 
fifth = 5 */
let [first, second, third, fourth, fifth = 5] = arreyFor;

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
console.log(fifth)

let person = {
    name: "Jeff",
    age: 45,
    surname: "Potter"
};

console.log(person);

let {name, surname} = person;

console.log(name); //Jeff xke viene sbarrato name?
console.log(surname); //Potter

let grades = {
math: 28,
english: 20,
psychology: 30,
statistics: 28
};

/*
let {english, psychology} = grades;
console.log(english);
console.log(psychology); */

/* es: Destructuring con nomi di variabili diversi
Modificare l'esercizio precedente per assegnare i 
valori delle proprietà a variabili con nomi diversi. 
Stampare queste variabili nella console. */

let {
    english: englishGrade, 
    psychology: psychologyGrade
} = grades;

console.log(englishGrade);
console.log(psychologyGrade);