//ESERCIZIO 12
//Switch - Verifica il punteggio
/*
let number = parseInt(prompt("scrivi un numero:"));
switch (true) {
    case number <= 100 && number >= 90:
        console.log("voto ottimo");
        break; //per farlo fermare quando non trova una corrispondenza

    case number <= 89 && number >= 70:
        console.log("voto buono");
        break;

    case number <= 69 && number >= 60:
        console.log("voto sufficiente");
        break;

    case
        number <= 59:
        console.log("voto insufficiente");
        break;
    default:
        console.log("Numero non valido")
}
*/
//ES array somma di numeri
let numberArr = [3, 4, 56, 5, 78, 3];
let sum = 0; //var con valore iniziale 0, inizia a 0 perché non abbiamo ancora sommato nientwe. Che terrà conto, sevre a salvare la somma totale degli array
for (let i = 0; i < numberArr.length; i++) {
    /* inizializziamo la var i alla pozizione 0; 
    poi diciamo a i di continuare finché è più piccolo 
    della lumghezza totale dell'array, ovvero 6;
    i++ indica come aunentano ad ogni ciclo, ovvero ad ogni 
    ciclo aumentano di 1, cioè passimo al numero successivo; 
    Dopo il 6° giro, i diventa 6, ma numberArr.length è 6,quindi 
    la condizione i < 6 non è più vera, e il ciclo si ferma.*/
    sum = sum + numberArr[i]; /* aggiungi ogni valore a sum; significa:
    ➕ prendi il numero che c’è in numberArr[i],
    ➕ aggiungilo a sum,
    ➕ e salva il risultato dentro sum di nuovo. */
}
console.log(sum);
