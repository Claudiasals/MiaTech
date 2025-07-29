class Automobile {
    constructor (marca, modello, anno){
        this.marca=marca;
        this.modello=modello;
        this.anno=anno;
        this.chilometraggio = 0;     
    }
    
descrizione () {
    return ` Marca: ${this.marca}, Modello:${this.modello}, Anno:${this.anno}`;
}

aggiungiChilometri (km) {
    this.chilometraggio += km;  // aumento i chilometri
}
mostraChilometraggio() {
    return `Chilometraggio: ${this.chilometraggio}`;
}       