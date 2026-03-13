import { AuthorManager } from "./maneger.js";
import { ViewElement } from "./viewelement.js";

class ImportExport extends ViewElement{
    //                                                      Privát mezők
    /**
     * @type {AuthorManager}
     */
    #manager;

    //                                                      Konstruktor
    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id, manager){
        super(id);
        this.#manager = manager;
        const importInput = document.createElement('input');
        importInput.type = 'file';
        this.div.appendChild(importInput);
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const result = [];
                const fileContent = reader.result;
                const fileContentLines = fileContent.split('\n');
            };
            reader.readAsText(file, 'UTF-8');
        });
    }
}

export {ImportExport}