//ESERCIZIO 10
/*
let number = 3; 
    if (number>5){
        console.log("La variabile è maggiore di 5");
    } else {
        console.log("La variabile è minore di 5");
    }

*/
//ESERCIZIO 11
//Metodo parseInt
/* let score = parseInt(prompt("scrivi un numero:"));
if (score < 59) {
    document.write("voto insufficiente");
} else if (score >= 60 && score <= 69) {
    document.write("voto sufficiente");
} else if (score >= 70 && score <= 89) {
    document.write("voto buono")
} else if (score >= 90 && score <= 100) {
    document.write("voto ottimo")
}*/

/*
"&&" significa "e" 
&& si può usare con qualsiasi valore booleano 
(vero/falso), quindi:
- Numeri (con confronti): score >= 60 && score <= 69
- Stringhe (con condizioni): (str === "ciao" && str.length > 3)
- Variabili booleane: (isLoggedIn && isAdmin)
*/

//ESERCIZIO 12
//Switch

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