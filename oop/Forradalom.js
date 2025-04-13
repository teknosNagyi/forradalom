class Forradalom {
    #forradalom; // forradalom neve
    #evszam;    // forradalom evszama
    #sikeres;   // forradalom sikeressege
    /**
     * @param {string} forradalom - forradalom neve
     * @param {number} evszam - forradalom evszama
     * @param {boolean} sikeres - forradalom sikeressege
     */
    get forradalom() {
        return this.#forradalom;
    }
    get evszam() {
        return this.#evszam;
    }
    get sikeres() {
        return this.#sikeres;
    }

    /**
     * * @param {string} forradalom - forradalom neve
     * @param {number} evszam - forradalom evszama
     * @param {boolean} sikeres - forradalom sikeressege
     * */
    constructor(forradalom, evszam, sikeres) { // constructor letrehozasa
        this.#forradalom = forradalom; 
        this.#evszam = evszam;
        this.#sikeres = sikeres;
    }



   
}