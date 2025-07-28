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



// es. object.keys, object.values e object.entries

const student = {
    name: "Filippo",
    age: 34,
    grade: "laurea"
    };
    
    const keys = Object.keys(student); 
    //"object.keys" è un metodo integrato che restituisce un arrey 
    //con le chiavi, ovvero tutte le proprietà incuse nell'oggetto
    
    console.log (keys)
    
    const values = Object.values(student);
    console.log (values)
    
        
    const entries = Object.entries(student);
    console.log (entries)
    