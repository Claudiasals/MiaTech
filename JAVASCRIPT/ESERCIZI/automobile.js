class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
    }

    descrizione() {
        return ` Marca: ${this.marca}, Modello:${this.modello}, Anno:${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.chilometraggio += km;  // aumento i chilometri
    }
    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio}`;
    }       
}
class Elettrica extends Automobile {
    constructor(marca, modello, anno, km, autonomia) {
        super(marca, modello, anno, km);
        this.autonomia = 0;
    }

    descrizione() {
        return `Marca: ${this.marca}, Modello:${this.modello}, Anno:${this.anno}, Autonomia:${this.autonomia}`;
    }

 ricarica(km) {
        this.autonomia += km;  
    }
 
}
