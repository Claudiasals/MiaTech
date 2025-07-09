
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

let outside = 8;
{
    let inside = 9;
    console.log(outside)
    console.log(inside)
}
console.log(outside)
console.log(inside)
/* la stampa di inside dall'esterno non viene eseguita xké inside è definito solo all'interno del blocco*/