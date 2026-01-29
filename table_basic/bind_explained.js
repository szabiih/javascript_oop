//https://www.youtube.com/watch?v=g2WcckBB_q0
const c1 = {
    x: 5,
    y: 10
};
const c2 = {
    x: 75,
    y: 235
};

function printCoordinates(){    //  direkt nem használsz paramétert
    console.log(this.x + ', ' + this.y);
    console.log(this);
}

printCoordinates();     //  undefined, undefined (mert nem tudja mi az a this)

//  objektum kötése egy függvényhez - hivatkozás rá a 'this' használatával (bind = kötni, "hozzákötni")
const c1_func = printCoordinates.bind(c1);  //  tehát itt most a printCoordinates this-je egyenlő a c1-el.
const c2_func = printCoordinates.bind(c2);

c1_func();
c2_func();