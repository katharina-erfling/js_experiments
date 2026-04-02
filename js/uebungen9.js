/* ----------------- */
/* Arrays*/
/* ----------------- */

'use strict'







// Übung 1 -  Erzeugen von Arrays
console.log('Übung 1 -  Erzeugen von Arrays');

let customersOnline = [
    'Herbert',
    'Friedlinde',
    'Gerd',
    'Bastian',
    'Ladislaus',
];
console.log('------------------')




// Übung 2 -  Länge von Arrays
console.log('Übung 2 -  Länge von Arrays');

let customersOnline2 = [
    'Herbert',
    'Friedlinde',
    'Gerd',
    'Bastian',
    'Ladislaus',
];

console.log(customersOnline2.length);


console.log('------------------')






// Übung 3 -  Zugriff per Index
console.log('Übung 3 -  Zugriff per Index');

let customersOnline3 = [
    'Herbert',
    'Friedlinde',
    'Gerd',
    'Bastian',
    'Ladislaus',
];

console.log(customersOnline3[2]);

console.log('------------------')



// Übung 4 -  Hinzufügen mit Push
console.log('Übung 4 -  Hinzufügen mit Push');


let kunden = [
    'Herbert',
    'Gertrude',
];

kunden.push('Goldy');
console.log(kunden);
console.log('------------------')



// Übung 5 -  Hinzufügen mit unshift
console.log('Übung 5 -  Hinzufügen mit unshift');

let kunden2 = [
    'Brunhilde',
    'Hildegard',
];

kunden2.unshift('Sally');
console.log(kunden2);
console.log('------------------')




// Übung 6 -  Entfernen mit Pop
console.log('Übung 6 -  Entfernen mit Pop');

let kunden3 = [
    'Brunhilde',
    'Gertrude',
    'Hildegard',
];

kunden3.pop();
console.log(kunden3);
console.log('------------------')


// Übung 7 -  Kekse backen
console.log('Übung 7 -  Kekse backen');

let keksrezept = [
    '1/4 cup vegetable oil',
    '1 separated egg',
    '1/2 cup sugar',
    '1 tsp baking powder',
];

keksrezept.push('1 tsp flour');
keksrezept.unshift('1 cup rolled oats');
keksrezept.splice(1,1, '1/3 cup butter');

let rezept = keksrezept.join('\n');
let anleitung = 'Melt the butter in a pan, add the rolled oats and mix everything well. Remove the mixture from heat and let it cool. \n Add the sugar to the egg white and beat until stiff. Mix in the yolk, baking powder and flour. Now mix in the cooled oat mixture. Shape small mounds of batter onto a baking sheet. \n These mounds should not be too large, since the batter will spread out a little as it is baked. Bake for 15 minutes at 350 °F in a pre-heated oven.';


console.log(rezept);
console.log(anleitung);
console.log('------------------')




// Übung 8 -  Kurzstreckenfahrt
console.log('Übung 8 -  Kurzstreckenfahrt');

const LINE_W = [
  'Astoria-Ditmars Blvd',
  'Astoria Blvd',
  '30 Av',
  'Broadway',
  '36 Av',
  '39 Av',
  'Queensboro Plaza',
];

const NEW_LINE =  LINE_W.slice(4,7);
console.log(NEW_LINE);

let zielwunsch = prompt('Wohin möchtest du fahren?'); 
let zielindex = NEW_LINE.indexOf(zielwunsch);


