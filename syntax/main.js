import { operation04, createOperation01 } from "./functions.js";

const input01 = document.createElement('input');
document.body.appendChild(input01);
const input02 = document.createElement('input');
document.body.appendChild(input02);

const div = document.createElement('div');
document.body.appendChild(div);

const button = document.createElement('button');
button.innerText = 'Nyomj meg!';
document.body.appendChild(button);

button.addEventListener('click', clickOnButton);

function clickOnButton(){
    const value01 = Number(input01.value);
    const value02 = Number(input02.value);
    //const outcome = operation04(value01, value02, createOperation01('+'));
    // div.innerText = outcome.result;
    const {result} = operation04(value01, value02, createOperation01('+'));
    div.innerText = result;
}