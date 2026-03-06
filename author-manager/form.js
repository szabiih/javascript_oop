import { ViewElement } from "./viewelement.js";

class FormController extends ViewElement{
    //                                                      Konstruktor
    constructor(id){
        super(id);
        this.div.innerText = 'Form';
    }
}

export {FormController}