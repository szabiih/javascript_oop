import './types.js';        //  A types.js-t minden modul külön importálja, hogy ne függjünk más fájloktól és önállóan működjön a típusbetöltés. 
import {Manager} from './manager.js'

class Table {
    //                                                      Privát mezők
    /**
     * @type {HTMLTableSectionElement}  HTML táblázatok egyes szekcióit (részeit) reprezentálja -> <thead> <tbody> <tfoot>
     */
    #tbody;

    /**
     * @type {Manager}
     */
    #manager;

    //                                                      Konstruktor
    /**
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager){
        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tr = document.createElement('tr');
        thead.appendChild(tr);

        for (const header of headerArray){      // for of - végigmegy egy iterálható objektum értékein (pl. array, string, map, set, stb.)
            const th = document.createElement('th');
            th.innerText = header.name;

            if (header.colspan){                // Akkor állítja be a colspan-t, ha a header.colspan létezik és truthy érték. (tehát nem null, nem undefined és nem NaN stb...)
                th.colSpan = header.colspan;
            }
            tr.appendChild(th);
        }
    }
}

export {Table}