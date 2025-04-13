class Manager{
    
    #array  // privat array elem
    
    #forradalomhozzaadascallback // privat forradalomhozzaadascallback elem

    constructor(){ //letrehozza a constructor fuggvenyt
        this.#array = [];//beallitja az arrayt
      
    }

    setForradalomhozzaadascallback(callback){ //letrehozza a setForradalomhozzaadascallback fuggvenyt
        this.#forradalomhozzaadascallback = callback;//beallitja a forradalomhozzaadascallbacket
    }

    addForr(forr){
        this.#array.push(forr);//beallitja az arrayt
        this.#forradalomhozzaadascallback(forr);//meghivja a forradalomhozzaadascallbacket
    }
}