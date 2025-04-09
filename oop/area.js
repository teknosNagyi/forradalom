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
        // megnezi van e mar containeroop class
        let container = document.querySelector('.containeroop');
        // ha nincs belep az ifbe
        if(!container){
            container = document.createElement('div');//letrehozza a containert
            container.className = 'containeroop';//beallitja a class nevet containeroop-ra
            document.body.appendChild(container);//hozzaadja a bodyhoz
        }
        this.#div = document.createElement('div');//letrehozza a divet
        this.#div.className = className;//beallitja a class nevet
        container.appendChild(this.#div);//hozzaadja a divet a containerhez
    }
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
    }
}

class Form extends Area {
    constructor(Class) {//constructor letrehozasa Class parameterrel
        super(Class);//meghivja a szulo osztaly konstruktorat
        const form = document.createElement('form');//letrehozza a formot
        this.div.appendChild(form);//hozzaadja a formot a divhez
        const fieldElementLista = [{// letrehoz egy tombot a form elemeihez
            fieldid: 'forradalom', // letrehoz egy forradalom id-t
            fieldlabel: 'forradalom' // letrehoz egy forradalom labelt
        }, {
            fieldid: 'evszam', // letrehoz egy evszam id-t
            fieldlabel: 'evszam' // letrehoz egy evszam labelt
        }, {
            fieldid: 'sikeres', // letrehoz egy sikeres id-t
            fieldlabel: 'sikeres' // letrehoz egy sikeres labelt
        }]
        for (const fieldelem of fieldElementLista) {// a tomb elemein vegigmegyunk
            const field = Div('field');//letrehozza a field elemet
            form.appendChild(field);//hozzaadja a field elemet a formhoz
            const label = document.createElement('label');//letrehozza a label elemet
            label.htmlFor = fieldelem.fieldid;//beallitja a label htmlfor erteket
            label.textContent = fieldelem.fieldlabel;//beallitja a label szoveget
            field.appendChild(label);//hozzaadja a label elemet a fieldhez
            const input = document.createElement('input');//letrehozza az input elemet
            input.id = fieldelem.fieldid;//beallitja az input idt
            field.appendChild(input);//hozzaadja az input elemet a fieldhez
        }
            const button = document.createElement('button');//letrehozza a button elemet
            button.textContent = 'hozzaad';//beallitja a button tipusat
            form.appendChild(button);//hozzaadja a button elemet a formhoz
}}
