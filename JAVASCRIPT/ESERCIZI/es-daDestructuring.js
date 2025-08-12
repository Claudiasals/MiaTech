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
console.log(secondo); // 3
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