
function outerFunction(x, initialValue) {
    // outerFunction accetta un parametro x
    // aggiungo paramero initialValue
    let result = initialValue;  
    // memorizza il valore iniziale
    function innerFunction(y) {
        // innerFunction accetta un parametro y
        return result + y;  
        // somma result e y e restituisce il risultato
    }
    return innerFunction;  
    // outerFunction restituisce innerFunction
}

// cunter: metodi increment e decrement


