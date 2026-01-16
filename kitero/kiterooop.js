//  Ugyanazt csináljuk meg mint a kiterofunc.js-ban, csak másképp (hasonlóbb a c-sharp felépítésehez)

class Student{

    //  Konstruktor
    constructor(name){
        this.name = name;
        this.askedQuestionNum = 0;
    }

    //  Student osztály függvénye (példányokra lehet hívni)
    askedQuestion(){
        console.log('What is going on ???');
        this.askedQuestionNum++;
    }
}

class StudentWithWork extends Student{

    //  Konstruktor
    constructor(name){
        super(name);        //  Student.call(this, name); HELYETT   ??
        this.workDone = 0;
    }

    //  StudentWithWork osztály függvénye (példányokra lehet hívni)
    doWork(){
        this.workDone++;
    }
}

const student01 = new Student('Szabolcs :)');                       //  Első példány
const student02 = new Student('Optimus Prime');                     //  Második példány
console.log(student01);
console.log(student02);

student01.askedQuestion();
console.log(student01);

const student03 = new StudentWithWork('VALamii');
student03.askedQuestion();
console.log(student03);

student03.doWork()
console.log(student03);

/**
 * Student objektum (ősosztály):
 *      ->  askedQuestion() függvény
 * 
 *      ->  StudentWithWork objektum
 *          ->  doWork() függvény
 */