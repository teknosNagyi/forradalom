class FilterForm extends Area{
    /**
     * 
     * @param {string} Class 
     * @param {string} manager 
     */
    constructor(Class,manager){
        super(Class,manager); //super leszarmazott osztaly

        const form = document.createElement('form'); //letrehozza a formot
        this.div.appendChild(form); //hozzadja a formot a divhez

        const select = document.createElement('select'); //letrehozza a selectet
        form.appendChild(select); //hozzadja a selectet a formhoz

        const options = [ //letrehozza az optionset
            {value: '', innerText: ''}, //letrehozza az ures valuet
            {value: 'forradalom', innerText: 'Forradalom'}, //letrehozza a forradalom valuet
            {value: 'evszam', innerText: 'Evszam'}, //letrehozza az evszam valuet
            {value: 'sikeres', innerText: 'Sikeres'} //letrehozza a sikeres valuet

        ];

        for (const option of options) { //visszater az optionnal
            const opt = document.createElement('option'); //letrehozza az opt elemet
            opt.value = option.value; //beallitja az opt valuejat
            opt.innerText = option.innerText; //beallitja az opt textContentjat
            select.appendChild(opt); //hozzadja az opt elemet a selecthez
        }

        const input = document.createElement('input'); //letrehozza az input elemet
        input.id = 'szuroinput'; //beallitja az input idjat
        form.appendChild(input); //hozzadja az input elemet a formhoz

        const button = this.gombletrehozasa("szuro") //letrehozza a gombot
        form.appendChild(button); //hozzadja a button elemet a formhoz

        form.addEventListener('submit', (e) => { //letrehozza az eventet
            e.preventDefault(); //megelozi az alapertelmezett viselkedest
            const filterbemenet= e.target.querySelector('#szuroinput'); //beallitja a filterbemenetet
            const kivalasztott = e.target.querySelector('select').value; //beallitja a kivalasztott elemet

            this.manager.filter((forradalom) => { //letrehozza a filtert
                if(kivalasztott === "") return true; //ha a kivalasztott ures
                if(kivalasztott === "evszam") { //ha a kivalasztott evszam
                    return forradalom[kivalasztott] === Number(filterbemenet.value); //visszater az evszammal
                }
                return forradalom[kivalasztott] === filterbemenet.value; //visszater a kivalasztott szurovel
            });
});
            
}
}
