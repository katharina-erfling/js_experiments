
/* ----------------- */
/*Typkonvertierung Übungen*/
/* ----------------- */

'use strict'

/*Übung 1 - Ausdrücke, deren Rückgabewert und Datentyp*/
console.log('Übung 1 - Ausdrücke, deren Rückgabewert und Datentyp');

console.log('Ausgabewert: ' + ('1.5' * 2));
console.log('Der Datentyp ist: ' + typeof ('1.5' * 2));
console.log('..........');

console.log('Ausgabewert: ' + ('1,5' * 2));
console.log('Der Datentyp ist: ' + typeof ('1,5' * 2));
console.log('..........');

console.log('Ausgabewert: ' + ('1.5' + 2));
console.log('Der Datentyp ist: ' + typeof ('1.5' + 2));
console.log('..........');

console.log('Ausgabewert: ' + (Number('1.5') * 2));
console.log('Der Datentyp ist: ' + typeof (Number('1.5') * 2));
console.log('..........');

console.log('Ausgabewert: ' + (Number('1,5') * 2));
console.log('Der Datentyp ist: ' + typeof (Number('1,5') * 2));
console.log('..........');

console.log('Ausgabewert: ' + (Number('3 Tage') * 7));
console.log('Der Datentyp ist: ' + typeof (Number('3 Tage') * 7));
console.log('..........');

console.log('Ausgabewert: ' + (Number('Seite 20') + 5));
console.log('Der Datentyp ist: ' + typeof (Number('Seite 20') + 5));
console.log('..........');

console.log('Ausgabewert: ' + ('9,2' + Number('11.7')));
console.log('Der Datentyp ist: ' + typeof ('9,2' + Number('11.7')));
console.log('..........');

console.log('Ausgabewert: ' + ((NaN - 2) * (4 / 2)));
console.log('Der Datentyp ist: ' + typeof ((NaN - 2) * (4 / 2)));
console.log('..........');

console.log('Ausgabewert: ' + (alert(Number(17 / 2 + 1.3))));
console.log('Der Datentyp ist: ' + typeof (alert(Number(17 / 2 + 1.3))));
console.log('..........');

console.log('Ausgabewert: ' + (typeof 12.25));
console.log('Der Datentyp ist: ' + typeof (typeof 12.25));
console.log('..........');

console.log('Ausgabewert: ' + (typeof typeof 12.25));
console.log('Der Datentyp ist: ' + typeof (typeof typeof 12.25));
console.log('..........');

console.log('-/-/--/-/--/-/--/-/--/-/--/-/--/-/--/-/--/-/--/-/-');





/*Übung 2 - Reichweite & Verbrauch*/

console.log('Übung 2 - Reichweite & Verbrauch');


let kilometer = prompt('Wie viele Kilometer bist du gefahren?');
let verbrauch = prompt('Wie viel Benzin hast du verbraucht?');
let tank = prompt('Wie groß ist dein Tank (in l)?');

let kraftstoffVerbrauch = (Number(verbrauch) / Number(kilometer) * 100).toFixed(2);
let maxReach = (Number(tank) * Number(kilometer) / Number(verbrauch)).toFixed(2);

console.log(`Du bist ${kilometer}km weit gefahren und hast ${verbrauch}l Benzin verbraucht. Das macht ${kraftstoffVerbrauch}l auf 100km`);
console.log(`Deine maximale Reichweite beträgt ${maxReach}km`);



console.log('..........');

