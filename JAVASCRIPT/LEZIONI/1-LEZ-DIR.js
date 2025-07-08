// String
"091\"1212312'3";
'D\'a"ntoni';

// Number
8;
6.4;
1_000_000_000;

// Boolean
true; // true, tutto ciò che non è falsy 
false; // false, 0, '', null, undefined

// Arrey
["Red", "Green", "Blue", "White"];
[3, 5, 7, 9];
[5, "A", null, false, [1, 2, ["Red", "Blue"]], 7, [4]]; 

// Object
({
    id: 0,
    first_name: "Claudia", 
    last_name: "Salsini", 
    age: 34,
    tag: null,
    is_active: true,
    address: {
        city: "Milano",
        cap: "20028",
        address: "Via Giovanni",
        num: "021/A",
    },
    history: [
        {
            action: "login",
            date: "30/06/2025T10:00:00"
        },
        {
            action: "logout",
            date: "30/06/2025T10:30:00" 
        }
    ]
})

ATTENZIIONE:
Le parentesi quadre in history: [ ... ] indicano che stai 
registrando una lista di eventi storici (login/logout), e ogni evento è un oggetto.

// Variables
// color è l'alias dell'indirizzo dove salviamo il valore; color -> ff0x000002 -> "Red" 
color = "Red"; // dichiarazione implicita NO
var name = "Giovanni"; // Dichiarazion in scope globale NO
let age = 34; // Dichiarazione in scope locale, variabile riassegnablie SI
const email = "io@email.com"; // Dichiarazione in scope locale, non riassegnabile SI

const user = {
    id: 0,
    name: "Altin"
};
user.id = 1; // Stiamo riassegnandoo il valore 1 al ID all'interno della costante SI
user = null; // Stiamo riassegnando il valore della costante NO

let counter = 0;
counter = 1;
counter = 2;