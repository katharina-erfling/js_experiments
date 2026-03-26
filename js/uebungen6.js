/* ----------------- */
/*If Else Übungen*/
/* ----------------- */

'use strict'





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

} else {
    alert('Oh... Besser ist es wohl');
}




/*Übung 4 - Schaltjahr*/
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



