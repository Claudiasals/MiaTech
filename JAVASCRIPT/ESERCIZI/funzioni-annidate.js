
function outerFunction(x) {
    // outerFunction accetta un parametro x
    function innerFunction(y) {
        // innerFunction accetta un parametro y
        return x + y;  
        // somma x e y e restituisce il risultato
    }
    return innerFunction;  
    // outerFunction restituisce innerFunction
}
