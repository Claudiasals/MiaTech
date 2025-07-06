alert("Ciao Claudia!") // Questo codice fa apparire un messaggio in un pop up


//saluto
function saluta(nome) {
    return "Ciao " + nome + "!";
}
console.log(saluta("Claudia"))


//somma e sottrazione
function somma(a, b) {
    return a + b;
}
console.log(somma(3, 5));


function sottrazione(a, b) {
    return a - b;
}
console.log(sottrazione(8, 5));

console.log(somma(3, 8));

console.log(sottrazione(20, 6));

sottrazione(4, 2);


//es. parametri nome e età

function presentaPersona(nome, eta) {
    let messaggio = "Ciao, mi chiamo " + nome + " e ho " + eta + " anni.";
    console.log(messaggio);
}
presentaPersona("Claudia", 33);

  risultato atteso: Ciao, mi chiamo Claudia e ho 33 anni.

    presentaPersona("Jennifer", 31);

ris.att.: Ciao, mi chiamo Jennifer e ho 31 anni.


//es. chiedi all'utente di scrivere i dati richiesti dai parametri
let nome = prompt("Come ti chiami?");
let eta = prompt("Quanti anni hai?");
presentaPersona(nome, eta);

ris.att: Ciao, mi chiamo Jonny e ho 56 anni.


//Quando usi prompt("testo"), il browser mostra una finestra con: 
//un messaggio (quello che scrivi tra virgolette),
//una casella di testo dove l’utente può scrivere la sua risposta.


//------------------------------------------------------------------------------------

// Attenzione:
//prompt() restituisce sempre una stringa (testo), anche se l’utente scrive un numero.
//Se vuoi trattare il valore come numero, devi convertirlo con Number().
//Esempio:
let eta = prompt("Quanti anni hai?");
eta = Number(eta);

//Forma	E Quando si usa
eta = Number(eta)	//se ti basta lavorare col numero
let etaNumero = ...	//se vuoi tenere anche la stringa
//------------------------------------------------------------------------------------


//esempio con prompt:

function presentaPersona(animalePreferito, colorePreferito) {
    let messaggio = "Il mio animale preferito è " + animalePreferito + " e il mio colore preferito è " + colorePreferito + ".";
    console.log(messaggio);
}

// la variabile col prompt ci permette di far uscire il pop-up con la richiesta dei dati all'utente:
let animalePreferito = prompt("Qual è il tuo animale preferito?");
let colorePreferito = prompt("Qual è il tuo colore preferito?");

// per richiamare la funzione inserendo i dati dei parametri richiesti:
presentaPersona("cavallo", "blu mare");

// per dichiarare le variabili let animalePreferito = "cavallo";
let colorePreferito = "blu mare";

// per stampare la funzione in console e verificarne il funzionamento:
console.log(animalePreferito);
console.log(colorePreferito);



//ESERCIZIO NOME + ETà


function presenta(nome, età) { //DICHIARO UNA FUNZIONE CHE SI CHIAMA PRESENTA
    let message = "Mi chiamo " + nome + " e ho " + età + " anni."; //let message = → sto creando una variabile che si chiama message, 
    //cioè un contenitore dove mettere un'informazione (una frase, in questo caso).
    //Sto creando una frase completa usando i dati ricevuti dalla funzione (nome ed età), e la salvi nella variabile message.
    console.log(message);
}

presenta("Claudia", 33);

//ESERCIZIO
function salutaUtente(nome) {
    let message = "Ciao, " + nome + "! Benvenuto nel sito.";
    console.log(message);
}

salutaUtente(Paolo);

//ESERCIZIO CALCOLI

function calcolaSomma(a, b) {
    let risultato = a + b;
    console.log(risultato);
}

calcolaSomma(3, 5);


function moltiplica(x, y) {
    let prodotto = x * y;
    console.log(prodotto);
}
moltiplica(4, 6);

//ESERCIZIO
function salutaPersona(nome, città) {
    let message = "Ciao " + nome + ", come va a " + città + ".";
    console.log(message);
}

salutaPersona("Gianna", "Lucca");
           // Chiamando la funzione con questi parametri, stamperà in console:
            Ciao Gianna, come va a Lucca.

//ESERCIZIO con struttura condizionale
function salutaPersona(nome, città) {
    let message = "Ciao " + nome + ", come va a " + città + "?";
    console.log(message);
}

salutaPersona("Piera", "Varese");


//ESERCIZIO con struttura condizionale e prompt per l'utente
function salutaPersona(nome, città) {
    let message;
    if (città === "") {
        message = "Ciao" + nome + "!"
    }
    else {
        message = "Ciao " + nome + ", come va a " + città + "?";
    }
    console.log(message);
}

let nome = prompt("Come ti chiami?");
let città = prompt("Di dove sei?");

salutaPersona(nome, città);

//ESERCIZI FUNZIONI CON PROMPT INTERNI
//1
function chiediDati() {
    let nome = prompt("Come ti chiami?");
    let città = prompt("Da dove vieni?");
    console.log("Ciao " + nome + "! Vieni da " + città + ".");
}

chiediDati();

//2
function salutaUtente() {
    let nome = prompt("Come ti chiami?");
    let città = prompt("Di dove sei?");
    console.log("Ciao " + nome + "! Vieni da " + città + ".");
}

salutaUtente();

//CORREGGI LE FUNZIONI 
//esercizio 1  

function salutoUtente(nome) {
    let messaggio = "Ciao" + nome + "! Come stai?";
    console.log(messaggio);
}

salutoUtente("Mario");

//esercizio 2: 

function calcolaEtaFutura(eta) {
    let risultato = "Tra 5 anni avrai " + (eta + 5) + " anni.";
    console.log(risultato);
}

calcolaEtaFutura(28);

//esercizio 3:
function messaggioPersonalizzato(nome, hobby) {
    let messaggio;
    if (hobby === "") {
        messaggio = "Ciao " + nome + ", dimmi cosa ti piace fare!";
    } else {
        messaggio = "Ciao " + nome + ", anche a me piace " + hobby + "!";
    }
    console.log(messaggio);
}

messaggioPersonalizzato("Claudia", "");


//ES. FUNZIONI CON DUE VARIABILI
function calcolaArea(base, altezza) {
    let area = base * altezza / 2;
    let message = "L'area del triangolo è " + area + ".";
    console.log(message);
}

calcolaArea(5, 6);

//CREA LE FUNZIONE:
//1
Scrivi una funzione chiamata calcolaPerimetro che prende due parametri: base e altezza.
La funzione deve calcolare il perimetro di un rettangolo(base * 2 + altezza * 2) e stampare in console un messaggio come:
"Il perimetro del rettangolo è X."
dove X è il risultato del calcolo.

function calcolaPerimetro(base, altezza) {
    let perimetro = base * 2 + altezza * 2;
    let message = "il perimetro del rettangolo è " + perimetro + ".";
    console.log(message);
}
calcolaPerimetro(7, 3);

//2
Scrivi una funzione chiamata calcolaAreaTriangolo che prende due parametri: base e altezza.
La funzione deve calcolare l’area del triangolo((base * altezza) / 2) e stampare in console:
"L'area del triangolo è X."

function calcolaAreaTriangolo(base, altezza) {
    let risultato = (base * altezza) / 2;
    let message = "L'area del triangolo è " + risultato + ".";
    console.log(message);
}
calcolaAreaTriangolo(6, 7);


//3 
Scrivi una funzione chiamata chiediEta che non riceve parametri, ma usa prompt per chiedere:
"Quanti anni hai?"
Poi stampa in console:
"Hai X anni."

function chiediEta() {
    let età = prompt("Quanti anni hai?");
    let message = "Hai " + età + " anni.";
    console.log(message);
}

chiediEta();

//4 
Scrivi una funzione chiamata salutaPersona che prende due parametri: nome e città.
Se la città è vuota (""), stampa in console:
"Ciao NOME!"
Altrimenti:
"Ciao NOME, com'è il tempo a CITTÀ?"

function salutaPersona(nome, città){
    let message;
    if (città=== ""){
    message="Ciao " + nome;
    } else {
    message="Ciao "+ nome + ", com'è il tempo a "+città+"?"; 
    }
    console.log(message);
    }
    salutaPersona("Fred","");

//5
Scrivi una funzione chiamata chiediColorePreferito che non ha parametri.
Chiedi all’utente, con prompt:
"Qual è il tuo colore preferito?"
Poi stampa in console:
"Anche a me piace COLORE!"

function chiediColorePreferito (){
    let colore=prompt("Qual è il tuo colore preferito?");
    let message="Anche a me piace il " + colore;
    console.log(message);
    }
    chiediColorePreferito();

//6
Scrivi una funzione chiamata calcolaVolumeCubo che riceve un parametro: il lato del cubo.
Calcola il volume (lato * lato * lato) e stampa in console:
"Il volume del cubo è X."

function calcolaVolumeCubo(lato){
    let risultato = lato * lato * lato;
    let message = "Il volume del cubo è " + risultato + ".";
    console.log(message);
  }
  
  calcolaVolumeCubo(4);

  //Se questa funzione fosse in un sito dove gli utenti accedono per fare questi calcoli, 
  //e volessi chiedere all'utente di inserire il lato del cubo per il quale deve calcolare il volume:


function calcolaVolumeCubo(){
    let lato = prompt("Scrivi qui il lato del cubo di cui devi calcolare il volume");
    lato = Number(lato); // Converte la stringa in numero. Nei prompt tutte le risposte degli 
    //utenti vengono lette come stringhe, se ci serve un numero bisogna specificarlo con "Number"
    
    let risultato = lato * lato * lato;
      let message = "Il volume del cubo è " + risultato + ".";
      console.log(message);
    
    }
    
    calcolaVolumeCubo();

// se vogliamo aggiungere un controllo per impedire all'utente di digitare lettere 
//al posto di numeri, aggiungiamo la struttura condizionale e "isNaN" significa "is Not a Number", 
//cioè "non è un numero". Come funziona:

isNaN(valore) restituisce:

"true" se valore NON è un numero valido (cioè è "NaN" o non può essere convertito in numero);

"false" se valore è un numero (o può essere convertito in numero).

//ESEMPI:
isNaN("ciao");       // true, perché "ciao" non è un numero
isNaN("123");        // false, perché "123" può essere convertito in numero
isNaN(45);           // false, è un numero
isNaN("45abc");      // true, non si può convertire in numero
isNaN(NaN);          // true, NaN significa Not a Number


function calcolaVolumeCubo(){
    let lato = Number(prompt("Scrivi qui il lato del cubo di cui devi calcolare il volume"));
  
    if (isNaN(lato)) {
      console.log("Per favore, inserisci un numero valido."); //SE NON è UN NUMERO ESCE QUESTO MSG ALL'UTENTE
      return;
    }
  
    let risultato = lato * lato * lato;
    let message = "Il volume del cubo è " + risultato + ".";
    console.log(message);
  }
  
  calcolaVolumeCubo();

  //Cosa fa esattamente return; qui?
Quando l’utente inserisce un valore che non è un numero valido (isNaN(lato) è true),

viene mostrato il messaggio "Per favore, inserisci un numero valido.",

e poi la funzione si ferma subito, grazie al return;,

quindi il codice che calcola e stampa il volume non viene eseguito.