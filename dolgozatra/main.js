import './types.js';        //  Ennyi elég, hogy az editor lássa a típusokat (mivel más nincs a fájlban így kell csinálni).
import data from './data.json' with {type: 'json'};     //  A data csak egy változónév
import {Manager} from './manager.js';
import {Table} from './table.js';

const manager = new Manager();
manager.addCallback = (param) => console.log(param);
console.log(manager);

const table = new Table(data.colspanHeaderArray, manager);