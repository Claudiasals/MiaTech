
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
const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] % 2 === 0) { /* Se il numero in posizione i è pari, 
        allora esegui il codice dentro le parentesi { ... }, 
        in qst caso il console.log, quindi stampa.
        %2 === 0 significa che il numero è divisibile per 2 con resto di 0.
        riga++ significa che il valore si adrà a sommare all'attuale totale ad ogni ciclo. */

        console.log(evenNumbers[i]);
    }
}

//ESERCIZIO 5 ALTRE PROVE


for (let even = 0; even < 20; even++) {
    /* for (inizio; condizione; aggiornamento):
    inizia dal valore con indice 0, 
    prosegue fino al valore con indice inferiore a 20 quindi 19, 
    aggiorna ad ogni ciclo, "++" sarebbe l'abbreviazione di "even + 1",
    dunque ad ogni giro/ciclo va avanti di 1 ciclo */
    if (even % 2 === 0) {
        console.log(even);

    }
}

for (let even = 0; even < 20; even += 2) {
    console.log(even)
}
   
/* even parte da 0 quindi aggiungendo ogni volta 2 (even += 2) 
avremo tutti i numeri pari fino a 10 (fino al nono indice) */


for 

//ESERCIZIO 6 

//numeri dispari fino al 10
let odd = 1

while(odd <9) {
    odd += 2;
    console.log(odd);

}

// numeri dispari da 10 a 0
let oddd = 11

while(oddd > 1) {
    oddd -= 2;  /* decrementa di 2 ogni giro */    
    console.log(oddd);

}

let start = 10;

while (start > 0) {
  if (start % 2 !== 0) {
    console.log(start);
  }

  start--
}


//ESERCIZIO 7 e 8
let word = prompt ("inserisci una parola");
console.log(word.length)


let wordd = prompt ("inserisci una parola");
for (let i = 0; i < 3; i++)/* parte da 0 e arriva a 3 cicli-perché me lo chiede due volte? */
console.log(wordd.length)

/* i++	incrementa di 1
i--	decrementa di 1
i += 2	incrementa di 2
i = i + 5	incrementa di 5 */

//ESERCIZIO 9
let wordLetters = prompt ("inserisci una parola di 5 lettere").trim();
while (wordLetters.length < 5){
    wordLetters = prompt("Deve essere di almeno 5 lettere. Riprova:").trim();
}
console.log(wordLetters.length) 
/*non esce il risultato e richiede la parola all'infinito. 
Ho provato a mettere .trim per togliere eventuali spazi vuoti*/

let wordLetter;

do {
  wordLetter = prompt("Inserisci una parola di almeno 5 lettere:").trim();
} while (wordLetter.length < 5);

console.log("Lunghezza:", wordLetter.length);


//ESERCIZIO CORRETTO
let number = parseInt(prompt("scrivi un numero:"));

switch (true) {
  case number <= 100 && number >= 90:
    console.log("voto ottimo");
    break;
  case number <= 89 && number >= 80:
    console.log("voto buono");
    break;
  default:
    console.log('voto scarso');
    break;
}