import { FormController } from './form.js';
import { AuthorManager } from './maneger.js';
import { NavBar } from './navigationbar.js'
import { Table } from './table.js';

/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

const formFields = [{
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}];

const headerArray = ['Szerző', 'Mű', 'Fogalom'];

const manager = new AuthorManager();
manager.addElement({
    author: 'aaa',
    concept: 'bbb',
    work: 'ccc'
});
const navbar = new NavBar();
navbar.appendTo(document.body);
const table = new Table('table', headerArray, manager);
table.appendTo(document.body);
navbar.addViewElement('Táblázat', table);
const form = new FormController('tableForm');
form.appendTo(document.body);
navbar.addViewElement('Form', form);
navbar.activate('table');
manager.getAllElement();