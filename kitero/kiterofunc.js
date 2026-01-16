//  Konstruktor
function Student(name){
    //  The value of 'this' will become the new object when a new object is created. - MINDIG AZ ÚJ PÉLDÁNY (ÉS VÁLTOZÓI)
    this.name = name;
    this.askedQuestionNum = 0;
}

//  Öröklődés
Student.prototype.askedQuestion = function(){
    console.log('What is going on ???');
    this.askedQuestionNum++;
}

const student01 = new Student('Szabolcs :)');                       //  Első példány
const student02 = new Student('Optimus Prime');                     //  Második példány
console.log(student01);
console.log(student02);

student01.askedQuestion();
console.log(student01);

//  Következő konstruktor
function StudentWithWork(name){
    Student.call(this, name);   //  ??
    this.workDone = 0;
}

//  Öröklődés
StudentWithWork.prototype.doWork = function(){
    this.workDone++;
}

//  Beállítjuk, hogy a Stundent objektum (c# - class) ősosztálya legyen a StudentWithWork-nek
Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype);

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