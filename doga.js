/*
- mi az osztály?
	Az osztály az objektumorientált programozás egyik alapfogalma. Egy olyan sablon vagy minta, amely meghatározza,
	hogy a belőle létrehozott objektumok milyen tulajdonságokkal (adatokkal) és metódusokkal (műveletekkel) rendelkeznek.

- mi a példányosítás?
	A példányosítás az a folyamat, amikor egy osztály alapján létrehozunk egy konkrét objektumot (példányt).
	A példányosítás általában egy konstruktor meghívásával történik.

- mi a kapcsolat az osztály és a példány között?
	Az osztály egy sablon vagy terv, a példány pedig ennek a tervnek a konkrét megvalósulása.
	Az osztály határozza meg, hogy a példány milyen tulajdonságokkal és metódusokkal rendelkezik.

- mi a higher order function?
	A higher order function (magasabb rendű függvény) olyan függvény, amely képes más függvényt paraméterként fogadni,
	vagy visszatérési értékként függvényt ad vissza.

- mit nevezünk callbacknek?
	A callback egy olyan függvény, amelyet paraméterként adunk át egy másik függvénynek azzal a céllal, hogy az később meghívja.
*/

//  mit ír ki az alábbi program?	-> 	undefined (mert az object-nek nincs result kulcsa) és 121
const foo = (a, b, callback) => {
	const c = 1;
	const result = callback(a, b) + 1;
	return { er:result }
}
const result = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result.result);
console.log(result.er);

/*
- Hogyan módosítaná a programot, hogy short hand property alaklmazásával a visszatérési objektum result tulajdonsága tartalmazza kiszámított eredményt?
	const foo = (a, b, callback) => {
	const c = 1;
	const result = callback(a, b) + 1;
	return { result };   // short hand property
	}

	const result = foo("1", "2", (szam1, szam2) => { return szam1 + szam2 });

	console.log(result.result);

- Hogyan tudná destructurning alkalmazásával létrehozni azt a változót, ami foo függvény visszatérési értékének result tulajdonságát tartalmazza?
	const { er } = foo("1", "2", (szam1, szam2) => szam1 + szam2);

- Javítsa a programoot, hogy abban az esetben ha a és b paraméter nagyobb 10-nél, akkor az eredmény objektum result tulajdonsága 0 értéket vegyen fel.
  Ha két szám 0 és 10 között van, akkor az eredmény objektum result tulajdonsága a két szám összegét tartalmazza!
	const foo = (a, b, callback) => {
    const num1 = Number(a);
    const num2 = Number(b);
    
    let resultValue;

    if (num1 > 10 && num2 > 10) {
        resultValue = 0;
    } else if (num1 >= 0 && num1 <= 10 && num2 >= 0 && num2 <= 10) {
        resultValue = callback(num1, num2);
    } else {
        resultValue = null; // ha nem esik egyik feltételbe sem
    }

    return { result: resultValue };
	}

	const result = foo("1", "2", (szam1, szam2) => {
		return szam1 + szam2;
	});

	console.log(result.result);
*/