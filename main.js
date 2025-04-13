const array = []; // letrehoz egy ures tombot
// Egy fuggveny, ami letrehoz egy div elemet a megadott nevvel
const Div = (className) => {
    // Letrehoz egy uj div elemet
    const div = document.createElement("div");
    // Beallitja az nevet a megadott ertekre
    div.className = className;
    // Visszaadja a letrehozott div elemet
    return div;
};

// Letrehoz egy div elemet container nevvel
const containerDiv = Div("container");
// Hozzaadja a container div elemet a dokumentum body reszhez
document.body.appendChild(containerDiv);

// Letrehoz egy div elemet table nevvel
const tableDiv = Div("table");
// Letrehoz egy div elemet form nevvel
const formDiv = Div("form");

const table1 = document.createElement("table");// letrehoz egy tablazatot
// hozzaadja a tablazatot a tabledivhez
tableDiv.appendChild(table1);
const tablheader=document.createElement("thead");// letrehoz egy thead elemet
table1.appendChild(tablheader);// hozzaadja a thead elemet a tablazathoz
const tableheaderow=document.createElement("tr");// letrehoz egy sort a thead elemhez
tablheader.appendChild(tableheaderow);// hozzaadja a sort a thead elemhez

const theadercella=['forradalom', 'evszam', 'sikeres'];// letrehoz egy tombot a fejlec cellainak tartalmahoz
// a tomb elemeit vegigmegyunk
for (const celltartalom of theadercella){
    const cella=document.createElement("th"); // letrehoz egy th cellat
    cella.innerText=celltartalom; // a cella tartalma a tomb elemei lesznek
    tableheaderow.appendChild(cella); // hozzaadja a cellat a sorhoz
}

const tablebody=document.createElement("tbody"); // letrehoz egy tbody elemet
table1.appendChild(tablebody); // hozzaadja a tbody elemet a tablazathoz

const form1 = document.createElement("form"); // letrehoz egy form elemet
formDiv.appendChild(form1); // hozzaadja a form1 elemet a formdivhez
const fieldElementLista= [{ // letrehoz egy tombot a form elemeihez
    fieldid:'forradalom', // letrehoz egy forradalom id-t
    fieldlabel:'forradalom' // letrehoz egy forradalom labelt
},{
    fieldid:'evszam', // letrehoz egy evszam id-t
    fieldlabel:'evszam' // letrehoz egy evszam labelt
},{ 
    fieldid:'sikeres', // letrehoz egy sikeres id-t
    fieldlabel:'sikeres' // letrehoz egy sikeres labelt
}]

for (const fieldelem of fieldElementLista) // a tomb elemein vegigmegyunk
{
    const field = Div('field'); // letrehoz egy field elemet
    form1.appendChild(field); // hozzaadja a field elemet a formhoz
    const label = document.createElement('label'); // letrehoz egy label elemet
    label.htmlFor = fieldelem.fieldid; // beallitja a label htmlfor erteket
    label.textContent = fieldelem.fieldlabel; // beallitja a label szoveget
    field.appendChild(label); // hozzaadja a label elemet a fieldhez

    const input = document.createElement('input'); // letrehoz egy input elemet
    input.id = fieldelem.fieldid; // beallitja az input idt

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

const button = document.createElement('button'); // letrehoz egy button elemet
button.textContent = 'hozzaad'; // beallitja a button tipusat
form1.appendChild(button); // hozzaadja a button elemet a formhoz

form1.addEventListener('submit', (e) => {// hozzaad egy eseményfigyelot a formhoz
    e.preventDefault(); // megakadalyozza az alapertelmezett viselkedest
    const objektumertek = {}; // letrehoz egy ures objektumot
    const inputelemek= e.target.querySelectorAll('input,select'); // letrehoz egy tombot az input elemekhez
    for (const inputelem of inputelemek) { // a tomb elemein vegigmegyunk
        objektumertek[inputelem.id] = inputelem.value; // beallitja az objektum ertekeit az input elemek id-javal
    }
    array.push(objektumertek); // hozzaadja az objektumot a tombhoz
    const tablebodyrow = document.createElement('tr'); // letrehoz egy sort a tablazathoz
    tablebody.appendChild(tablebodyrow); // hozzaadja a sort a tablazathoz

    const forradalomcella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
    forradalomcella.textContent=objektumertek.forradalom // beallitja a cella szoveget az objektum ertekeivel
    tablebodyrow.appendChild(forradalomcella); // hozzaadja a cellat a sorhoz

    const evszamcella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
    evszamcella.textContent=objektumertek.evszam // beallitja a cella szoveget az objektum ertekeivel
    tablebodyrow.appendChild(evszamcella); // hozzaadja a cellat a sorhoz

    const sikerescella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
    sikerescella.textContent=objektumertek.sikeres // beallitja a cella szoveget az objektum ertekeivel
    tablebodyrow.appendChild(sikerescella); // hozzaadja a cellat a sorhoz
} )


// Hozzaadja a table div elemet a container divhez
containerDiv.appendChild(tableDiv);
// Hozzaadja a form div elemet a container divhez
containerDiv.appendChild(formDiv);
