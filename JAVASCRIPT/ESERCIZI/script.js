let grades = [9, 8, 10, 8, 7, 9];
let student = {
    name: "Brenda",
    surname: "McCaller",
    class: 4,
    section: "B"
};

console.log(grades);
console.log(student);

function students (studentObj) {
    return `Nome: ${studentObj.name},
    Cognome: ${studentObj.surname}, 
    Classe: ${studentObj.class},
    Sezione: ${studentObj.section}`;
}

let studentOne = {name: "Melissa", surname: "Brambilla", class: 3, section: "G"};

students(studentOne);
//chiamo la funzione e passo il parametro 
//a studentOne

let risultato = students(studentOne); 
//chiamo la funzione student 
//e la salvo nella var risultato

console.log(risultato)

// Variabile di tipo numero
let numero = 42;
console.log("Numero:", numero);

// Variabile di tipo stringa
let testo = "Ciao, mondo!";
console.log("Stringa:", testo);

// Variabile di tipo array
let array = [1, 2, 3, 4, 5];
console.log("Array:", array);

// Variabile di tipo oggetto
let persona = {
  nome: "Alice",
  cognome: "Rossi",
  età: 30
};
console.log("Oggetto:", persona);