
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