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
    /**
    * @param {string} className stringet var parameterul
    */
    // constructor letrehozasa className parameterrel
    constructor(className){
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
     */
    constructor(Class){//constructor letrehozasa Class parameterrel
        super(Class); //meghivja a szulo osztaly konstruktorat
        const tbody = this.#tabalazatgen();//letrehozza a tablazatot    
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
     /**
     * létrehoz egy űrlapot a megadott osztálynévvel és mezőkkel
     * @param {string} Class - az osztálynév
     * @param {Array} fieldElementLista - a mezők listája
     */
    constructor(Class,fieldElementLista ) {//constructor letrehozasa Class parameterrel
        super(Class);//meghivja a szulo osztaly konstruktorat
        const form = document.createElement('form');//letrehozza a formot
        this.div.appendChild(form);//hozzaadja a formot a divhez
        
        for (const fieldelem of fieldElementLista) {// a tomb elemein vegigmegyunk
            const field = Div('field');//letrehozza a field elemet
            form.appendChild(field);//hozzaadja a field elemet a formhoz

            const label = document.createElement('label');//letrehozza a label elemet
            label.htmlFor = fieldelem.fieldid;//beallitja a label htmlfor erteket
            label.textContent = fieldelem.fieldlabel;//beallitja a label szoveget
            field.appendChild(label);//hozzaadja a label elemet a fieldhez


            

            if(fieldelem.fieldid === 'sikeres') // ha a fieldid sikeres
            {
                const select = document.createElement('select'); // letrehoz egy select elemet
                select.id = fieldelem.fieldid; // beallitja az input idt
                const option1 = document.createElement('option'); // letrehoz egy option elemet
                option1.value = 'igen'; // beallitja az option erteket
                option1.innerText = 'igen'; // beallitja az option szoveget
                const option2 = document.createElement('option'); // letrehoz egy option elemet
                option2.value = 'nem'; // beallitja az option erteket
                option2.innerText = 'nem'; // beallitja az option szoveget
                select.appendChild(option1); // hozzaadja az option elemet a selecthez
                select.appendChild(option2); // hozzaadja az option elemet a selecthez
                field.appendChild(select); // hozzaadja a select elemet a fieldhez
            }
            else {
                const input = document.createElement('input'); // letrehoz egy input elemet
                input.id = fieldelem.fieldid; // beallitja az input id-t
                field.appendChild(input); // hozzaadja az input elemet a fieldhez
        
            }
        }
            const button = document.createElement('button');//letrehozza a button elemet
            button.textContent = 'hozzaad';//beallitja a button tipusat
            form.appendChild(button);//hozzaadja a button elemet a formhoz
}}
