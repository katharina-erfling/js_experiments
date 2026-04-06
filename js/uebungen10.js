/* ----------------- */
/* High Order Funktionen*/
/* ----------------- */

'use strict'




// Übung 1 -  Sort Übung
console.log('Übung 1 -  Sort Übung');

// Prüft ob ein Name mit (Admin) endet
let isAdmin = (name) => name.endsWith('(Admin)');

// Vergleichsfunktion: Admins immer vorne, Rest alphabetisch
let compareChatParticipants = (a, b) => {
    if (isAdmin(a)) return -1;
    if (isAdmin(b)) return 1;
    return a > b ? 1 : -1;
}

let customersOnline = [
    'Herbert',
    'Gudrun',
    'JD',
    'Turk',
    'Gronkh (Admin)',
]

// Sortieren und zeilenweise ausgeben
console.log(customersOnline.sort(compareChatParticipants).join('\n'));
console.log('------------------')










// Übung 2 -  Stadt Land Fluss
console.log('Übung 2 -  Stadt Land Fluss');

// Sortiert ein Array nach Wortlänge, längstes zuerst
let sortByLength = (category) => category.sort((a, b) => b.length - a.length);

let city = ['Barcelona', 'Basel', 'Belgrade', 'Berlin', 'Budapest'];
let country = ['Belgium', 'Bulgaria', 'Brazil', 'Bolivia', 'Bosnia and Herzegovina'];
let river = ['Bode', 'Brahmaputra', 'Beuvron', 'Black River', 'Belaja'];

console.log(sortByLength(city));
console.log(sortByLength(country));
console.log(sortByLength(river));
console.log('------------------')










// Übung 3 -  Arrays transformieren mit map()
console.log('Übung 3 -  Arrays transformieren mit map()');

// Dreht den Namen um und hängt die Namenslänge an
let passwortFor = (name) => name.split('').reverse().join('') + name.length;

let employees = [
    'Adelgunde',
    'Heribert',
    'Mechthild',
    'Friedlinde',
    'Tusnelda',
    'Oswine',
    'Ladislaus',
];

// Passwort für jeden Mitarbeiter generieren
let passwords = employees.map(passwortFor);

console.log(passwords);
console.log('------------------')







// Übung 4 - map() Lückentext
console.log('Übung 4 - map() Lückentext');

let results2;
let inputs2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Jeden Wert verdoppeln
results2 = inputs2.map((n) => n * 2);
console.log(results2);

// Jeden Wert quadrieren
results2 = inputs2.map((n) => n * n);
console.log(results2);

console.log('------------------');







// Übung 5 - Der transformierte Ladislaus, Teil 4
console.log('Übung 5 - Der transformierte Ladislaus, Teil 4');

// Kürzt Vornamen zu Initialen und setzt Nachname dahinter
let transformName = (firstNames, lastName) =>
    `${firstNames.map((name) => `${name.charAt(0)}.`).join(' ')} ${lastName}`;

console.log(transformName(['Ladislaus', 'Coolio', 'Barry'], 'Jones'));

console.log('------------------');



// Übung 6 - Liste filtern - Begriffe mit bestimmtem Anfangsbuchstaben
console.log('Übung 6 - Liste filtern - Begriffe mit bestimmtem Anfangsbuchstaben');

// Gibt alle Produkte zurück die mit dem angegebenen Buchstaben beginnen
let productsStartingwith2 = (letter, products2) =>
    products2.filter((product2) => product2.startsWith(letter)); 

let products2 = [
    'Game of Thrones Wax Seal Coasters',
    'Electronic Butterfly in a Jar',
    'Aquafarm: Aquaponics Fish Garden',
    'Cassette Adapter Bluetooth',
    'Marvel Comics Lightweight Infinity Scarf',
    'Ollie - The App Controlled Robot',
    'Sound Splash Bluetooth Waterproof Shower Speaker',
    'PowerCube',
    'Backpack of Holding',
    'Retro Duo Portable NES/SNES Game System',
    'Universal Gadget Wrist Charger',
    'USB Squirming Tentacle',
    'USB Fishquarium',
    'Space Bar Keyboard Organizer & USB Hub Pop',
    'USB Pet Rock',
    'Powerstation 5- E. Maximus Chargus',
    'Dual Heated Travel Mug',
    'Crosley Collegiate Portable USB Turntable',
    'Meh Hoodie',
    'Magnetic Accelerator Cannon',
];

// Alle Produkte die mit 'M' beginnen ausgeben
console.log(productsStartingwith2('M', products2));

console.log('------------------');





// Übung 7 - Liste filtern - For Each
console.log('Übung 7 - Liste filtern - For Each');


let productsStartingWith = (letter, products) =>
  products.filter((product) => product.startsWith(letter));

let products = [
  'Game of Thrones Wax Seal Coasters',
  'Electronic Butterfly in a Jar',
  'Aquafarm: Aquaponics Fish Garden',
  'Cassette Adapter Bluetooth',
  'Marvel Comics Lightweight Infinity Scarf',
  'Ollie - The App Controlled Robot',
  'Sound Splash Bluetooth Waterproof Shower Speaker',
  'PowerCube',
  'Backpack of Holding',
  'Retro Duo Portable NES/SNES Game System',
  'Universal Gadget Wrist Charger',
  'USB Squirming Tentacle',
  'USB Fishquarium',
  'Space Bar Keyboard Organizer & USB Hub Pop',
  'USB Pet Rock',
  'Powerstation 5- E. Maximus Chargus',
  'Dual Heated Travel Mug',
  'Crosley Collegiate Portable USB Turntable',
  'Meh Hoodie',
  'Magnetic Accelerator Cannon',
];

'ABCDEGMO'.split('').forEach((letter) => {
  console.log(`\n==== ${letter} ====`);
  console.log(productsStartingWith(letter, products).join('\n'));
});

console.log('------------------');







// Übung 8 - Friedemann Friese
console.log('Übung 8 - Friedemann Friese');

// Prüft ob ein Spielname mit 'F' beginnt
let startsWithLetterF = (game) => game.startsWith('F');

let boardgames = [
  'Caverna',
  'Puerto Rico',
  'Agricola',
  'Black Friday',
  'Funny Friends',
  'Fauna',
  'Eclipse',
  'Codenames',
  'Dominion',
  'Fairy Tale',
  'Fast Flowing Forest Fellers',
  'Fearsome Floors'
];

// Nur Spiele die mit 'F' beginnen herausfiltern
let boardgamesStartingWithF = boardgames.filter(startsWithLetterF);

console.log(boardgamesStartingWithF);
// => [ 'Funny Friends', 'Fauna', 'Fairy Tale', 'Fast Flowing Forest Fellers', 'Fearsome Floors']
console.log('------------------');






// Übung 9 - Lückentext zu filter
console.log('Übung 9 - Lückentext zu filter');

'use strict';

let result3;
let results3;

// Nur gerade Zahlen behalten (Rest bei Division durch 2 ist 0)
let inputs3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
results3 = inputs3.filter((n) => n % 2 === 0);
console.log(result3); // => [2, 4, 6, 8, 10]

// Nur Namen die auf 'e' oder 'a' enden behalten
let names5 = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];
results3 = names5.filter((name) => name.endsWith('e') || name.endsWith('a'));
console.log(results3); // => [ 'Friedlinde', 'Tusnelda', 'Oswine' ]

// String aufteilen, Wörter unter 3 Buchstaben rausfiltern, wieder zusammensetzen
let text3 = 'Hi this is a short text3';
result3 = text3.split(' ').filter((word) => word.length >= 3).join(' ');
console.log(result3); // => 'this short text3'
console.log('------------------');





// Übung 10 - Quersumme berechnen
console.log('Übung 10 - Quersumme berechnen');

let add2 = (x, y) => x + y;

let digitSum2 = (number) => String(number).split('').map(Number).reduce(add2, 0)



console.log(digitSum2(4242));
console.log('------------------');






// Übung 11 - Some
console.log('Übung 11 - Some');

const AGE_OF_MAJORITY = 18;

let ageRatings = [
  6,
  6,
  6,
  0,
  12,
  16,
  0,
  18, // FSK18-Film im Warenkorb
  6,
  0,
  6,
];

// Prüft ob mindestens eine Altersfreigabe 18 ist
let isForAdultsOnly = (ratings) =>
  ratings.some((ageRating) => ageRating === AGE_OF_MAJORITY);

// Altersverifizierung anfordern falls nötig
if (isForAdultsOnly(ageRatings)) console.log('Please verify your age.');

console.log('------------------');





// Übung 12 - Gewinner
console.log('Übung 12 - Gewinner');

const WINNER_NAMES1 = [
  'Heribert',
  'Friedlinde',
  'Tusnelda',
  'Oswine',
  'Ladislaus',
];

// Ersten drei Gewinner mit Platzierung versehen, Rest bleibt unverändert
const WITH_PLACE2 = (winners2) =>
  winners2.map((winner2, i) => (i < 3 ? `Gewinner ${i + 1}: ${winner2}`: winner2));

console.log(WITH_PLACE2(WINNER_NAMES1));
console.log('------------------');







// Übung 13 - Richtige Gewinner
console.log('Übung 13 - Richtige Gewinner');

const WINNER_NAMES = [
  'Heribert',
  'Friedlinde',
  'Tusnelda',
  'Oswine',
  'Ladislaus',
];

// Ersten drei mit englischer Ordinalzahl (1st, 2nd, 3rd), Rest unverändert
const WITH_PLACE = (winners) =>
  winners.map((winner, i) =>
    i < 3
      ? `${i + 1}${i === 0 ? 'st' : ''}${i === 1 ? 'nd' : ''}${
          i === 2 ? 'rd' : ''
        } place: ${winner}`
      : winner
  );

console.log(WITH_PLACE(WINNER_NAMES));
console.log('------------------');








// Übung 14 - Callback Parameter
console.log('Übung 14 - Callback Parameter');

// Alle drei Callback-Parameter ausgeben: value, index, array
[
  'Heribert',
  'Friedlinde',
  'Tusnelda',
  'Oswine',
  'Ladislaus',
].forEach((v, i, a) => console.log(`v: ${v}, i: ${i}, a: ${a}`));
console.log('------------------');









// Übung 15 - Lückentext zu Higher-Order-Funktionen
console.log('Übung 15 - Lückentext zu Higher-Order-Funktionen');

let result;
let results;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = 'Hi this is a short text';
let names = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];

// Nur ungerade Zahlen behalten
results = inputs.filter((n) => n % 2 !== 0);
console.log(results); // => [ 1, 3, 5, 7, 9 ]

// Alle Zahlen aufaddieren
result = inputs.reduce((sum, n) => sum + n, 0);
console.log(result); // => 55

// Alle Zahlen multiplizieren
result = inputs.reduce((product, n) => product * n, 1);
console.log(result); // => 3628800

// Länge des längsten Worts ermitteln
result = text.split(' ').map((word) => Math.max(longest, word));
console.log(result); // => 5

// Längstes Wort finden
result = text.split(' ').reduce((res, word) => (res.length > word.length ? res : word));
console.log(result); // => short

// Durchschnittliche Wortlänge berechnen
result = text.split(' ').map(x => x.length).reduce((sum, x) => sum + x) / text.split(' ').length;
console.log(result); // => 3

// Nach drittem Buchstaben sortieren
results = names.sort((a, b) => (a.charAt(2) > b.charAt(2) ? 1 : -1));
console.log(results); // => [ 'Ladislaus', 'Friedlinde', 'Heribert', 'Tusnelda', 'Oswine' ]

// Prüfen ob mindestens ein Name mehr als 8 Buchstaben hat
result = names.some((name) => name.length > 8);
console.log(result); // => true

// Prüfen ob alle Namen mindestens 8 Buchstaben haben
result = names.every(name => name.length >= 8);
console.log(result); // => false

// Kleinsten Wert im Array finden
result = inputs.reduce((a, b) => Math.min(a, b));
console.log(result); // => 1

console.log('------------------');








// Übung 16 - Fröhliches Mixen mit Arrays
console.log('Übung 16 - Fröhliches Mixen mit Arrays');

// Prüft ob eine Zutat in der Zutatenliste vorhanden ist
let hasIngredient = (listOfIngredients, searchedIngredient) =>
  listOfIngredients.includes(searchedIngredient);

// Prüft ob alle Zutaten eines Rezepts in der verfügbaren Liste vorhanden sind
let isMixableWith = (cocktailRecipe, availableIngredients) =>
  cocktailRecipe.every((ingredientFromRecipe) =>
    hasIngredient(availableIngredients, ingredientFromRecipe)
  );

let honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice',
];

let ingredientsFromMyBar = [
  'Pineapple',
  'Maracuja Juice',
  'Cream',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice',
  'Milk',
  'Apple Juice',
  'Aperol',
  'Pineapple Juice',
  'Limes',
  'Lemons',
];

// Kann der Honolulu Flip mit den verfügbaren Zutaten gemixt werden?
console.log(isMixableWith(honoluluFlip, ingredientsFromMyBar)); // => true