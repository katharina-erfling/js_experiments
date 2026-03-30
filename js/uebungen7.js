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

