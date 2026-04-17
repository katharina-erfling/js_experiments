/* ----------------- */
/* Funktionen*/
/* ----------------- */

'use strict'


let showNewsletter = () => {
    console.log('Dear Customer,\n');
  console.log(
    "We're pleased to inform you that NerdWorld is making a number of new discounts available to you. Please visit http://www.nerdworld.example/discounts for detailed information.\n"
  );
  console.log('Happy nerding,\nYour NerdWorld-Team');
};





// Übung 1 -  In die Konsole geloggt
console.log('Übung 1 -  In die Konsole geloggt');

let consoleLogin = () => {
    console.log('Katharina');
};

consoleLogin();

console.log('------------------')




// Übung 2 -  Hello user
console.log('Übung 2 -  Hello user');

let showNewsletterFor = (username) => {
    console.log(`Hello ${username}, \n`);
    console.log(
    "We're pleased to inform you that NerdWorld is making a number of new discounts available to you. Please visit http://www.nerdworld.example/discounts for detailed information.\n"
  );
  console.log('Happy nerding,\nYour NerdWorld-Team\n\n');
};

showNewsletterFor('Heribert');
showNewsletterFor('Gundula');
showNewsletterFor('Sansa');

console.log('------------------')





// Übung 3 - Der transformierte Ladislaus Teil 2
console.log('Übung 3 - Der transformierte Ladislaus Teil 2');

let logTransformedName = (firstname, lastname) => {
    console.log(`${lastname}, ${firstname.charAt(0)}.`)
}

logTransformedName('Ladislaus', 'Jones');

console.log('------------------')



// Übung 4 - Hello, dear ${recipient}
console.log('Übung 4 - Hello, dear ${recipient');

let showInvitationFor = (recipient, event, date, isVIP) => {
  console.log(`
Dear ${recipient},

${isVIP ? 'You have registered as a VIP! Enjoy exclusive benefits and access to VIP areas.' : 'Thank you for your registration.'}


Event Details:
- Event: ${event}
- Date: ${date}
- Venue: Main Hall, Conference Center

We look forward to seeing you at the event!

Best regards,
The Event Team`)

}

showInvitationFor('Heribert', 'Tech Conference', 'July 24', true);
showInvitationFor('Goldy', 'Art Workshop', 'August 15', false);
showInvitationFor('Ladislaus', 'Music Festival', 'September 10', true);

console.log('------------------')




// Übung 5 - Rückgabewert
console.log('Übung 5 - Rückgabewert');

let cylindricalVolume2 = (radius, height) => Math.PI * radius * radius * height;
console.log(cylindricalVolume2(5,80));
console.log('------------------')




// Übung 6 - Rückgabewert II
console.log('Übung 6 - Rückgabewert II');

const BASE_COST_PER_UNIT2 = 0.7;
const COST_PER_CC2 = 0.001;

let shippingCost2 = (volume) => volume * COST_PER_CC2 + BASE_COST_PER_UNIT2;
let cylindricalVolume3  = (radius, height) => Math.PI * radius * radius * height;

let height2 = 80
let diameter2 = 10
let mailingTubeVolume2 = cylindricalVolume3(diameter2 / 2, height2)

console.log(shippingCost2(mailingTubeVolume2));
console.log('------------------')


// Übung 6 - Rückgabewert III
console.log('Übung 6 - Rückgabewert III');

const BASE_COST_PER_UNIT = 0.7;
const COST_PER_CC = 0.001;

let shippingCost = (volume) => volume * COST_PER_CC + BASE_COST_PER_UNIT;
let cubeVolume = (length, width, height) => length * width * height;
let cylindricalVolume = (radius, height) => Math.PI * radius * radius * height;

let height = 80
let diameter = 10
let mailingTubeVolume = cylindricalVolume(diameter / 2, height)

let width = 30;
let length = 25;
let cartonHeight = 12;
let cartonVolume = cubeVolume(length, width, cartonHeight);

console.log(shippingCost(mailingTubeVolume));
console.log(shippingCost(cartonVolume));
console.log('------------------')




// Übung 7 - Der transformierte Ladislaus, Teil 3
console.log('Übung 7 - Der transformierte Ladislaus, Teil 3');

let logTransformedName2 = (firstname, lastname) => `${lastname}, ${firstname.charAt(0)}.`

console.log(logTransformedName2 ('Ladislaus', 'Jones'));


console.log('------------------')



//Übung 8 - Reichweite & Verbrauch - Rückgabewert
console.log('Übung 8 - Reichweite & Verbrauch - Rückgabewert');


let fragKilometer = () => prompt('Wie viele Kilometer bist du gefahren?');
let fragVerbrauch = () => prompt('Wie viel Benzin hast du verbraucht?');
let fragTank = () => prompt('Wie groß ist dein Tank (in l)?');

let kilometer = fragKilometer();
let verbrauch = fragVerbrauch();
let tank = fragTank();

let kraftstoffVerbrauch = Math.round((Number(verbrauch) / Number(kilometer) * 100));
let maxReichweite = Math.round((Number(tank) * Number(kilometer) / Number(verbrauch)));

console.log(`Du bist ${kilometer}km weit gefahren und hast ${verbrauch}l Benzin verbraucht. Das macht ${kraftstoffVerbrauch}l auf 100km`);
console.log(`Deine maximale Reichweite beträgt ${maxReichweite}km`);

console.log('..........');




//Übung 9 - Rückgabewerte bei mehrzeiligen Funktionen
console.log('Übung 9 - Rückgabewerte bei mehrzeiligen Funktionen');

let costForShippingTube = (diameter, height) => {
  const BASE_COST_PER_UNIT3 = 0.7;
  const COST_PER_CC3 = 0.001;

  let radius = diameter / 2;
  let volume = Math.PI * radius * radius * height;

  let cost = volume * COST_PER_CC3 + BASE_COST_PER_UNIT3;
  return cost;
}

console.log(costForShippingTube(10, 80));
console.log('..........');



//Übung 10 - Wächter für Funktionen
console.log('Übung 10 - Wächter für Funktionen');

let cylindricalVolume4 = (radius, height) => {
  if (radius < 0 || height < 0) return NaN; //wenn Zahl unter Null gibt es NaN

  let volume = Math.PI * radius * radius * height;
  return volume;
}

console.log(cylindricalVolume4(30, 30));

console.log('..........');



//Übung 11 - Restparameter
console.log('Übung 11 - Restparameter');

const greetWith = (greeting, ...names) => 
  names.forEach((name) => {
    console.log(`${greeting} ${name}`)
  });


  greetWith('heyho', 'Goldy', 'Ladislaus', 'Heribert');
