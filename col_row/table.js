/**
 * @callback tableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */

import { Manager } from "./manager.js";

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;

    /**
     * @type {Manager}
     */
    #manager;

    /**
     * 
     * @param {HeaderArrayType} HeaderArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager){
        this.#manager = manager;
        
        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tr = document.createElement('tr');
        thead.appendChild(tr);

        for (const something of headerArray){
            const th = document.createElement('th');
            th.innerText = something.name;

            if (something.colspan){
                th.colSpan = something.colspan;
            }
            tr.appendChild(th);
        }

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.#tbody = tbody;
    }

    /**
     * @param {tableCallback} tableCallback 
     */
    setAppendRow(tableCallback){
        this.#manager.addCallback = (element) => {
            tableCallback(this.#tbody, element);
        }
    }
}

export {Table}