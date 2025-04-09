/**
 * @param {string} className stringet var parameterul
 */
class Area{ //letrehozza az Area osztalyt
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
        const div = document.createElement('div'); //letrehoz egy div elemet
        div.className = className;//aminek a class nevet  classNamere
        container.appendChild(div);//hozzaadja a divet a containerhez
    }
}