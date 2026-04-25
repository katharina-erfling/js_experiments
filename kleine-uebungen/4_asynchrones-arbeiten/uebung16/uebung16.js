'use strict';

 // ── Übung 16: Geoquiz ───────────────────────────────────────────────────

console.log('Übung 16: Geoquiz');


// Array aus [Land, Hauptstadt]-Paaren
const countriesWithCapital = [
  ['UK', 'London'],
  ['France', 'Paris'],
  ['Germany', 'Berlin'],
  ['Switzerland', 'Bern'],
  ['Austria', 'Vienna'],
  ['Russia', 'Moscow']
];

// Gibt die Hauptstadt eines Landes zurück
const capitalOf = country => {
    const capitalIndex = 1; // Index der Hauptstadt im Unter-Array
    const countryIndex = 0; // Index des Landes im Unter-Array

    // Sucht das erste Paar, bei dem der Landesname übereinstimmt
    return countriesWithCapital.find(
        (countryWithCapital) => countryWithCapital[countryIndex] === country,
        )[capitalIndex]; // Gibt die Hauptstadt aus dem gefundenen Paar zurück
};

console.log(capitalOf('Germany')); // Ausgabe: Berlin