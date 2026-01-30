function operation01(a, b){   //  (operation = művelet)
    return a + b;
}

const operation02 = (a, b) => {return a + b};   //  arrow function (ha akarnánk, this-t itt nem lehet használni)

function operation03(a, b, callback){
    return callback(a, b);
}

const operation04 = (a, b, callback) => {
    const result = callback(a, b);
    return {result: result};    //  {result} - ez egy rövidebb forma
};

const createOperation01 = (signal) => { if(signal == '+'){return (a,b) => {return a + b}} };
console.log(createOperation01('+'));

export {operation04, createOperation01}