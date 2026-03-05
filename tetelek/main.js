// programozási tételek (többféle megoldás létezhet):

const numbers = [86, 87, 75, 7, 3, 97, 25, 31];

// 1. maximum/minimum-kiválasztás:

let maxValue = numbers[0], maxIndex = 0;
for (let i = 1; i < numbers.length; i++){
    if (maxValue < numbers[i]){
        maxValue = numbers[i];
        maxIndex = i;
    }
}

console.log(`${maxValue} - ${maxIndex}`);

let minValue = numbers[0], minIndex = 0;
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < minValue){
        minValue = numbers[i];
        minIndex = i;
    }
}

console.log(`${minValue} - ${minIndex}`);

// 2. összegzés:

let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);

// 3. keresés:

const searchValue = 7;
let index = -1;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == searchValue){
        index = i;
        break;
    }
}

if (index == -1){
    console.log(`${searchValue} was not found.`);
}
else {
    console.log(`${searchValue} was found, index: ${index}`);
}

// 4. megszámlálás/megszámolás:

let count = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        count++;
    }
}

console.log(count);

// 5. kiválasztás:

const result = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        result.push(numbers[i]);
    }
}

console.log(result.join(', '));

// 6. rendezés

for (let i = 0; i < numbers.length - 1; i++){
    for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] < numbers[j]){
            const tmp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tmp;
        }
    }
}

console.log(numbers.join(', '));

// minimum-kiválasztás object-el

const personList = [
    { name: 'Géza', birthYear: 2008 },
    { name: 'József', birthYear: 2009 },
    { name: 'Szabolcs', birthYear: 2002 },
    { name: 'Balázs', birthYear: 2004 }
];

let eldest = personList[0];
for (let i = 0; i < personList.length; i++){
    if (personList[i].birthYear < eldest.birthYear){
        eldest = personList[i];
    }
}

console.log(eldest.name);

// +7. eldöntés:

let found = false;
for(let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        found = true;
        break;
    }
}

console.log(found);