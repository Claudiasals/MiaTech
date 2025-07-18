
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

//ES. CREA OGGETTO PERSON

const person = {
  name: "Lidia",
  age: 25,
  city: "Torre Ovo"
};
console.log(person);