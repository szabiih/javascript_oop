/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback Valami 
 * @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

//renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
//renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table{
    //  Privát mező(k)
    #tbody;

    /**
     * Konstruktor
     * @param {HeaderType[]} headerArr 
     */
    constructor(headerArr){
        this.#tbody = makeTableBodyWithHeader(headerArr);
    }

    /**
     * Table osztály függvénye (példányokra lehet hívni)
     */
    get tbody(){
        return this.#tbody;
    }

    /**
     * Table osztály függvénye (példányokra lehet hívni)
     * @param {Valami} callback
     */
    appendRow(callback){
        callback(this.#tbody);
    }
}

class RowspanBodyArr extends Table{
    //  Privát mező(k)

    /**
     * Konstruktor
     * @param {HeaderType[]} headerArr
     */
    constructor(headerArr){
        super(headerArr);
    }

    /**
     * RowspanBodyArr osztály függvénye (példányokra lehet hívni)
     * @param {RowspanRowType} bodyArr 
     */
    render(bodyArr){
        renderRowspanBody(this.tbody, bodyArr);
    }
}

class ColspanBodyArr extends Table{
    //  Privát mező(k)

    /**
     * Konstruktor
     * @param {HeaderType[]} headerArr
     */
    constructor(headerArr){
        super(headerArr);
    }

    /**
     * ColspanBodyArr osztály függvénye (példányokra lehet hívni)
     * @param {ColspanRowType} bodyArr 
     */
    render(bodyArr){
        renderColspanBody(this.tbody, bodyArr);
    }
    
}

const rowSpan = new RowspanBodyArr(rowspanHeaderArr);
const colSpan = new ColspanBodyArr(colspanHeaderArr);

rowSpan.render(rowspanBodyArr);
colSpan.render(colspanBodyArr);

const button = document.createElement('button');
button.innerText = "Nyomj meg";
document.body.appendChild(button);

/**
 * @this {Table} a táblázat példány
 */
function onClickButton(){
    const object = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    }

    console.log('execute - 01');

    this.appendRow(function(tablebody){
        const tr = document.createElement('tr');
        tablebody.appendChild(tr);

        const td = document.createElement('td');
        td.innerText = "Egy cella vagyok :)";
        tr.appendChild(td);

        console.log('execute - 02');
    });
}

button.addEventListener('click', onClickButton.bind(rowSpan));