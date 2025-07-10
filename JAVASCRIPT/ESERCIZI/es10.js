//ESERCIZIO 10
/*
let number = 3; {
    if (number>5){
        console.log("La variabile è maggiore di 5");
    } else {
        console.log("La variabile è minore di 5");
    }
}
*/
//ESERCIZIO 11
//Metodo parseInt
/*let score = parseInt(prompt("scrivi un numero:"));
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

let = parseInt(prompt("scrivi un numero:")); 
switch (numero) {
case < 59: 
    document.write("voto insufficiente");
    break
case >= 60 && case <= 69
    document.write("voto sufficiente");
    break
case >= 70 && case <= 89) 
    document.write("voto buono")
    break
case >= 90 && case <= 100) 
    document.write("voto ottimo")
    break
default: 
document.write("Numero non valido")
}