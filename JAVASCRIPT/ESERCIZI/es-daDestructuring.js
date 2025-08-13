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
/*
let person = {
    name: "Jeff",
    age: 45,
    surname: "Potter"
};

console.log(person);

let { name, surname } = person;

console.log(name); //Jeff xke viene sbarrato name?
console.log(surname); //Potter
*/

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
/*
let animals = {
    species: "dog",
    food: "kibble",
    toy: "ball"
};

let { species, food, toy, age = 6 } = animals;

console.log(species);
console.log(food);
console.log(toy);
console.log(age);

*/

// ES. SPREAD OPERATOR

const numbers = [6, 45, 3, 78, 8, 2, 34, 1];
// Utilizzo lo spread operator per creare una copia (...nomeArrey da copiare)
let copiedNumbers = [...numbers];
//aggiungo un elemento con .push
numbers.push(88);

console.log(numbers);
console.log(copiedNumbers);

//ES. UNIRE DUE ARREY CON SPREAD OPERATOR

const numbersOne = [6, 45, 3, 78, 8, 2, 34, 1];
const numbersTwo = [16, 5, 13, 8, 18, 12, 4, 11];

let sumArray = [...numbersOne, ...numbersTwo];

console.log(sumArray);

//ES. OBJ SPREAD OPERATOR X COPIA + ADD
let dog = {
    name: "Bob",
    age: 4,
    toy: "ball",
    food: "kibble"
};

let copyDog = {...dog};
copyDog.color = "brown"; /* con gli oggetti non si utilizza 
.push per aggiungere un nuovo elemento, ma nomeObj.nuovaProprietà */

console.log(dog);
console.log(copyDog);


//ES. FUNZIONE REST OPERATOR (...) X SOMMA ARGOMENTI
/* Il rest operator (...) raccoglie un numero 
variabile di argomenti in un array. */

function sumArrayArguments(...numbers) { //creo funzione con rest (...)
return numbers.reduce((x, y) => x + y, 0); //sintassi reduce
};
/*Il metodo .reduce() "riduce" un array a un unico valore, 
eseguendo una funzione su ogni elemento e accumulando 
un risultato finale. */
console.log(sumArrayArguments(1, 2, 3));
console.log(sumArrayArguments(1,2,3,4,5,6));


//ES. DESTRUCTURING ARRAY 
/*
let value = [3, 64, 5, 78, 4];
//destructuring
let [pri, sec] = value; //non funziona se inserisco numeri al posto di lettere
console.log(value);
console.log(pri); 
console.log(sec);
console.log(pri + sec);

*/
//ES. DESTRUCTURING ARRAY CON REST OPERATOR

let value = [13, 4, 15, 8, 14];
//destructuring + rest
let [pri, sec, ...rest] = value; /*... è la sintassi di rest, 
ho scritto rest dopo i puntini ma può chiamarsi ome vogliamo 
qst var.   (...rest = tutti gli altri elementi restanti, 
raccolti in un nuovo array). */
console.log(value);
console.log(pri); 
console.log(sec);
console.log(pri + sec);


//ES. DESTRUCTURING OBJ CON REST OPERATOR

let account = {
    id: "claude",
    birth: 1991,
    email: "claude@gmail.com",
    tel: 3920339229
};

let {id, birth, ...theRest} = account;
console.log(id);
console.log(birth);
console.log(theRest);


//ES. CONVERTI OBJ IN STRINGA JSON CON JSON.stringify()
let jsonString = JSON.stringify(account);
// UTILIZZO L'OBJ ACCOUNT ^
console.log(jsonString);
/* ho creato una nuova variabile che si chiama jsonString 
che con il comando JSON.stringify(nomeObj) trasforma
l'obj in una stringa JSON */

//ES. STRINGA JSON in OBJ con JSON.parse
let json = '{"model": "Iphone", "display":12, "price": 600, "connectivity":"5g"}';

let jsonObj = JSON.parse(json);

console.log(jsonObj)