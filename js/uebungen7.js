/* ----------------- */
/*String Methods*/
/* ----------------- */

'use strict'


// Übung 1 Nadel im Heuhaufen
console.log('Übung 1 - Nadel im Heuhaufen');
let haystack = 'haystack haystack haystack haystack haystack haystack haystack needle haystack haystack haystack haystack haystack haystack haystack haystack haystack';

console.log(haystack.indexOf('needle')); // 63 ->  Index des ersten Zeichens des gesuchten Wortes
console.log('------------------')



// Übung 2 - Wenn ein Vorname nicht reicht
console.log('Übung 2 - Wenn ein Vorname nicht reicht');

let name = 'Ladislaus Coolio Jones';
let spacePosition = name.lastIndexOf(' ');
let firstName = name.substring(0, spacePosition);
let lastName = name.substring(spacePosition + 1);
console.log(firstName);
console.log(lastName);
console.log('------------------')




// Übung 3 - Der zerlegte Heribert
console.log('Übung 3 - Der zerlegte Heribert');

let name2 = 'Heribert  Gold ';
console.log(name2.trim());

console.log('------------------')




let firstName2 = 'Ladislaus';
let lastName2 = 'Jones';

console.log(`${firstName2}, ${lastName2.charAt(0)}.`)




// Übung 4 - Der transformierte Ladislaus
console.log('Übung 4 - Der transformierte Ladislaus');

let name3 = 'Ladislaus Jones';
let spacePosition2 = name3.lastIndexOf(' ');
let firstName3 = name3.substring(0, spacePosition2);
let lastName3 = name3.substring(spacePosition2 + 1);
console.log(`${lastName3}, ${firstName3.charAt(0)}.`);

console.log('------------------')


// Übung5 - Führende Nullen
console.log('Übung 5 - Führende Nullen');

let itemNumber = '123';
let correctedNumber = (itemNumber.charAt(0) === '0' ? ' ' : '0') + itemNumber;
console.log(correctedNumber);
console.log('------------------')





/*Übung 6 - Die dunkle Seite von JavaScript*/
console.log('Übung 6 - Die dunkle Seite von JavaScript');

let username = prompt('Wie ist dein Name?');
alert(`Herzlich Willkommen, ${username}`);

let playerFitness = prompt('Fühlst du dich dem gewachsen, gegen das dunkle JavaScript anzutreten? (Ja/ Nein)').toLowerCase();

if (playerFitness === 'ja') {
    alert('Viel Spaß beim Spiel und alles Gute - du wirst es brauchen!');

    let fightOne = prompt('Welcher Operator hat den höheren Vorrang: * oder +?');
    if (fightOne === '*') {
        alert('Yeah, das ist richtig!');
    } else {
        alert('Nope!');
    }

    let fightTwo = prompt('Was ist das deutsche Wort für "If"?').toLowerCase();
    if (fightTwo === 'wenn' || fightTwo === 'falls'){
        alert('Ja, genau!');
    }
    else {
        alert('Nein, das ist falsch!');
    }
    console.log(fightTwo);

    let fightThree = prompt('Bitte gib jetzt einen String mit einer Länge zwischen 8 und 15 Zeichen ein')

    if (fightThree.length >= 8 && fightThree.length <= 15) {
        alert('Richtig!');
    } 
    else {
        alert('Das ist nicht korrekt!');
    }


} else {
    alert('Oh... Besser ist es wohl');
}
console.log('..........'); 


/*Übung 7 - Drug Mug*/
console.log('Übung 7 - Drug Mug');
 
let productName = 'Prescription Mug';
let productDescription = 'Prescription Mug: Coffee Mug which looks like a drug bottle. Your Prescription Mug is a great conversation starter. Great for the caffeine addict in your life — one that doesnt need an intervention. You will love your Prescription Mug.';
let newProductName = 'Drug Mug';

console.log(productDescription.replaceAll(productName, newProductName));
console.log('------------------')


/*Übung 8 - Include*/
console.log('Übung 8 - Include');

let productName2 = 'Prescription Mug';
let search = 'Mug';

console.log(productName2.toLowerCase().includes(search.toLowerCase())); // => True
console.log('------------------')


/* Übung 9 - Starts With */
console.log('Übung 9 - Starts With');

let productName3 = '[Sale] Lightsaber Pen';
let search2 = '[Sale]';

console.log(productName3.startsWith(search2));



console.log('------------------')
