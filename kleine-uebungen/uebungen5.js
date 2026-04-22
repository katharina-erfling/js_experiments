/* ----------------- */
/*Math Objekt Übungen*/
/* ----------------- */

'use strict'

/*Übung 1 - Abrunden*/
console.log('Übung 1 - Abrunden');

console.log(Math.floor(2000 / 60));
console.log(Math.floor(2000 % 60));

console.log('..........');




/*Übung 2 - Reichweite & Verbrauch - Aufrunden*/
console.log('Übung 2 - Reichweite & Verbrauch - Aufrunden');


let kilometer = prompt('Wie viele Kilometer bist du gefahren?');
let verbrauch = prompt('Wie viel Benzin hast du verbraucht?');
let tank = prompt('Wie groß ist dein Tank (in l)?');

let kraftstoffVerbrauch = Math.round((Number(verbrauch) / Number(kilometer) * 100));
let maxReach = Math.round((Number(tank) * Number(kilometer) / Number(verbrauch)));

console.log(`Du bist ${kilometer}km weit gefahren und hast ${verbrauch}l Benzin verbraucht. Das macht ${kraftstoffVerbrauch}l auf 100km`);
console.log(`Deine maximale Reichweite beträgt ${maxReach}km`);

console.log('..........');




/*Übung 3 - Lotto oder der »49-Seiten Würfel«*/
/*Schreibe ein Programm, das genau eine Zufallszahl zwischen 1 und 49 ausgibt. Die Grenzwerte 1 und 49 sollen dabei inklusive sein und Nachkommastellen sind nicht erwünscht. */

console.log('Übung 3 - Lotto oder der »49-Seiten Würfel«');

prompt("Drücke OK um zu würfeln");
alert(Math.floor(Math.random() * 49) + 1);

console.log('..........');


