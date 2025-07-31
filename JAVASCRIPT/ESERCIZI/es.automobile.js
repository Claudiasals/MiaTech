class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }


    /* Metodo protetto
Aggiungi un metodo protetto _controllaChilometri() alla classe Automobile che verifica 
se il chilometraggio supera un certo valore (ad esempio 100,000 km) e restituisce 
un avviso. Utilizza questo metodo nella sottoclasse Elettrica 
per mostrare un avviso se il chilometraggio supera il limite. */

_controllaChilometri() {
    return this.chilometraggio > 100000;
}


    #calcolaEtà() {
        //anno corrente - this.anno 
      return  new Date().getFullYear() - this.anno
      // new Date().getFullYear() crea un oggetto che su js ci dice l'anno corrente

    }


    mostraEtà() {
        return this.#calcolaEtà();
    }



   
    descrizione() {
        return `Marca: ${this.marca}, Modello:${this.modello}, Anno:${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.chilometraggio += km;  // aumento i chilometri
    }
    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio}`;
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
overChilometraggio () {
    if (this._controllaChilometri()) { // if per la conizione e poi il return 
        console.warn("Il chilometraggio supera i 100.000 km!"); /* console.warm è una funzione di JS
         che serve a mostrare un avviso (warning) nella console del browser. */
         return true;
        }
        return false; // return con booleani se c'è condizione

    } 
    descrizione() {
        return super.descrizione() + `Autonomia:${this.autonomia}`;
    }

    ricarica(km) {
        this.autonomia += km;
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