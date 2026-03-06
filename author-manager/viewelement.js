import { hide, show } from './gomszab.min.js'

/**
 * @callback ActivateCallback
 * @returns {void}
 */

class ViewElement{
    //                                                      Privát mezők
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {ActivateCallback}
     */
    #activateCallback;

    //                                                      Konstruktor
    constructor(id){
        this.#id = id;
        this.#div = document.createElement('div');
        this.#div.id = id;
    }
    //                                                      Függvények
    /**
     * @param {HTMLElement} parent
     * @returns {void}
     */
    appendTo(parent){
        parent.appendChild(this.#div);
    }

    /**
     * @param {string} id
     * @returns {void}
     */
    activate(id){
        if (this.#id === id){
            show(this.#div);
            if (this.#activateCallback){
                this.#activateCallback();
            }
        }
        else {
            hide(this.#div);
        }
    }
    //                                                  Getter / Setter fg.
    get div(){
        return this.#div;
    }

    /**
     * @param {ActivateCallback} value
     */
    set activateCallback(value){
        this.#activateCallback = value;
    }

    get id(){
        return this.#id;
    }
}

export {ViewElement}