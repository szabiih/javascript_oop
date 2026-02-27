import './types.js';        //  Ennyi elég, hogy az editor lássa a típusokat.

/**
 * Az AddCallback egy JSDoc callback típusdefiníció. A @ callback segítségével egy új, névvel ellátott függvénytípust definiálunk, amely később újrahasználható
 * @callback AddCallback
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 */

class Manager{
    //                                                      Privát mezők
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArray;                     //  deklaráció - Azt jelenti, hogy létrehozol egy privát mezőt az osztályban, de nem adsz neki kezdeti értéket (undefined).

    /**
     * @type {AddCallback}
     */
    #addCallback;

    //                                                      Konstruktor
    constructor(){
        this.#dataArray = [];       //  inicializálás - Kezdeti értéket ad a mezőnek, itt egy üres tömböt.
    }

    //                                                      Függvények
    /**
     * Új elemet ad hozzá a privát #dataArray tömbhöz, majd
     * Ha létezik regisztrált callback függvény (#addCallback), akkor automatikusan meghívja azt az új elemmel (minden elem hozzáadásakor lefut).
     * @param {ColspanType | RowspanType} param 
     */
    addElement(param){
        this.#dataArray.push(param);

        if (this.#addCallback){     //  Az if feltétele akkor teljesül, ha a #addCallback privát változó létezik, nincs undefined vagy null értéke, és egy valóban meghívható függvényt tartalmaz.
            this.#addCallback(param);
        }
    }
    
    //                                                  Getter / Setter fg.
    /**
     * Setter, amellyel egy callback függvény rendelhető a Manager osztályhoz (#addCallback beállítása).
     * @param {AddCallback} param
     */
    set addCallback(param){
        this.#addCallback = param;
    }
}

export {Manager}