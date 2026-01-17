/**
 * Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
 * That means that you must declare a class before you can use it:
*/

//  Konstruktor
function Item(id, material){
    this.id = id;
    this.material = material;
}

//  Következő konstruktor
function Cutlery(id, material){
    Item.call(this, id, material)
    this.isClean = true;
}

Cutlery.prototype.toUse = function(){
    console.log('Használtad az evőeszközt!');
    this.isClean = false;
}

Object.setPrototypeOf(Cutlery.prototype, Item.prototype);

//  Következő konstruktor
function Knife(id, material, bladeLength){
    Cutlery.call(this, id, material);
    this.bladeLength = bladeLength;
}

Knife.prototype.sharpening = function(){
    console.log('Megélezted a kést! ◉‿◉ ▬ι𓆃');
    this.bladeLength -= 0.5;
}

Object.setPrototypeOf(Knife.prototype, Cutlery.prototype);

//  Következő konstruktor
function Fork(id, material, prongs){
    Cutlery.call(this, id, material)
    this.prongs = prongs;
}

Fork.prototype.breakTheTip = function(){
    console.log('Letörted a villa hegyét! :(');
    this.prongs -= 1;
}

Object.setPrototypeOf(Fork.prototype, Cutlery.prototype);

//  Következő konstruktor
function Mug(id, material, volume){
    Item.call(this, id, material);
    this.volume = volume;
}

Mug.prototype.measuringVolume = function(){
    console.log('Megmérted a bögre térfogatát! 👏');
    console.log(`${this.volume} cm^3`);
}

Object.setPrototypeOf(Mug.prototype, Item.prototype);


//  Példányosítás
const knife01 = new Knife(1, 'acél', 99);
console.log(knife01);

const fork01 = new Fork(2, 'ezüst', 4);
console.log(fork01);

const mug01 = new Mug(3, 'kerámia', 300);
console.log(mug01);

//  Függvények után
console.log('\n');
knife01.sharpening();
console.log(knife01);

console.log('\n');
fork01.breakTheTip();
fork01.toUse();
console.log(fork01);

console.log('\n');
mug01.measuringVolume();
console.log(mug01);

/**
 * Item osztály:
 *      ->  Cutlery osztály
 *          ->  toUse()
 * 
 *          ->  Knife osztály
 *              ->  sharpening()
 *          ->  Fork osztály
 *              ->  breakTheTip()
 * 
 *      ->  Mug osztály
 *          ->  measuringVolume()
 */