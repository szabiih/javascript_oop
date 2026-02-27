import './types.js';
import {Manager} from './manager.js';

class FormController{
    //                                                      Privát mezők
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @type {FormField[]}
     */
    #formFieldList;

    //                                                      Konstruktor
    /**
     * Létrehozza a formot a megadott meződefiníciók alapján és kezeli a submit gombot.
     * @param {FormFieldType[]} formFields 
     * @param {Manager} manager 
     */
    constructor(formFields, manager){
        this.#formFieldList = [];
        this.#manager = manager;

        const form = document.createElement('form');
        document.body.appendChild(form);
        for (const formField of formFields){
            const formFieldElement = new FormField(formField.id, formField.label, formField.name, formField.required, form);
            this.#formFieldList.push(formFieldElement);
        }

        const button = document.createElement('button');
        button.type = 'submit';
        button.innerText = 'Sor hozzáadása';
        form.appendChild(button);

        form.addEventListener('submit', (e) => {
            e.preventDefault();     //  nem fogja újra tölteni az oldalt az esemény végrehajtása után (a frissen hozzáadott táblázatsor eltűnne enélkül)

            const row = this.createTableRow();
            if (row){
                this.#manager.addElement(row);
                e.target.reset();   //  az űrlap elemek visszakapják az eredeti (alapértelmezett) értéküket
            }
        });
    }

    //                                                      Függvények
    /**
     * Létrehozza a táblázat új sorának adatobjektumát az űrlap mezők alapján.
     * @returns {ColspanType | RowspanType | null}
     */
    createTableRow(){
        let result = {};
        let valid = true;
        
        for (const formInput of this.#formFieldList){
            if (formInput.validate()){
                result[formInput.name] = formInput.value;
            }
            else {
                valid = false;
            }
        }

        //  (condition) ? expressionTrue : expressionFalse;
        return valid ? result : null;
    }
}

class FormField{
    //                                                      Privát mezők
    /**
     * @type {HTMLInputElement}
     */
    #input;

    /**
     * @type {string}
     */
    #name;

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv;

    /**
     * @type {boolean}
     */
    #required;

    //                                                      Konstruktor
    /**
     * Létrehoz egy űrlap mezőt címkével, input mezővel és hibaüzenet megjelenítő elemmel.
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, required, parent){
        const div = document.createElement('div');
        parent.appendChild(div);

        const labelElement = document.createElement('label');
        labelElement.innerText = label;
        div.appendChild(labelElement);
        div.appendChild(document.createElement('br'));

        const input = document.createElement('input');
        input.id = id;
        input.name = name;
        div.appendChild(input);
        this.#input = input;
        this.#name = name;

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');        //  Hozzáadjuk alapértelmezetten az errorDiv-hez az 'error' CSS classt.
        div.appendChild(errorDiv);
        this.#errorDiv = errorDiv;
        this.#required = required;
        div.appendChild(document.createElement('br'));
    }

    //                                                      Függvények
    /**
     * Validálja az input bemenetének értékét - Ha a mező kötelező és üres, hibaüzenetet jelenít meg.
     * @returns {boolean}
     */
    validate(){
        let result = true;      //  A const nem engedi az újra-értékadást. Tehát itt let-et használunk. (de nem muszáj változót használnunk)
        if (this.#required && !this.value){
            this.#errorDiv.innerText = 'Kötelező';
            result = false;
        }
        else {
            this.#errorDiv.innerText = '';
        }
        return result;
    }

    //                                                  Getter / Setter fg.
    /**
     * Visszaadja az input name attribútumát.
     * @returns {string}
     */
    get name(){
        return this.#name;
    }

    /**
     * Ha az input üres, akkor undefined értéket ad vissza. Egyébként pedig simán csak az értéket.
     * @returns {string | undefined}
     */
    get value(){
        //  (condition) ? expressionTrue : expressionFalse;
        return this.#input.value ? this.#input.value : undefined;   //  Ez egy truthy / falsy vizsgálat.
    }
}

export {FormController}