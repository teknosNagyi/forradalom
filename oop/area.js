/**
* megnezi van a containeroop ha nincs csinald egy containert
 * csinal egy divet es beallitja a class nevet es hozzad adja a containerhez
 */
class Area{ //letrehozza az Area osztalyt
    #div // privat div elem
    /**
     * @returns {HTMLElement} div
     */
    get div(){//letrehozza a div gettert
        return this.#div;//visszaadja a divet
    }
    #manager // privat manager elem
    /**
     * @returns {Manager} manager
     * */
    get manager(){//letrehozza a manager gettert
        return this.#manager;//visszaadja a managert
    }
    /**
    * @param {string} className stringet var parameterul
    */
    // constructor letrehozasa className parameterrel
    constructor(className,manager){ //letrehozza a constructor fuggvenyt
        this.#manager = manager;//beallitja a managert
        const container1 = this.#getContainer(); //meghivja a #getContainer fuggvenyt
        this.#div = document.createElement('div');//letrehozza a divet
        this.#div.className = className;//beallitja a class nevet
        container1.appendChild(this.#div);//hozzaadja a divet a containerhez
    }
    /**
     * @returns {HTMLElement} container
     * */
       #getContainer(){//letrehozza a #getContainer fuggvenyt
        
        let container = document.querySelector('.containeroop');// megnezi van e mar containeroop class
       
        if(!container){ // ha nincs belep az ifbe
            container = document.createElement('div');//letrehozza a containert
            container.className = 'containeroop';//beallitja a class nevet containeroop-ra
            document.body.appendChild(container);//hozzaadja a bodyhoz
        }
        return container;//visszaadja a containert
  
    };
}
/**
 *  az Area osztalybol leszarmazott osztalya es egy tablazatot hoz letre 
 */
class Table extends Area {
    /**
     * @param {string} Class stringet var parameterul
     * @param {Manager} manager - a manager objektum
     */
    constructor(Class,manager){//constructor letrehozasa Class parameterrel
        super(Class,manager); //meghivja a szulo osztaly konstruktorat
        const tbody = this.#tabalazatgen();//letrehozza a tablazatot    
        this.manager.setForradalomhozzaadascallback((forr)=>{
            this.#forrsorra(forr,tbody)
        })

        this.manager.setTablarendercallback((forradalomok)=>{
            this.div.querySelector('tbody').innerHTML = '';
            for (const forradalom of forradalomok) {//a forradalom tomb elemein vegigmegyunk
                this.#forrsorra(forradalom,tbody);//letrehozza a tablazatot
            }

    });

    }
    #forrsorra(forradalom,tbody){//letrehozza a forradalom sort
        
        const sor = document.createElement('tr');//letrehozza a sort
        tbody.appendChild(sor);//hozzaadja a sort a tablazat testhez
        const forradalomtomb = [forradalom.forradalom, forradalom.evszam, forradalom.sikeres];//letrehozza a forradalom tombot
        for (const celltartalom of forradalomtomb) {//a tomb elemein vegigmegyunk
            const cella = document.createElement('td');//letrehozza a cellat
            cella.innerText = celltartalom;//beallitja a cella tartalmat
            sor.appendChild(cella);//hozzaadja a cellat a sorhoz
        }
    }


    #tabalazatgen(){//letrehozza a tablazatot
        const table = document.createElement('table');//letrehozza a tablet
        this.div.appendChild(table);//hozzaadja a tablet a divhez
        const tableheader = document.createElement('thead');//letrehozza a thead elemet
        table.appendChild(tableheader);//hozzaadja a thead elemet a tablehoz
        const tableheaderow = document.createElement('tr');//letrehozza a sort
        tableheader.appendChild(tableheaderow);//hozzaadja a sort a thead elemhez
        const theadercella = ['forradalom', 'evszam', 'sikeres'];// letrehoz egy tombot a fejlec cellainak tartalmaibol
        for (const celltartalom of theadercella) {// a tomb elemein vegigmegyunk
            const cella = document.createElement('th');// letrehoz egy th cellat
            cella.innerText = celltartalom;// a cella tartalma a tomb elemei lesznek
            tableheaderow.appendChild(cella);// hozzaadja a cellat a sorhoz
        }
        const tablebody = document.createElement('tbody');// letrehoz egy tbody elemet
        table.appendChild(tablebody);// hozzaadja a tbody elemet a tablazathoz
        return tablebody;//visszaadja a tablebodyt
    
}
}

class Form extends Area {

    #formarray;
     /**
     * létrehoz egy űrlapot a megadott osztálynévvel és mezőkkel
     * @param {string} Class - az osztálynév
     * @param {Array} fieldElementLista - a mezők listája
     * @param {Manager} manager - a manager objektum
     */
    constructor(Class,fieldElementLista,manager) {//constructor letrehozasa Class parameterrel
        super(Class,manager);//meghivja a szulo osztaly konstruktorat
        this.#formarray = [];//beallitja a formarrayt
        const form = document.createElement('form');//letrehozza a formot
        this.div.appendChild(form);//hozzaadja a formot a divhez
        
        for (const fieldelem of fieldElementLista) {// a tomb elemein vegigmegyunk
            const field = new Formfield(fieldelem.fieldid, fieldelem.fieldlabel);//letrehozza a fieldet
            this.#formarray.push(field);//beallitja a formarrayt
            form.appendChild(field.Div1());//hozzaadja a fieldet a formhoz
        }
            const button = document.createElement('button');//letrehozza a button elemet
            button.textContent = 'hozzaad';//beallitja a button tipusat
            form.appendChild(button);//hozzaadja a button elemet a formhoz

            form.addEventListener('submit', (e) => {//hozzaad egy event listenert a formhoz
                e.preventDefault();//megelozi az alapertelmezett viselkedest
                const valueObject = {};//letrehozza az valueObjectet        
            let valid = true;//beallitja a valid valtozot
            for (const field of this.#formarray) {//a formarrayon vegigmegyunk
                field.error = '';//beallitja az error erteket
                if(field.value === ''){//ha a field valueja ures
                    field.error = 'kitoltes kotelezo';//beallitja az error erteket
                    valid = false;//beallitja a valid valtozot
                }
                valueObject[field.id] = field.value;//beallitja az valueObjectet
                
            }
            if(valid){//ha a valid true
                const forr = new Forradalom(valueObject.forradalom, Number(valueObject.evszam),valueObject.sikeres);//letrehozza az forradalmat
                this.manager.addForr(forr);//meghivja a manager forradalomhozzaadas fuggvenyet
            }
            })
}}  
class UploadDownload extends Area{ //letrehozza az Upload osztalyt
    /**
     * 
     * @param {string} Class - az osztálynév
     * @param {Manager} manager - a manager objektum
     */
    constructor(Class,manager){ //letrehozza a constructor fuggvenyt
        super(Class,manager); //meghivja a szulo osztaly konstruktorat
        const input = document.createElement('input'); //letrehozza az input elemet
        input.type = 'file'; //beallitja az input tipusat
        input.id= 'file'; //beallitja az input id-t
        this.div.appendChild(input); //hozzaadja az input elemet a divhez
        input.addEventListener('change', (e) => { //hozzaad egy event listenert az inputhoz
                
                const file = e.target.files[0]; //letrehozza a file valtozot
                const reader = new FileReader(); //letrehozza a FileReader elemet
                reader.onload = () => { //ha betoltodott a file
                    const filesorok = reader.result.split("\n"); //letrehozza a text valtozot
                    const levagottheader = filesorok.slice(1); //levagja az elso sort

                    for (const sor of levagottheader) { //a lines tomb elemein vegigmegyunk
                        const levagottsor1 = sor.trim(); //levagja a sor elejet es veget
                        const mezo = levagottsor1.split(';'); //letrehozza a mezo tombot

                        const forr = new Forradalom(mezo[0], Number(mezo[1]), mezo[2]); //letrehozza a forradalmat
                        this.manager.addForr(forr); //meghivja a manager forradalomhozzaadas fuggvenyet
                    }
                }
                reader.readAsText(file); //beolvassa a file tartalmat

            })
        const letoltesbutton = document.createElement('button'); //letrehozza a button elemet
        letoltesbutton.textContent = 'letoltes'; //beallitja a button tipusat
        this.div.appendChild(letoltesbutton); //hozzaadja a button elemet a divhez
        letoltesbutton.addEventListener('click', (e) => { //hozzaad egy event listenert a buttonhoz
            const link = document.createElement('a'); //letrehozza a link elemet
            const tartalom = this.manager.szovegexportgeneralas()//tartalom letrehozasa
            const file = new Blob([tartalom]); //letrehozza a file elemet
            link.href = URL.createObjectURL(file); //beallitja a link href erteket
            link.download = 'forradalom.csv'; //beallitja a link download erteket
            link.click(); //meghivja a link click fuggvenyet
            URL.revokeObjectURL(link.href); //meghivja a URL revokeObjectURL fuggvenyet

        })
    }

}



class Formfield{ //letrehozza a Formfield osztalyt

    #id; // privat id elem
    #inputElement;  // privat input elem
    #labelElement; // privat label elem
    #errorElement; // privat error elem

    /**
     * @param {string} id - az input elem id-je
     * @param {HTMLElement} inputElement - az input elem
     * @param {HTMLElement} labelElement - a label elem
     * @param {HTMLElement} errorElement - az error elem
     */

    get id(){
        return this.#id;
    }

    get value(){
        return this.#inputElement.value;
    }

    set error(value){
        this.#errorElement.textContent = value;
    }

    constructor(id,labelContent){
        this.#id = id; // beallitja az id-t
       this.#labelElement = document.createElement('label'); // letrehozza a label elemet
        this.#labelElement.htmlFor = id; // beallitja a label htmlfor erteket
        this.#labelElement.textContent = labelContent; // beallitja a label szoveget
       if (id === 'sikeres') { // ha a fieldid sikeres
            
                this.#inputElement = document.createElement('select'); // letrehozza a select elemet
               
                const option1 = document.createElement('option'); // letrehozza az option elemet
                option1.value = 'igen'; // beallitja az option erteket
                option1.innerText = 'igen'; // beallitja az option szoveget
                const option2 = document.createElement('option'); // letrehozza az option elemet
                option2.value = 'nem'; // beallitja az option erteket
                option2.innerText = 'nem'; // beallitja az option szoveget
                this.#inputElement.appendChild(option1); // hozzaadja az option elemet a selecthez
                this.#inputElement.appendChild(option2); // hozzaadja az option elemet a selecthez
            } 
            else {
                this.#inputElement = document.createElement('input'); // letrehozza az input elemet
                
            }
       
       
       
       
       
      
        this.#inputElement.id = id; // beallitja az input id-t
        this.#errorElement = document.createElement('span'); // letrehozza az error elemet
        this.#errorElement.className = 'error'; // beallitja az error osztalyt

}

 Div1(){
    const div = Div('field'); // letrehozza a div elemet
    const br1 = document.createElement('br'); // letrehozza a br elemet
    const br2 = document.createElement('br'); // letrehozza a br elemet
    const htmlElements = [this.#labelElement, br1, this.#inputElement, br2, this.#errorElement]; // letrehozza a tombot
    for (const element of htmlElements) { // a tomb elemein vegigmegyunk
        div.appendChild(element); // hozzaadja az elemet a divhez
    }
    return div; // visszaadja a divet   
}
 }



