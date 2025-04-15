class Manager{
    
    #array  // privat array elem
    
    #forradalomhozzaadascallback // privat forradalomhozzaadascallback elem

    #tablarendercallback // privat tablarendercallback elem

    constructor(){ //letrehozza a constructor fuggvenyt
        this.#array = [];//beallitja az arrayt
      
    }
    /**
     * 
     * @param {Function} callback 
     */
    setTablarendercallback(callback){ //letrehozza a setTablarendercallback fuggvenyt
        this.#tablarendercallback = callback;//beallitja a tablarendercallbacket
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

        filter(callback){
            const eredmeny = [];//letrehozza az eredmenyt
            for (const forradalom of this.#array) { //visszater a forradalommal
                if(callback(forradalom)){//ha a callback igaz
                    eredmeny.push(forradalom);//beallitja az eredmenyt
                }
            }
            this.#tablarendercallback(eredmeny);//meghivja a tablarendercallbacket
        }
}