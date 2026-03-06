/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 */

class AuthorManager{
    //                                                      Privát mezők
    /**
     * @type {Author[]}
     */
    #authorList;

    /**
     * @type {TableCallback}
     */
    #tableCallback;

    //                                                      Konstruktor
    constructor(){
        this.#authorList = [];
    }

    //                                                      Függvények
    /**
     * 
     * @param {import(".").AuthorType} element
     */
    addElement(element){
        const author = new Author();
        author.id = this.#authorList.length;
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        this.#authorList.push(author);
    }

    /**
     * 
     * @returns {void}
     */
    getAllElement(){
        this.#tableCallback(this.#authorList);
    }

    //                                                  Getter / Setter fg.
    /**
     * @param {TableCallback} value
     */
    set tableCallback(value){
        this.#tableCallback = value;
    }
}

class Author{
    //                                                      Privát mezők
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {string}
     */
    #name;

    /**
     * @type {string}
     */
    #work;

    /**
     * @type {string}
     */
    #concept;

    //                                                  Getter / Setter fg.
    get id(){
        return this.id;
    }

    set id(value){
        this.#id = value;
    }

    get name(){
        return this.#name;
    }

    set name(value){
        this.#name = value;
    }

    get work(){
        return this.#work;
    }

    set work(value){
        this.#work = value;
    }

    get concept(){
        return this.#concept;
    }

    set concept(value){
        this.#concept = value;
    }
}

export {AuthorManager}