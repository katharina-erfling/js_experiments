'use strict';

// ── Übung 26: CSV-Datensätze mit Anführungszeichen Teil 2 ──────────────────────────

console.log('Übung 26: CSV-Datensätze mit Anführungszeichen Teil 2');

const mixedCSV =
    '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"'

// EINSTIEGSPUNKT: Wandelt eine CSV-Zeile in ein Array um
// Trick: Komma vorne und hinten anhängen → jedes Feld hat ein Komma DAVOR
// Beispiel: ',"feld1","feld2",'
const mixedCSVToArray = (csvLine) =>
    findCommaPositions(',' + csvLine + ',')  // 1. Komma-Positionen finden
        .map((position, i, positions) =>
            csvLine.slice(position, positions[i + 1] - 1)  // 2. Zeichen zwischen zwei Kommas ausschneiden
        )
        .slice(0, -1);  // 3. letztes Element entfernen (das durch das angehängte Komma entsteht)


// Gibt alle Positionen von Kommas zurück, die AUSSERHALB von Anführungszeichen liegen
const findCommaPositions = (csvLine) =>
    csvLine.split('').reduce(
        (positions, char, position) =>
            char === ',' && isEven(countQuotes(csvLine.slice(0, position)))
                // Ein Komma ist "außerhalb", wenn die Anzahl der Anführungszeichen
                // DAVOR gerade ist (0, 2, 4...) → kein offenes Anführungszeichen
                ? positions.concat(position)  // relevantes Komma → Position merken
                : positions,                  // Komma innerhalb von "" → ignorieren
        []  // Startwert: leeres Array
    );


// Zählt die Anführungszeichen in einem String
// Wird genutzt um zu prüfen ob man sich "innerhalb" eines Feldes befindet
const countQuotes = (csvLine) =>
    csvLine.split('').filter((character) => character === '"').length;


// Hilfsfunktion: ist eine Zahl gerade?
const isEven = (num) => num % 2 === 0;


console.log(mixedCSVToArray(mixedCSV));
// → [ '"very big, soft computer mouse"', '"the cutest peripheral ever"', '"10"', '"39.90"' ]