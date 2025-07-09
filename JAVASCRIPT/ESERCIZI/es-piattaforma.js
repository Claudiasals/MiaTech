
//ESERCIZIO 1

const età = 8;
let giorno = "mercoledì";
console.log(età, giorno);

//ESERCIZIO 2
let frutta = "banana";
console.log(frutta);
frutta = "fragola";
console.log(frutta);

//ESERCIZIO 3
let number = 12;
{
    let number = 4;
    console.log(number);
}
console.log(number);

/*Sono due entità differenti*/

//ESERCIZIO 4
let outside = 8;
{
    let inside = 9;
    console.log(outside)
    console.log(inside)
}

/* la stampa di inside dall'esterno non viene eseguita 
xké inside è definito solo all'interno del blocco*/

//ESERCIZIO 5
const evenNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (let i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] % 2 === 0) { /* Se il numero in posizione i è pari, 
        allora esegui il codice dentro le parentesi { ... }, 
        in qst caso il console.log, quindi stampa */
    
      console.log(evenNumbers[i]);
}
}
