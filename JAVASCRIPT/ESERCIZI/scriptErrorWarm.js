function sum (a, b) {
    return a + b;
}
let numbers = sum(8, 6);
console.log(numbers);


if (numbers !== 14) {
    
console.error ("Errore") //errore xke il risultato non è 14

} else if (isNaN(numbers)) { // senon è un numero
    console.warn("Attenzione: puoi inserire solo numeri."); 
  } 

  //es. console.table

  let persone = [
    { nome: "Anna", eta: 25, città: "Milano" },
    { nome: "Luca", eta: 30, città: "Roma" },
    { nome: "Piero", eta: 68, città: "Torino" }
];

console.table(persone); 

//console.group
console.group("Messaggi di debug");
console.log("Primo messaggio dentro al gruppo");
console.log("Secondo messaggio dentro al gruppo");
console.groupEnd();