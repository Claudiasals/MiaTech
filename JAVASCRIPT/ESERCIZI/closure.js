function outerFunction(x, y) {
    // creo un funzione chiamata outerFunction
const result = x + y;
function innerFunction() {
    console.log("il risultato della somma è: " + result);
}
return innerFunction;
}


outerFunction(1, 2);

const sum = outerFunction(3,4);

sum()
