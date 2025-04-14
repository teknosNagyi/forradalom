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

const constinergeneralas = () => {
   // letrehoz egy container divet
   const containerDiv = Div("container")
   // hozzaadja a container divet a document bodyhoz
   document.body.appendChild(containerDiv)
   // visszaadja a container divet
   return containerDiv
}

// letrehoz egy tablazatot a konteneren belul es visszaadja a tablazat testet
const Tablazatgeneralas = (containerDiv) => {
   // letrehoz egy table divet
   const tableDiv = Div("table")
   // hozzaadja a table divet a containerhez
   containerDiv.appendChild(tableDiv)
   // letrehoz egy tablazatot
   const table1 = document.createElement("table")
   // hozzaadja a tablazatot a table divhez
   tableDiv.appendChild(table1)
   // letrehoz egy tablazat fejlecet
   const tablheader = document.createElement("thead")
   // hozzaadja a tablazat fejlecet a tablazathoz
   table1.appendChild(tablheader)
   // letrehoz egy sort a fejlecen
   const tableheaderow = document.createElement("tr")
   // hozzaadja a sort a fejlechez
   tablheader.appendChild(tableheaderow)
   // letrehoz egy tombot a fejlec cellainak
   const theadercella = ['forradalom','evszam','sikeres']
   // vegigmegy a cella elemein
   for (const celltartalom of theadercella) {
       // letrehoz egy fejlec cellat
       const cella = document.createElement("th")
       // beallitja a cella szoveget a cellatartalomra
       cella.innerText = celltartalom
       // hozzaadja a cellat a fejlec sorhoz
       tableheaderow.appendChild(cella)
   }
   // letrehoz egy tablazat testet
   const tablebody = document.createElement("tbody")
   // hozzaadja a tablazat testet a tablazathoz
   table1.appendChild(tablebody)
   // visszaadja a tablazat testet
   return tablebody
}

// letrehoz egy urlapot a konteneren belul es beallitja az uj elemek hozzaadasat a tablazathoz
const formgeneralas = (containerDiv, tablebody) => {
   // letrehoz egy form divet
   const formDiv = Div("form")
   // hozzaadja a form divet a containerhez
   containerDiv.appendChild(formDiv)
   // letrehoz egy form elemet
   const form1 = document.createElement("form")
   // hozzaadja a formot a form divhez
   formDiv.appendChild(form1)
   // letrehoz egy listat a form mezoknek
   const fieldElementLista = [
       // letrehoz egy forradalom mezot
       { fieldid: 'forradalom', fieldlabel: 'forradalom' },
       // letrehoz egy evszam mezot
       { fieldid: 'evszam', fieldlabel: 'evszam' },
       // letrehoz egy sikeres mezot
       { fieldid: 'sikeres', fieldlabel: 'sikeres' }
   ]
   // vegigmegy a listan
   for (const fieldelem of fieldElementLista) {
       // letrehoz egy mezot
       const field = Div("field")
       // hozzaadja a mezot a formhoz
       form1.appendChild(field)
       // letrehoz egy cimket a mezoknek
       const label = document.createElement("label")
       // beallitja a cimke htmlfor erteket a fieldidre
       label.htmlFor = fieldelem.fieldid
       // beallitja a cimke szoveget a fieldlabelre
       label.textContent = fieldelem.fieldlabel
       // hozzaadja a cimket a mezobe
       field.appendChild(label)
       // hozzaad egy sort a mezobe
       field.appendChild(document.createElement("br"))
       // ellenorizd ha a field id sikeres es hozzaadja a legordulo menut
       if (fieldelem.fieldid === 'sikeres') {
           // letrehoz egy select elemet
           const select = document.createElement("select")
           // beallitja a select id erteket a fieldidre
           select.id = fieldelem.fieldid
           // letrehoz egy opciot igen ertekkel
           const option1 = document.createElement("option")
           option1.value = "igen"
           option1.innerText = "igen"
           // letrehoz egy opciot nem ertekkel
           const option2 = document.createElement("option")
           option2.value = "nem"
           option2.innerText = "nem"
           // hozzaadja az opciokat a selecthez
           select.appendChild(option1)
           select.appendChild(option2)
           // hozzaadja a selectet a mezobe
           field.appendChild(select)
       } else {
           // letrehoz egy input elemet
           const input = document.createElement("input")
           // beallitja az input id erteket a fieldidre
           input.id = fieldelem.fieldid
           // hozzaadja az inputot a mezobe
           field.appendChild(input)
       }
       // hozzaad egy sort a mezobe
       field.appendChild(document.createElement("br"))
       // letrehoz egy span elemet a hiba uzenetnek
       const error = document.createElement("span")
       // beallitja az error osztalyt a spanhoz
       error.className = "error"
       // hozzaadja a hiba span-t a mezobe
       field.appendChild(error)
   }
   // letrehoz egy gombot a formhoz
   const button = document.createElement("button")
   // beallitja a gomb szoveget hozzaad
   button.textContent = "hozzaad"
   // hozzaadja a gombot a formhoz
   form1.appendChild(button)
   // hozzaadja az esemenyfigyelot a form bekuldesehez
   form1.addEventListener("submit", (e) => {
       // megakadalyozza az alapertelmezett esemenyt
       e.preventDefault()
       // letrehoz egy ures objektumot a mez adatoknak
       const objektumertek = {}
       // lekerni az input es select elemeket
       const inputelemek = e.target.querySelectorAll("input,select")
       // beallitja a valid erteket igazzal
       let valid = true
       // vegigmegy az inputelemeken
       for (const inputelem of inputelemek) {
           // lekerni az error elemet a szulo mezobol
           const error = inputelem.parentElement.querySelector(".error")
           // ha nincs error eleme
           if (!error) {
               // kiirja a konzolra hogy nincs error
               console.error("nincs error")
               // visszater a funkcioval
               return
           }
           // tisztitja az error uzenetet
           error.textContent = ""
           // ellenoriz ha az input erteke ures
           if (inputelem.value === "") {
               // beallitja az error uzenetet kotlezo ertekre
               error.textContent = "Kotelezo"
               // beallitja a valid erteket hamisra
               valid = false
           }
           // hozzaadja az objektumhoz a mez id es erteket
           objektumertek[inputelem.id] = inputelem.value
       }
       // ha a valid ertek igaz
       if (valid) {
           // hozzaadja az objektumot az arrayhez
           array.push(objektumertek)
           // hozzaadja a tablazathoz az uj sort
           sorhozzadas(tablebody, objektumertek)
       }
   })
}
// letrehoz egy uj sort a tablazat testben es feltolti a cellakert
const sorhozzadas = (tablebody, objektumertek) => {
   // letrehoz egy uj sort a tablazat testbe
   const tablebodyrow = document.createElement("tr")
   // hozzaadja az uj sort a tablazat testhez
   tablebody.appendChild(tablebodyrow)
   // letrehoz egy cellat a forradalom adatnak
   const forradalomcella = document.createElement("td")
   // beallitja a cella szoveget a forradalom ertekre
   forradalomcella.textContent = objektumertek.forradalom
   // hozzaadja a cellat a sorhoz
   tablebodyrow.appendChild(forradalomcella)
   // letrehoz egy cellat az evszam adatnak
   const evszamcella = document.createElement("td")
   // beallitja a cella szoveget az evszam ertekre
   evszamcella.textContent = objektumertek.evszam
   // hozzaadja a cellat a sorhoz
   tablebodyrow.appendChild(evszamcella)
   // letrehoz egy cellat a sikeres adatnak
   const sikerescella = document.createElement("td")
   // beallitja a cella szoveget a sikeres ertekre
   sikerescella.textContent = objektumertek.sikeres
   // hozzaadja a cellat a sorhoz
   tablebodyrow.appendChild(sikerescella)
}




// letrehoz egy file feltoltes esemenyfigyelot es feltolti a tablazatot a file tartalom alapjan
const filefeltoltes = (containerDiv, tablebody) => {
   // letrehoz egy file bemenetet
   const filebemenet = document.createElement("input")
   // hozzaadja a file bemenetet a containerhez
   containerDiv.appendChild(filebemenet)
   // beallitja a file bemenet tipusat file
   filebemenet.type = "file"
   // beallitja a file bemenet id erteket
   filebemenet.id = "filebemenet"
   // hozzaadja az esemenyfigyelot a file valasztasahoz
   filebemenet.addEventListener("change", (e) => {
       // lekerni a file-t a valasztasbol
       const file = e.target.files[0]
       // letrehoz egy file olvasot
       const reader = new FileReader()
       // hozzaadja az onload esemenyt a file olvasohoz
       reader.onload = () => {
           // felosztja a file tartalmat sorokra
           const filesorok = reader.result.split("\n")
           // elhagyja az elso sort a fejlec miatt
           const fejlec = filesorok.slice(1)
           // vegigmegy a file sorokon
           for (const sorok of fejlec) {
               // levagja a sor elejet es veget
               const levagottsor = sorok.trim()
               // felosztja a sort a ; alapjan
               const mezok = levagottsor.split(";")
               // letrehoz egy objektumot a forradalom adatnak
               const forradalmak = { //letrehoz egy forradalmak ovjektumot
                   forradalom: mezok[0], // forradalom neve
                   evszam: mezok[1], // forradalom evszama
                   sikeres: mezok[2] // forradalom sikeressege
               }
               // hozzaadja az objektumot az arrayhez
               array.push(forradalmak)
               // hozzaadja az uj sort a tablazathoz a file adatokbol
               sorhozzadas(tablebody, forradalmak)
           }
       }
       // beolvassa a file tartalmat szovegkent
       reader.readAsText(file)
   })
}
// letrehoz egy letoltes gombot es esemenyfigyelot a file letolteshez
const letoltes = (containerDiv) => {
   // letrehoz egy letoltes gombot
   const letoltesgomb = document.createElement("button")
   // beallitja a gomb szoveget letoltes
   letoltesgomb.textContent = "letoltes"
   // hozzaadja a gombot a containerhez
   containerDiv.appendChild(letoltesgomb)
   // hozzaadja az esemenyfigyelot a gombhoz
   letoltesgomb.addEventListener("click", () => {
       // letrehoz egy linket a letolteshez
       const link = document.createElement("a")
       // letrehoz egy tombot a tartalomnal ahol az elso sor a fejlec
       const tartalomarray = ["forradalom;evszam;sikeres"]
       // vegigmegy az array elemein
       for (const forradalom of array) {
           // hozzaadja az objektum adatait a tombhoz
           tartalomarray.push(`${forradalom.forradalom};${forradalom.evszam};${forradalom.sikeres}`)
       }
       // osszefuzi a tomb tartalmat uj sorokkal
       const tartalom = tartalomarray.join("\n")
       // letrehoz egy blob-ot a tartalomnal
       const file = new Blob([tartalom])
       // beallitja a link href erteket a blob objektumra
       link.href = URL.createObjectURL(file)
       // beallitja a letoltesi nevet
       link.download = "forradalom.csv"
       // aktivalja a linket a letolteshez
       link.click()
       // visszavonja a letoltesi linket
       URL.revokeObjectURL(link.href)
   })
}

// letrehoz egy szuro formot a tablazat esemenyek szurtesere
const szuro = (containerDiv, tablebody) => {
   // letrehoz egy szuroform divet
   const szuroformdiv = Div("szuroform")
   // hozzaadja a szuroform divet a containerhez
   containerDiv.appendChild(szuroformdiv)
   // letrehoz egy formot a szurohoz
   const formszuro = document.createElement("form")
   // hozzaadja a formot a szuroform divhez
   szuroformdiv.appendChild(formszuro)
   // letrehoz egy select elemet a szurohoz
   const select = document.createElement("select")
   // hozzaadja a selectet a formhoz
   formszuro.appendChild(select)
   // letrehoz egy tombot az opciokhoz
   const options = [
       // letrehoz egy ures opciot
       { value: "", innerText: "" },
       // letrehoz egy opciot a forradalom nevehez
       { value: "forradalom", innerText: "forradalom" },
       // letrehoz egy opciot az evszamhoz
       { value: "evszam", innerText: "evszam" },
       // letrehoz egy opciot a sikereshez
       { value: "sikeres", innerText: "sikeres" }
   ]
   // vegigmegy az opcions tomb elemein
   for (const option of options) {
       // letrehoz egy opcio elemet
       const optionElem = document.createElement("option")
       // beallitja az opcio erteket
       optionElem.value = option.value
       // beallitja az opcio szoveget
       optionElem.innerText = option.innerText
       // hozzaadja az opciot a selecthez
       select.appendChild(optionElem)
   }
   // letrehoz egy input elemet a szurohoz
   const input = document.createElement("input")
   // beallitja az input id erteket szuroinput
   input.id = "szuroinput"
   // hozzaadja az inputot a formhoz
   formszuro.appendChild(input)
   // letrehoz egy gombot a szurohoz
   const szurogomb = document.createElement("button")
   // beallitja a gomb szoveget szuro
   szurogomb.textContent = "szuro"
   // hozzaadja a gombot a formhoz
   formszuro.appendChild(szurogomb)
   // hozzaadja az esemenyfigyelot a szuro formhoz
   formszuro.addEventListener("submit", (e) => {
       // megakadalyozza az alapertelmezett esemenyt
       e.preventDefault()
       // lekerni a bemenetet a szurohoz
       const filterbemenet = e.target.querySelector("#szuroinput")
       // lekerni a select elemet
       const selectElem = e.target.querySelector("select")
       // vegigmegy az array elemein es szur a feltetelekkel
       const szurttomb = filter(array, (forradalom) => {
           // ha a select erteke forradalom
           if (selectElem.value === "forradalom") {
               // osszehasonlitja a bemenetet a forradalom nevevel
               return filterbemenet.value == forradalom.forradalom 
               // ha a select erteke evszam
           } else if (selectElem.value === "evszam") {
               // osszehasonlitja a bemenetet a forradalom evszamaval
               return filterbemenet.value == forradalom.evszam
               // ha a select erteke sikeres
           } else if (selectElem.value === "sikeres") {
               // osszehasonlitja a bemenetet a forradalom sikeressegevel
               return filterbemenet.value == forradalom.sikeres
           } else {
               // ha egyik feltetel sem teljesul
               return true
           }
       })
       // kiuritjuk a tablazat testet
       tablebody.innerHTML = ""
       // vegigmegy az eredmeny tomb elemein
       for (const szurtelem of szurttomb) {
           // hozzaadja az uj sort a tablazathoz
           sorhozzadas(tablebody, szurtelem)
       }
   })
}