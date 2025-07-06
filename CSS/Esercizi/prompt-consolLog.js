//1 
function chiediNome() {
    let nome = prompt("Come ti chiami?");
    console.log("Ciao " + nome);
}

chiediNome();

//2

function chiediNome(nome) {
    let message = "ciao " + nome;
    console.log(message);
}

chiediNome(Catia);

//3 

function chiediNome() {
    let nome = prompt("Come ti chiami?");
let message = "Ciao " + nome
    console.log(message);
}

chiediNome();
  

//Le 3 funzioni qui sopra sono tutte corrette, fanno la stessa cosa, ma in 3 modi diversi, 
//una utilizzando i prompt e le altre due console.log in due modi diversi.
// LA TERZA È una variante più ordinata, RISPETTO ALLA PRIMA, perché separa messaggio e stampa.

//PRIMA FUNZIONE(senza parametri)

function chiediNome() {
  let nome = prompt("Come ti chiami?");
  console.log("Ciao " + nome);
}

chiediNome();


//Qui la funzione non riceve parametri, ma chiede all’utente il nome usando "prompt". 
//Il dato arriva da fuori la funzione, tramite input utente.


//SECONDA FUNZIONE(con parametro) 

function chiediNome(nome) {
  let message = "ciao " + nome;
  console.log(message);
}

chiediNome("Catia");


//Qui invece la funzione riceve il nome come parametro, quindi deve inserirlo lo sviluppatore quando chiama la funzione, 
//scrivendolo tra virgolette perché è una stringa.
//Il dato viene “iniettato” dentro la funzione direttamente.


//TERZA FUNZIONE 

function chiediNome() {
    let nome = prompt("Come ti chiami?");
    let message = "Ciao " + nome;
    console.log(message);
}

chiediNome();


//Qui uso prompt() per chiedere il nome all’utente (quindi nessun parametro), 
//poi Creo una variabile message con il saluto e in fine stampo message nella console.