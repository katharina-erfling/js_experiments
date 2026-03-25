'use strict';

/* ----------------- */
/*String Übungen*/
/* ----------------- */


/*Übung 1*/
console.log('Übung 1');
console.log('Hi ' + 'Oswine' + '. Welcome to NerdWorld!');
console.log('..........');


/*Übung 2*/
console.log('Übung 2');
let username = prompt('Wie ist dein Name?');
console.log('Hi ' + username + '. Welcome to Nerdworld!');
console.log('..........');


/*Übung 3 - Rechnen mit Strings*/
console.log('Übung 3 - Rechnen mit Strings');
console.log('Hallo' + 'Welt');
console.log('Hallo' + ' Welt');
console.log('1' + '1');
console.log(1 + 1);
console.log('1 + 1');
console.log('..........');


/*Übung 4 - Template Strings*/
console.log('Übung 4 - Template Strings');

let currentAge = prompt('Wie alt bist du?');
console.log(`In 10 Jahren wirst du ${currentAge + 10} alt sein`);

let lieblingsEssen = prompt('Was ist dein Lieblingsessen?');
let lieblingsGetraenk = prompt('Was ist dein Lieblingsgetränk?');
console.log(`Dein Lieblingsessen ist ${lieblingsEssen} und dein Lieblingsgetränk ist ${lieblingsGetraenk}`);
console.log('Dein Lieblingsessen ist ' + lieblingsEssen + ' und dein Lieblingsgetränk ist ' + lieblingsGetraenk);
console.log('Dein Lieblingsessen ist ' + lieblingsEssen + ` und dein Lieblingsgetränk ist ${lieblingsGetraenk}`);
console.log('..........');


/*Übung 5 - Fehler im Detail*/
console.log('Übung 5 - Fehler im Detail');

const TALE = `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'\n\nSo she was considering in her own mind, as well as she could, for the hot day made her feel very sleepy and stupid, whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a white rabbit with pink eyes ran close by her.\n\nThere was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the rabbit say to itself, 'Oh dear! Oh dear! I shall be too late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural);\n\nBut when the rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.`;

console.log(TALE);
console.log('..........');