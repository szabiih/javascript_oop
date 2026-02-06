/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from './functions.js'
 */
import data from './data.json' with {type: 'json'}
import { Manager } from './manager.js';
import { Table } from './table.js';

const manager = new Manager();
manager.addCallback = (param) => {console.log(param)};

const table = new Table();