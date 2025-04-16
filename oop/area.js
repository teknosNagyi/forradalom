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
     * @param {string} className class name parameter
     * @param {Manager} manager manager objektum
     */
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
    /**
 * @param {string} label a gomb szovege
 * @returns {HTMLButtonElement} visszaadja a letrehozott gombot
 */
    gombletrehozasa(label){
        const gomb = document.createElement('button');//letrehozza a button elemet
        gomb.textContent = label;//beallitja a button tipusat
        return gomb;//visszaadja a gombot
    }
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
        
        this.manager.setForradalomhozzaadascallback(this.#forrsorracallback(tbody));//beallitja a tablarendercallbacket
        this.manager.setTablarendercallback((adatok) => { //beallitja a tablarendercallbacket
            if (!adatok) return; // csak akkor frissiti a tablazatot, ha van uj adat
            this.#Tablarendercallback(adatok); //meghivja a tablarendercallbacket
        });
        }
        /**
 * @param {HTMLElement} tbody a tablazat torzse
 * @returns {Function} visszaadja a tablarendercallback fuggvenyt
 */
        #Tablarendercallback(tbody){//letrehozza a tablarendercallback fuggvenyt
                
                return (forradalomok) => {//visszater a forradalomokkal
                    this.div.querySelector('tbody').innerHTML = '';//torli a tablazatot
                    for (const forradalom of forradalomok) {//a forradalom tomb elemein vegigmegyunk
                        this.#forrsorra(forradalom,tbody);//letrehozza a tablazatot
                    }
                }
            }
/**
 * @param {HTMLElement} tbody a tablazat torzse
 * @returns {Function} visszaadja a forrsorracallback fuggvenyt
 */
        #forrsorracallback(tbody){//letrehozza a forrsorracallback fuggvenyt
                
                    return (forradalom) => {//visszater a forradalommal
                        this.#forrsorra(forradalom,tbody);//letrehozza a tablazatot
                    }
                }
/**
 * @param {HTMLElement} sor a tablazat sora
 * @param {string} tartalom a cella tartalma
 * @param {string} [type='td'] a cella tipusa
 */
    
    #forrsorra(forradalom,tbody){//letrehozza a forradalom sort
        
        const sor = document.createElement('tr');//letrehozza a sort
       
        this.#createCella(sor,forradalom.forradalom);//letrehozza a cellat
        this.#createCella(sor,forradalom.evszam);//letrehozza a cellat
        this.#createCella(sor,forradalom.sikeres);//letrehozza a cellat
         tbody.appendChild(sor);//hozzaadja a sort a tablazat testhez
    }
    /**
 * @returns {HTMLElement} visszaadja a tablazat torzset (tbody)
 */
    #createCella(sor,tartalom,type='td'){//letrehozza a cellat
        const cella = document.createElement(type);//letrehozza a cellat
        cella.innerText = tartalom;//beallitja a cella tartalmat
        sor.appendChild(cella);//hozzaadja a cellat a sorhoz
    }
    /**
     * A tablazat generalasat vegzi el
     * @returns {HTMLElement} tablebody
     */


    #tabalazatgen(){//letrehozza a tablazatot
        const table = document.createElement('table');//letrehozza a tablet
        this.div.appendChild(table);//hozzaadja a tablet a divhez
        const tableheader = document.createElement('thead');//letrehozza a thead elemet
        table.appendChild(tableheader);//hozzaadja a thead elemet a tablehoz
        const tableheaderow = document.createElement('tr');//letrehozza a sort
        tableheader.appendChild(tableheaderow);//hozzaadja a sort a thead elemhez
        const theadercella = ['forradalom', 'evszam', 'sikeres'];// letrehoz egy tombot a fejlec cellainak tartalmaibol
        for (const celltartalom of theadercella) {// a tomb elemein vegigmegyunk
           this.#createCella(tableheaderow, celltartalom, 'th');//letrehozza a cellat
        }
        const tablebody = document.createElement('tbody');// letrehoz egy tbody elemet
        table.appendChild(tablebody);// hozzaadja a tbody elemet a tablazathoz
        return tablebody;//visszaadja a tablebodyt
    
}
}
/**
 * Az Area osztalybol leszarmazott osztaly, amely urlapot hoz letre
 */
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
        const form = this.#createForm(fieldElementLista); //letrehozza a formot
        form.addEventListener('submit', this.#formsubmit())// hozzaadja az event listenert a formhoz
    }
    /**
 * @returns {HTMLElement} visszaadja a tablazat torzset (tbody)
 */
    #createForm(fieldElementLista) {//letrehozza a formot
        const form = document.createElement('form');//letrehozza a formot
        this.div.appendChild(form);//hozzaadja a formot a divhez
        
        for (const fieldelem of fieldElementLista) {// a tomb elemein vegigmegyunk
            const field = new Formfield(fieldelem.fieldid, fieldelem.fieldlabel);//letrehozza a fieldet
        
            this.#formarray.push(field);//beallitja a formarrayt
            form.appendChild(field.Div1());//hozzaadja a fieldet a formhoz
        }
            const button = this.gombletrehozasa('hozzaadas');//letrehozza a gombot
            form.appendChild(button);//hozzaadja a button elemet a formhoz
            return form;//visszaadja a formot
    }
   

/**
 * @returns {Function} visszaadja a form submit esemenyfigyelojet
 */

    #formsubmit(){//letrehozza a formsubmit fuggvenyt
           return (e) => {//hozzaad egy event listenert a formhoz
                e.preventDefault();//megelozi az alapertelmezett viselkedest
               if(this.#validate()){ //ha a validacio sikeres
                const forrObj= this.#createforrObj();//letrehozza a forrObj objektumot
                
                const forradalom = new Forradalom(forrObj.forradalom, forrObj.evszam, forrObj.sikeres);//letrehozza a forradalmat
               this.manager.addForr(forradalom);//meghivja a manager forradalomhozzaadas fuggvenyet
            }
}
}
/**
 * @returns {boolean} visszaadja, hogy van-e hiba az urlapon
 */
#validate(){//letrehozza a validate fuggvenyt
    let error = true;//beallitja az error valtozot
    for (const field of this.#formarray) {//a formarray elemein vegigmegyunk
        field.error = '';//beallitja az error erteket
        if(field.value === ''){//ha a value ures
            field.error = 'kitoltendo';//beallitja az error erteket
            error = false;//beallitja az error valtozot
        }
    }
    return error;//visszaadja az error valtozot

} 
/**
 * @returns {Object} visszaadja az urlap mezok ertekeit tartalmazo objektumot
 */
#createforrObj(){//letrehozza a forrObj fuggvenyt
    
        const forrObj = {};//letrehozza a forrObj objektumot
        for (const field of this.#formarray) {//a formarray elemein vegigmegyunk
           if(field.id === 'sikeres'){//ha a field idje sikeres
                forrObj[field.id] = field.value;//beallitja az erteket
            }else{//ha nem
                forrObj[field.id] = field.value;//beallitja az erteket
            }
        }
        return forrObj;//visszaadja a forrObj objektumot
    }
}
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
        input.addEventListener('change',this.#inputchange()) //hozzaadja az event listenert az inputhoz
        
        const letoltesbutton = document.createElement('button'); //letrehozza a button elemet       
        this.div.appendChild(letoltesbutton); //hozzaadja a button elemet a divhez
        letoltesbutton.addEventListener('click',this.#letoltes()) //hozzaadja az event listenert a buttonhoz
        letoltesbutton.textContent= 'letoltes'; //beallitja a button szoveget

       
    }
      /**
      * 
      * @returns {EventListener} a gomb esedmenykezeloje
      */
    #letoltes(){ //letrehozza a letoltes fuggvenyt
        return () => { //hozzaad egy event listenert a buttonhoz
            const link = document.createElement('a'); //letrehozza a link elemet
            const content = this.manager.szovegexportgeneralas(); //letrehozza a constent valtozot
            const file = new Blob([content])
            link.href = URL.createObjectURL(file); //beallitja a link href erteket
            link.download = 'forradalom.csv'; //beallitja a link letoltesi nevet
            link.click(); //meghivja a linket
            URL.revokeObjectURL(link.href); //meghivja a linket

}

    }
     /**
      * 
      * @returns {EventListener} inputchange
      */
    #inputchange(){ //letrehozza az inputchange fuggvenyt
        return (e) => { //hozzaad egy event listenert az inputhoz
            const selectfile = e.target.files[0]; //letrehozza a selectfile valtozot
            if(!selectfile){
                console.error('nincs file'); //ha nincs file
                return; //visszater
            }
            const reader = new FileReader(); //letrehozza a reader elemet
            reader.onload = () => { //letrehozza a reader onload fuggvenyt
                const sorok = reader.result.split('\n'); //letrehozza a sorokat
                const forrsorok = sorok.slice(1); //letrehozza a forrsorokat
                for (const forrsor of forrsorok) { //a forrsorok elemein vegigmegyunk
                    const filterrow = forrsor.trim(); //letrehozza a filterrow valtozot
                    const forradalom = filterrow.split(';'); //letrehozza a forradalmat
                    const forradalomObj = new Forradalom(forradalom[0], Number(forradalom[1]), forradalom[2]); //letrehozza a forradalom objektumot
                    this.manager.addForr(forradalomObj); //meghivja a manager addforr fuggvenyet
                }
        }
        reader.readAsText(selectfile); //meghivja a reader readAsText fuggvenyet
    }
}
}

class Formfield{ //letrehozza a Formfield osztalyt

    #id; // privat id elem
    #inputElement;  // privat input elem
    #labelElement; // privat label elem
    #errorElement; // privat error elem

   /**
 * letrehoz egy uj Formfield objektumot
 * @param {string} id  az input elem idje
 * @param {string} labelContent  a label szovege
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
    /**
     * Az input mezőt tartalmazó div létrehozása
     * @returns {HTMLElement} - a div, amely az input mezőt tartalmazza
     */
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



