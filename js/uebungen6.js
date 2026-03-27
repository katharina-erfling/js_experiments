/* ----------------- */
/*If Else Übungen*/
/* ----------------- */

'use strict'



/*Übung 0 - Booleans Einstieg*/
console.log('Übung 0 - Booleans Einstieg');

let javaScriptStudent = true;
let javaScriptProfi = false;


let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);
console.log(isAdult || hasID);
console.log(!isAdult);

console.log('..........');




/*Übung 0 - Sonniges Wochenende*/
console.log('Übung 0 - Sonniges Wochenende');

let isWeekend = false;
let isSunny = true;

console.log(isWeekend && isSunny);





/*Übung 0 - Null*/
console.log('Übung 0 - Null');


let favoriteColor = null;
console.log(favoriteColor);



console.log('..........');





/*Übung 0 - Undefined*/
console.log('Übung 0 - Undefined');

let myAge;
console.log(myAge);
console.log('..........');





/*Übung 1 - Rechner*/
console.log('Übung 1 - Rechner');

const SOLUTION = 42;

let answer = Number(prompt('Was ist das Ergebnis aus 6 * 7?'))

if (answer === SOLUTION) {
    console.log('42 ist richtig. Ist ja auch die Antwort auf alles.')
    console.log('Herzlichen Glückwunsch! Du bist ein Genie!')
}

console.log('..........');





/*Übung 2 - Rabatt*/
console.log('Übung 2 - Rabatt');

const DISCOUNT = 0.05;

let quantityOfCartItem = Number(prompt('Wie viele möchtest du haben?'));

let pricePerItem = 20;
let totalPrice = quantityOfCartItem * pricePerItem;

if (quantityOfCartItem >= 3) {
    totalPrice = totalPrice * (1- DISCOUNT);
}

console.log(`Das macht dann ${totalPrice}`);

console.log('..........');



/*Übung 3 - Die dunkle Seite von JavaScript*/
console.log('Übung 3 - Die dunkle Seite von JavaScript');

let username = prompt('Wie ist dein Name?');
alert(`Herzlich Willkommen, ${username}`);

let playerFitness = prompt('Fühlst du dich dem gewachsen, gegen das dunkle JavaScript anzutreten? (Ja/ Nein)');

if (playerFitness === 'Ja') {
    alert('Viel Spaß beim Spiel und alles Gute - du wirst es brauchen!');

    let fightOne = prompt('Welcher Operator hat den höheren Vorrang: * oder +?');
    if (fightOne === '*') {
        alert('Yeah, das ist richtig!');
    } else {
        alert('Nope!');
    }

    let fightTwo = prompt('Was ist das deutsche Wort für "If"?');
    if (fightTwo === 'wenn' || fightTwo === 'falls'){
        alert('Ja, genau!');
    }
    else {
        alert('Nein, das ist falsch!');
    }

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



/*Übung 4 - Schaltjahr*/ /*
console.log('Übung 4 - Schaltjahr');

let year = prompt('Nenne ein Jahr:');

if (year % 400 === 0) {
  alert(`Das Jahr ${year} ist ein Schaltjahr`);
} 
    else if (year % 100 === 0) {
        alert(`Das Jahr ${year} ist kein Schaltjahr`);
}   else if (year % 4 === 0) {
        alert(`Das Jahr ${year} ist ein Schaltjahr`);
} 

else {
  alert(`Das Jahr ${year} ist kein Schaltjahr`);
}

console.log('..........'); */



/*Übung 4 - Schaltjahr - Alternative*/ 
console.log('Übung 4 - Schaltjahr - Alternative');

let year = Number(prompt('Trag ein Jahr ein:'))

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`Das Jahr ${year} ist ein Schaltjahr!`);
} else {
    console.log(`Das Jahr ${year} ist kein Schaltjahr.`);
}
console.log('..........');




/*Übung 5 - Von guten und bösen Eingaben*/
console.log('Übung 5 - Von guten und bösen Eingaben');


let firstName = prompt('Wie ist dein Vorname?');

if (firstName.length >= 2 && firstName.length <= 100) {
    alert('Vorname gültig!');
} else {
    alert('Dein Vorname muss zwischen 2 und 100 Zeichen lang sein!');
}




let lastName = prompt('Wie ist dein Nachname?');

if (lastName.length >= 2 && lastName.length <= 100) {
    alert('Nachname ist gültig!');
} else {
    alert('Dein Nachname muss zwischen 2 und 100 Zeichen lang sein!' )
}



let age = prompt('Wie alt bis du?')

if (Number(age) >= 0 && Number(age) < 150) {
    alert('Dein Alter ist korrekt!');
} else {
    alert('Dein Alter ist nicht korrekt');
}



let favoriteDrink = prompt('Was ist dein Lieblings-Heißgetränk?');

if (!favoriteDrink.toLowerCase().startsWith('c') && !favoriteDrink.toLowerCase().startsWith('t')) {
    alert('Glaub ich dir nicht!');
} 

else {
    alert('Gute Wahl!');
}

console.log('..........');