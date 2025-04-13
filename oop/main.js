const separator = document.createElement("hr");// hogy a html-en egyszeruen megtalalhato legyen az elvalaszto oop es sima kozott
document.body.appendChild(separator);//hozzaadja a separatort a bodyhoz

const fieldLista = [{// letrehoz egy tombot a form elemeihez
    fieldid: 'forradalom', // letrehoz egy forradalom id-t
    fieldlabel: 'forradalom' // letrehoz egy forradalom labelt
}, {
    fieldid: 'evszam', // letrehoz egy evszam id-t
    fieldlabel: 'evszam' // letrehoz egy evszam labelt
}, {
    fieldid: 'sikeres', // letrehoz egy sikeres id-t
    fieldlabel: 'sikeres' // letrehoz egy sikeres labelt
}]
const manager = new Manager();//letrehozza a managert
const table = new Table('table',manager);//letrehozza a tablet
const form = new Form('form',fieldLista,manager);//letrehozza a formot



