import './types.js';        //  Ennyi elég, hogy az editor lássa a típusokat (mivel más nincs a fájlban így kell csinálni).
import data from './data.json' with {type: 'json'};     //  A data csak egy változónév
import {FormController} from './form.js';
import {Manager} from './manager.js';
import {Table} from './table.js';

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} element 
 */
const renderColspanBody = (tbody, element) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td01 = document.createElement('td');
    td01.innerText = element.neve;
    tr.appendChild(td01);

    const td02 = document.createElement('td');
    td02.innerText = element.kor;
    tr.appendChild(td02);

    const td03 = document.createElement('td');
    td03.innerText = element.szerelme1;
    tr.appendChild(td03);

    if (element.szerelme2){
        const td04 = document.createElement('td');
        td04.innerText = element.szerelme2;
        tr.appendChild(td04);
    }
    else{
        td03.colSpan = 2;
    }
};

const manager = new Manager();
manager.addCallback = (param) => console.log(param);
console.log(manager);

const table = new Table(data.colspanHeaderArray, manager);
table.setAppendRow(renderColspanBody);

for (const element of data.colspanDataArr){
    manager.addElement(element);
}

const form = new FormController(data.colspanFormFieldList, manager);