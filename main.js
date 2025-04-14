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
const filter = (array, callback) => { // letrehoz egy filter fuggvenyt
    const szurtArray = []; // letrehoz egy ures tombot
    for (const element of array) { // vegigmegy a tomb elemein
        if (callback(element)) { // ha a callback igaz
            szurtArray.push(element); // hozzaadja az elemet a tombhoz
        }
    }
    return szurtArray; // visszaadja a tombot
}


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
    field.appendChild(document.createElement('br')); // hozzaad egy sort a fieldhez
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
    field.appendChild(document.createElement('br')); // hozzaad egy sort a fieldhez
    const error = document.createElement('span'); // letrehoz egy span elemet
    error.className = 'error'; // beallitja az error osztalyt
    field.appendChild(error); // hozzaadja a span elemet a fieldhez


     
} 

const button = document.createElement('button'); // letrehoz egy button elemet
button.textContent = 'hozzaad'; // beallitja a button tipusat
form1.appendChild(button); // hozzaadja a button elemet a formhoz

form1.addEventListener('submit', (e) => {// hozzaad egy eseményfigyelot a formhoz
    e.preventDefault(); // megakadalyozza az alapertelmezett viselkedest
    const objektumertek = {}; // letrehoz egy ures objektumot
    const inputelemek= e.target.querySelectorAll('input,select'); // letrehoz egy tombot az input elemekhez
    let valid=true; // letrehoz egy valos valtozot
    for (const inputelem of inputelemek) { // a tomb elemein vegigmegyunk
        const error = inputelem.parentElement.querySelector('.error'); // letrehoz egy error valtozot
        if(!error){
            console.error('nincs error'); // ha nem talalhato error span, akkor kiirja a konzolra
            return; //vissza adja
        }
        error.textContent = ''; // beallitja az error szoveget uresre
        if(inputelem.value === '') // ha az input elem erteke ures
        {
            error.textContent = 'Kotelezo'; // beallitja az error szoveget
            valid=false; // beallitja a valid valtozot hamisra
        }

       objektumertek[inputelem.id] = inputelem.value; // beallitja az objektum ertekeit az input elemek id-javal
    }
    if(valid){ // ha a valid valtozo igaz
        
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
    }
} )


// Hozzaadja a table div elemet a container divhez
containerDiv.appendChild(tableDiv);
// Hozzaadja a form div elemet a container divhez
containerDiv.appendChild(formDiv);

const filebemenet = document.createElement('input'); // letrehoz egy file input elemet
containerDiv.appendChild(filebemenet); // hozzaadja a file input elemet a container divhez
filebemenet.type = 'file'; // beallitja a file input tipusat
filebemenet.id = 'filebemenet'; // beallitja a file input id-t
filebemenet.addEventListener('change', (e) => { // hozzaad egy eseményfigyelot a file inputhoz
    const file = e.target.files[0]; // letrehoz egy file valtozot
    const reader = new FileReader(); // letrehoz egy FileReader objektumot
    reader.onload = () => { // hozzaad egy onload eseményfigyelot a FileReader objektumhoz
        const filesorok = reader.result.split('\n'); // letrehoz egy tombot a file soraihoz
        const fejlec = filesorok.slice(1); // letrehoz egy tombot a fejlec sorahoz
        for (const sorok of fejlec) { // a tomb elemein vegigmegyunk
            const levagottsor= sorok.trim(); // levagja a sor elejet es veget
            const mezok = levagottsor.split(';'); // letrehoz egy tombot a sorok mezoihez
            const forradalmak={ // letrehoz egy forradalmak objektumot
                forradalom: mezok[0], // beallitja a forradalom erteket
                evszam: mezok[1], // beallitja az evszam erteket
                sikeres: mezok[2] // beallitja a sikeres erteket
            }
            array.push(forradalmak); // hozzaadja a forradalmak objektumot a tombhoz
            const tbodyrow = document.createElement('tr'); // letrehoz egy sort a tablazathoz
            tablebody.appendChild(tbodyrow); // hozzaadja a sort a tablazathoz

            const forradalomcella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
            forradalomcella.textContent=forradalmak.forradalom // beallitja a cella szoveget az objektum ertekeivel
            tbodyrow.appendChild(forradalomcella); // hozzaadja a cellat a sorhoz

            const evszamcella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
            evszamcella.textContent=forradalmak.evszam // beallitja a cella szoveget az objektum ertekeivel
            tbodyrow.appendChild(evszamcella); // hozzaadja a cellat a sorhoz

            const sikerescella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
            sikerescella.textContent=forradalmak.sikeres // beallitja a cella szoveget az objektum ertekeivel
            tbodyrow.appendChild(sikerescella); // hozzaadja a cellat a sorhoz
        }
    }
    reader.readAsText(file); // beolvassa a file tartalmat
    
})

const letoltesgomb= document.createElement('button'); // letrehoz egy button elemet
letoltesgomb.textContent='letoltes'; // beallitja a button szoveget
containerDiv.appendChild(letoltesgomb); // hozzaadja a button elemet a container divhez
letoltesgomb.addEventListener('click', () => { // hozzaad egy eseményfigyelot a buttonhoz
    const link = document.createElement('a'); // letrehoz egy link elemet
    const tartalomarray=["forradalom;evszam;sikeres"]; // letrehoz egy ures tombot a tartalomhoz
    for(const forradalom of array) // a tomb elemein vegigmegyunk
    {
        tartalomarray.push(`${forradalom.forradalom};${forradalom.evszam};${forradalom.sikeres}`); // hozzaadja a forradalom ertekeit a tombhoz
    }
    const tartalom = tartalomarray.join('\n'); // beallitja a tartalom tomb ertekeit
    const file = new Blob([tartalom]); // letrehoz egy file objektumot
    link.href = URL.createObjectURL(file); // beallitja a link href erteket
    link.download = 'forradalom.csv'; // beallitja a link letoltesi nevet
    link.click(); // meghivja a linket
    URL.revokeObjectURL(link.href); // visszavonja a linket
})

const szuroformdiv = Div('szuroform'); // letrehoz egy div elemet a szuroformhoz
containerDiv.appendChild(szuroformdiv); // hozzaadja a szuroform div elemet a container divhez

const formszuro = document.createElement('form'); // letrehoz egy form elemet
szuroformdiv.appendChild(formszuro); // hozzaadja a form elemet a szuroform divhez
const select = document.createElement('select'); // letrehoz egy select elemet
formszuro.appendChild(select); // hozzaadja a select elemet a formhoz

const options = [{// letrehoz egy tombot az option elemekhez
    value: '',
    innerText: '' // beallitja az option szoveget
},
{
    value: 'forradalom', // beallitja az option erteket
    innerText: 'forradalom' // beallitja az option szoveget
}, 
{
    value: 'evszam', // beallitja az option erteket
    innerText: 'evszam' // beallitja az option szoveget
}, 
{
    value: 'sikeres', // beallitja az option erteket
    innerText: 'sikeres' // beallitja az option szoveget    
} ]

for (const option of options) // a tomb elemein vegigmegyunk
{
    const option3 = document.createElement('option'); // letrehoz egy option elemet
    option3.value = option.value; // beallitja az option erteket
    option3.innerText = option.innerText; // beallitja az option szoveget
    select.appendChild(option3); // hozzaadja az option elemet a selecthez
}

const input = document.createElement('input'); // letrehoz egy input elemet
input.id = 'szuroinput'; // beallitja az input id-t
formszuro.appendChild(input); // hozzaadja az input elemet a szuroform divhez

const szurogomb = document.createElement('button'); // letrehoz egy button elemet
szurogomb.textContent = 'szuro'; // beallitja a button szoveget
formszuro.appendChild(szurogomb); // hozzaadja a button elemet a formhoz

formszuro.addEventListener('submit', (e) => { // hozzaad egy eseményfigyelot a formhoz
    e.preventDefault(); // megakadalyozza az alapertelmezett viselkedest
    const filterbemenet = e.target.querySelector('#szuroinput'); // letrehoz egy filterbemenet valtozot
    const select = e.target.querySelector('select'); // letrehoz egy select valtozot

    const szurttomb = filter(array, (forradalom) => { // letrehoz egy szurttomb valtozot
        if(select.value == "forradalom"){ // ha a select erteke forradalom
            if(filterbemenet.value == forradalom.forradalom){ // ha a filterbemenet erteke megegyezik a forradalom ertekevel
                return true; // igazat ad vissza
            }
        }
        else if (select.value == "evszam"){ // ha a select erteke evszam 
            if(filterbemenet.value == forradalom.evszam){ // ha a filterbemenet erteke megegyezik a forradalom ertekevel
                return true; // igazat ad vissza
            }
           
        }else if (select.value == "sikeres"){ // ha a select erteke sikeres
            if(filterbemenet.value == forradalom.sikeres){ // ha a filterbemenet erteke megegyezik a forradalom ertekevel
                return true; // igazat ad vissza
            }
        }else {
            return true; // ha a filterbemenet erteke ures
        }
})
tablebody.innerHTML = ''; // beallitja a tablazatot uresre
for(const szurtelem of szurttomb){ // a szurttomb elemein vegigmegyunk
    const tablebodyrow = document.createElement('tr'); // letrehoz egy sort a tablazathoz
    tablebody.appendChild(tablebodyrow); // hozzaadja a sort a tablazathoz

    const forradalomcella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
    forradalomcella.textContent=szurtelem.forradalom // beallitja a cella szoveget az objektum ertekeivel
    tablebodyrow.appendChild(forradalomcella); // hozzaadja a cellat a sorhoz

    const evszamcella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
    evszamcella.textContent=szurtelem.evszam // beallitja a cella szoveget az objektum ertekeivel
    tablebodyrow.appendChild(evszamcella); // hozzaadja a cellat a sorhoz

    const sikerescella = document.createElement('td'); // letrehoz egy cellat a tablazathoz
    sikerescella.textContent=szurtelem.sikeres // beallitja a cella szoveget az objektum ertekeivel
    tablebodyrow.appendChild(sikerescella); // hozzaadja a cellat a sorhoz

}



})