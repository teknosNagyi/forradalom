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


    szovegexportgeneralas(){ //letrehozza a szovegexportgeneralas fuggvenyt
        const eredmeny= ["forradalom;evszam;sikeres"];//letrehozza az eredmenyt
        for (const forradalom of this.#array) { //visszater a forradalommal
            eredmeny.push(`${forradalom.forradalom};${forradalom.evszam};${forradalom.sikeres}`);//beallitja az eredmenyt
        }
        return eredmeny.join("\n");//visszater a joinnal
        }
}