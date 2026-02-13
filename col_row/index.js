/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from './functions.js'
 */
import data from './data.json' with {type: 'json'}
import { FormController } from './form.js';
import { Manager } from './manager.js';
import { Table } from './table.js';

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} elem 
 */
const renderColspanBody = (tbody, elem) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td01 = document.createElement('td');
    td01.innerText = elem.neve;
    tr.appendChild(td01);

    const td02 = document.createElement('td');
    td02.innerText = elem.kor;
    tr.appendChild(td02);

    const td03 = document.createElement('td');
    td03.innerText = elem.szerelme1;
    tr.appendChild(td03);

    if (elem.szerelme2){
        const td04 = document.createElement('td');
        td04.innerText = elem.szerelme2;
        tr.appendChild(td04);
    } else {
        td03.colSpan = 2;
    }
}

const manager = new Manager();
//manager.addCallback = (param) => {console.log(param)};

const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow(renderColspanBody)

for (const elem of data.colspanDataArr){
    manager.addElement(elem);
}

const form = new FormController(data.colspanFormFieldList, manager);