// Simple JavaScript Exercises: Data Types, Objects, Arrays & Functions

// Exercise 1: Check Data Type
// Create a function that checks what type of data is passed to it and returns a string with the type name.
//Creare una funzione che controlli il tipo di dati che le vengono passati e restituisca una stringa con il nome del tipo.
function checkType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

const valueType = checkType("cinque");

console.log(valueType)

function checkType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

const valueTypes = checkType([]);

console.log(valueTypes)

// Exercise 2: Create Person Object
// Create a function that takes name, age, and city as parameters and returns a person object.
//Crea una funzione che accetta come parametri nome, età e città e restituisce un oggetto persona.
function createPerson(name, age, city) {
    return { name, age, city };
}
const data = createPerson("pippo", 38, "genova");
console.log(data);


// Exercise 3: Count Array Elements
// Create a function that counts how many elements are in an array and returns the count.


function countElements(arr) {
    return arr.length;
}

const NumArr = countElements(["ciao", 1, 2, 3, 4])

console.log(NumArr)




// Exercise 4: Add Numbers
// Create a function that takes two numbers and returns their sum.
function addNumbers(a, b) {
    return a + b;
}

const sum = addNumbers(2, 4)
console.log(sum)

// Exercise 5: Find Largest Number
// Create a function that takes an array of numbers and returns the largest number.
function findLargest(numbers) {
    return Math.max(...numbers);
}

const max = findLargest([4, 8, 9, 1])

console.log(max);


function isEven(number) {
    // Your implementation here
    return number % 2 === 0;
}

const isEvenNum = isEven(7);

console.log(isEvenNum)


function issEven(numbern) {
    // Your implementation here
    return numbern % 2 === 0;
}

const issEvenNum = issEven(8, 8, 6);

console.log(issEvenNum)


function isEvenf(numberf) {
    // Your implementation here
    return numberf % 2 === 0;
}

const isEvenNumf = isEvenf(7, 8, 10);

console.log(isEvenNumf)

// Exercise 6: Filter Even Numbers
// Create a function that takes an array of numbers and returns a new array with only the even numbers.
function filterEven(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const evenNum = filterEven ([6, 77, 55, 48]);
console.log(evenNum);


// Exercise 7: Get Object Property
// Create a function that takes an object and a property name, and returns the value of that property.
function getPropertyv(obj, propertyName) {
    return obj[propertyName];
}

const propval = getPropertyv ({
    giorno: "martedì",
    data: 8
}, "data");

console.log(propval);

// Exercise 9: Reverse String
// Create a function that takes a string and returns it reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}
const varRevers = reverseString ("ciao, 9, bene, 12, b3l1a");
console.log(varRevers);

// Exercise 10: Count Object Properties
// Create a function that takes an object and returns how many properties it has.
function countPproperties(obj) {
    return Object.keys(obj).length; //conta negli object, mentre solo .lenght conta negli array
}
const countObj = countPproperties ({name:"red", price:800});
console.log(countObj);

// Exercise 11: Is Property Present
// Create a function that checks if an object contains a certain property and returns true or false.
function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}
const stringProperty = hasProperty({nome:"bill", città: "New York"}, "età");
console.log(stringProperty);

// Exercise 12: Double Array Values
// Create a function that receives an array of numbers and returns a new array with the values doubled.
function doubleValues(arr) {
    return arr.map(n => n * 2);
}

const doubleArr = doubleValues([4, 5, 6, 7, 8]);
console.log(doubleArr);

// Exercise 13: Get First Element
// Create a function that returns the first element of an array, or null if the array is empty.
function getFirst(arr) {
    return arr.length > 0 ? arr[0] : null;
}

const arrNull = getFirst(["ciao", "come", "stai"]);
console.log(arrNull)
/*Cos’è l’operatore ternario?
È un modo compatto per scrivere una semplice istruzione if-else in una sola riga.

Sintassi:
condizione ? valoreSeVero : valoreSeFalso;

Spiagazione:
condizione — qualcosa che può essere true o false
? — separa la condizione dal risultato vero
valoreSeVero — cosa restituisce se la condizione è vera
: — separa il valore vero dal valore falso
valoreSeFalso — cosa restituisce se la condizione è falsa*/


// Exercise 14: Merge Two Objects
// Create a function that merges two objects into one.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Exercise 15: Remove Duplicates
// Create a function that receives an array and returns a new array without duplicates.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Exercise 16: Is Array Empty
// Create a function that checks if an array is empty.
function isEmptyArray(arr) {
    return arr.length === 0;
}

// Exercise 17: Multiply Object Values
// Create a function that takes an object with numeric values and returns a new object with those values multiplied by 2.
function multiplyValues(obj) {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result[key] = obj[key] * 2;
        }
    }
    return result;
}

// Exercise 18: Get Keys
// Create a function that returns all the keys of an object in an array.
function getKeys(obj) {
    return Object.keys(obj);
}

// Exercise 19: Capitalize String
// Create a function that takes a string and returns it with the first letter capitalized.
function capitalize(str) {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// Exercise 20: Is Number Positive
// Create a function that takes a number and returns true if it's positive, false otherwise.
function isPositive(num) {
    return num > 0;
}


// Esercizio 21

function getProperty(obj, propertyName) {
    // Your implementation here
    return obj[propertyName];
}

const valueProp = getProperty({
    name:"Giovannni",
age:50}, "name");

console.log(valueProp);

## Exercise 9: Reverse String


function reverseString(str) {
    return str
}


console.log(reverseString('hello'));  
console.log(reverseString('world'));
