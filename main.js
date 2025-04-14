const array = []; // letrehoz egy ures tombot
 //letrehoz efy containerdivet a containergeneralas fuggvennyel
const containerDiv = constinergeneralas()
    // letrehoz egy tablazatot es visszaadja a tablazat testet
    const tablebody = Tablazatgeneralas(containerDiv)
    // letrehoz egy formot a tablazathoz
    formgeneralas(containerDiv, tablebody)
    // letrehoz egy file feltoltes esemenyfigyelot
    filefeltoltes(containerDiv, tablebody)
    // letrehoz egy letoltes gombot
    letoltes(containerDiv)
    // letrehoz egy szuro formot
    szuro(containerDiv, tablebody)