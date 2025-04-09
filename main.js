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





// Hozzaadja a table div elemet a container divhez
containerDiv.appendChild(tableDiv);
// Hozzaadja a form div elemet a container divhez
containerDiv.appendChild(formDiv);
