class Forradalom {
    #forradalom;
    #evszam;
    #sikeres;

    get forradalom() {
        return this.#forradalom;
    }
    get evszam() {
        return this.#evszam;
    }
    get sikeres() {
        return this.#sikeres;
    }


    constructor(forradalom, evszam, sikeres) {
        this.#forradalom = forradalom;
        this.#evszam = evszam;
        this.#sikeres = sikeres;
    }



   
}