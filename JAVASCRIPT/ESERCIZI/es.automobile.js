class Automobile {
    #contatoreChiamate = 0;
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }
    
    static verificaIstanza(auto3, Automobile) {
        if (auto3 instanceof Automobile) {
            return "L'oggetto è un'istanza della classe " + classe.name + ".";
        } else {
            return "L'oggetto NON è un'istanza della classe " + classe.name + ".";
        }
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return auto1; //se auto1 ha magg. km return auto1
        } else if (auto2.chilometraggio > auto1.chilometraggio) {
            return auto2;//se auto2 ha magg. km return auto1
        } else {
            return null; // Quindi se hanno lo stesso chilometraggio
        }
    }


    overChilometraggio() {
        if (this._controllaChilometri()) { // if per la conizione e poi il return 
            console.warn("Il chilometraggio supera i 100.000 km!");
            /* console.warm è una funzione di JS che serve a
             mostrare un avviso (warning) nella console del browser. */
            return true;
        }
        return false; // return con booleani se c'è condizione

    }


    /* Metodo protetto
Aggiungi un metodo protetto _controllaChilometri() alla classe Automobile che verifica 
se il chilometraggio supera un certo valore (ad esempio 100,000 km) e restituisce 
un avviso. Utilizza questo metodo nella sottoclasse Elettrica 
per mostrare un avviso se il chilometraggio supera il limite. */

    _controllaChilometri() {
        this.#incrementaContatore();

        return this.chilometraggio > 100000;
    }

    #calcolaEtà() {
        //anno corrente - this.anno 
        return new Date().getFullYear() - this.anno
        // new Date().getFullYear() crea un oggetto che su js ci dice l'anno corrente
    }

    mostraEtà() {
        return this.#calcolaEtà();
    }


    descrizione() {
        return `Marca: ${this.marca}, Modello:${this.modello}, Anno:${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.#incrementaContatore(); // <--- incremento contatore

        this.chilometraggio += km;  // aumento i chilometri
    }
    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio}`;
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatoreChiamate() {
        return this.#contatoreChiamate;
    }

    

    get chilometri() {
        return this.chilometraggio;
    }
    set chilometri(chilometri) {
        if (chilometri <= this.chilometraggio) {
        console.log("Il nuovo nuovo chilometraggio deve essere maggiore del chilometraggio attuale" )
        } else {
            this.chilometraggio = chilometri;
            
        }
        }

    }



/* aggiungo automobile.prototype.saluta per inserire il metodo 
"saluta" in tutte le istanze di automobile */

Automobile.prototype.saluta = function () {
    return `ciao, sono ${this.marca} ${this.modello}.`;
};



class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }


    //perché lo metto qui sotto il pubblico e il protetto nell automobile? 
    overChilometraggio() {
        if (this._controllaChilometri()) { // if per la conizione e poi il return 
            console.warn("Il chilometraggio supera i 100.000 km!"); /* console.warm è una funzione di JS
         che serve a mostrare un avviso (warning) nella console del browser. */
            return true;
        }
        return false; // return con booleani se c'è condizione

    }

    descrizione() {
        return super.descrizione() + ` Autonomia:${this.autonomia}`;
    }

    ricarica(km) {
        this.autonomia += km;
    }
}

class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
    }

    descrizione() {
        return super.descrizione() + ` caricoMassimo:${this.caricoMassimo}`;
    }

    peso(kg) {
        this.caricoMassimo += kg;
    }
}
/* creo un istanza dalla classe e una dalla sottoclasse e 
verifico con console.log che il metodo saluta funzioni */
let auto = new Automobile("Fiat", "Panda", 2020, 30000);
let autoElet = new Elettrica("Tesla", "Model", 2022, 150000, 400000);

console.log(auto.saluta()); // Ciao! Sono una Fiat Panda.
console.log(autoElet.saluta()); // Ciao! Sono una Tesla Model 3.    


const miaAuto = new Automobile("Fiat", "Punto", 2018, 25000);
console.log("Età dell'auto:", miaAuto.mostraEtà());

console.log(autoElet.overChilometraggio());

// METODO STATICO: creo 2 istanze auto1 e auto2:
const auto1 = new Automobile("Fiat", "Panda", 2020, 120000);
const auto2 = new Automobile("Toyota", "One", 2019, 120000);
// creiamo la const "risultato" per eseguire il metodo statico e quindi fare il confronto
const risultato = Automobile.confrontaChilometraggio(auto1, auto2);


// verifica metodo statico
if (risultato) {
    console.log("Ha più km:", risultato.marca, risultato.chilometraggio);
} else {
    console.log("Le due auto hanno lo stesso chilometraggio.");
}

const Camion1 = new Camion("BMW", "serie1", 2023, 50000, 15000);
console.log(Camion1.caricoMassimo); // verifico che stampi il caricoMassimo: 15000

//es.verifica istanza
const auto3 = new Automobile("Audi", "q5", 2025, 0);
const camion2 = new Camion("Volvo", "w3", 2018, 580000);

console.log(auto3 instanceof Automobile);   
console.log(camion2 instanceof Camion);   

//metodo statico