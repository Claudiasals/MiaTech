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
class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio) {
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