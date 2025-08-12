//Creo un array di numeri
const arrayDiNumeri = [1, 3, 45, 6, 54, 87, 12];

//Uso il destructuring per prendere i primi due elementi
const [primo, secondo, cacio] = arrayDiNumeri;

/* con il destructuring js crea già le variabili che inserisci 
nella parentesi quadra, in questo caso la variabile primo e la variabile secondo, e la variabile cacio
che prenderanno rispettivamente il primo, il secondo e il terzo numero dell' array
*/
// 3. Stampo le variabili nella console
console.log(primo);   // 1
console.log(secondo); // 3
console.log(cacio) // 45