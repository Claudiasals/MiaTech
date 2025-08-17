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
