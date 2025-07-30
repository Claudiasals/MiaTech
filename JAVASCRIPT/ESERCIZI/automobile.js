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



//CORREZIONE DI CHATGPT DA VEDERE :
// Prima parte: Classe Automobile con proprietà e metodi
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0; // proprietà chilometraggio
    }

    descrizione() {
        return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.chilometraggio += km;
    }

    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio}`;
    }
}

// Seconda parte: Sottoclasse Elettrica estende Automobile
class Elettrica extends Automobile {
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia; // proprietà autonomia
    }

    descrizione() {
        // override del metodo per includere anche l'autonomia
        return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Autonomia: ${this.autonomia} km`;
    }

    ricarica(km) {
        this.autonomia += km; // aumenta l'autonomia della batteria
    }
}