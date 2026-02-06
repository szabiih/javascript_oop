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
        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tr = document.createElement('tr');
        thead.appendChild(tr);

        for (const something in headerArray){
            const th = document.createElement('th');
            th.innerText = something.name;

            if (something.colspan){
                th.colspan = something.colspan;
            }
            tr.appendChild(th);
        }
    }
}

export {Table}