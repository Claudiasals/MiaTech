class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
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

// aggiungo automobile.prototype.saluta per inserire il metodo saluta in tutte le istanze di automobile

Automobile.prototype.saluta = function() {
    return `ciao, sono ${this.marca} ${this.modello}.`;
};



class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return super.descrizione() + `Autonomia:${this.autonomia}`;
    }

    ricarica(km) {
        this.autonomia += km;
    }

}

// creo un istanza dalla classe e una dalla sorttoclasse e le verifico con console.log
let auto1 = new Automobile("Fiat", "Panda", 2020, 30000);
let tesla = new Elettrica("Tesla", "Model", 2022, 15000, 400);

console.log(auto1.saluta()); // Ciao! Sono una Fiat Panda.
console.log(tesla.saluta()); // Ciao! Sono una Tesla Model 3.