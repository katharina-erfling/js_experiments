'use strict'

/* ----------------- */
/*Asynchrones Arbeiten*/
/* ----------------- */


// Asynchrone Funktion definieren, um auf API-Antworten warten zu können
async function load() {

    // Fehlerbehandlung: Falls fetch oder JSON-Parsing fehlschlägt, wird der catch-Block ausgeführt
    try {
        // HTTP GET-Request an die Cat Facts API senden und auf die Antwort warten
        let response = await fetch('https://catfact.ninja/fact');

        // Den Response-Body als JSON parsen und auf das Ergebnis warten
        let result = await response.json();

        // Den eigentlichen Katzenfakt (Textstring) in der Konsole ausgeben
        console.log(result.fact);

    } catch(error) {
        // Tritt bei Netzwerkfehler oder ungültigem JSON ein – gibt den Fehler aus
        console.log('Ein Fehler ist aufgetreten', error);
    }
}

// Funktion aufrufen, um den Code auszuführen
load();




// Übung 11: Die Pyramide abbrechen

console.log('Übung 11: Die Pyramide abbrechen');

// enthält den gesamten Satz als Zeichenkette
const words = 'The pyramid of doom keeps growing'


// rekursive Funktion
// -> vermeidet den Pyramid of Doom Effekt, der durch verschachtelte Callbacks entsteht
// str -> wenn kein Standardwert übergeben wird, ist die Antwort ein leerer String
// idx -> Index des aktuellen Wortes, das ausgegeben wird, Standardwert 0
const printWords = (str = '', idx = 0) => {
    // Satz wird in ein Array von Wörtern aufgeteilt, Leerzeichen als Trenner (fester Ausdruck)
    const words = str.split(/\s/);
    // Guard
    // beendet die Rekursion, sobald alle Wörter ausgegeben wurden
    if (idx >= words.length) return '';

    console.log(words[idx]);

    // verzögert den rekursiven Aufruf um eine Sekunde  
    setTimeout(() => {
        // rekursiver Ausdruck: gibt das nächste Wort aus -> Index wird um eins erhöht
        printWords(str, ++idx);
    },1000);
};

printWords(words);



console.log('/////////////////////////');



// Promise

// Funktion, die von Promise aufgerufen wird – resolve = Erfolg, reject = Fehler
const doWork = (resolve, reject) => {
    const ergebnis = 21 * 2;
    // Berechnung erfolgreich – Promise mit dem Ergebnis auflösen
    resolve(ergebnis);
}

// Promise-Objekt erstellen – führt doWork aus und wartet auf resolve/reject
const p1 = new Promise(doWork);


 
// Then

// Zeigt wie man das Ergebnis eines Promise abholt
// Zwei Argumente: erstes für Erfolg (resolve), zweites für Fehler (reject)
p1.then(
    result => console.log('OK: ' + result),
    reason => console.log('KO: ' + reason),
);



// Zeigt ein Promise mit echter Verzögerung durch setTimeout
// resolve(42) wird erst nach 1 Sekunde aufgerufen
// .then() hier nur mit einem Argument – kein Fehlerfall nötig
const p2 = new Promise(resolve => setTimeout(() => resolve(42), 1000))

p2.then(result => console.log(result))




// Zeigt dass .then() immer asynchron läuft, selbst wenn resolve sofort aufgerufen wird
// Deshalb ist die Reihenfolge: Step 1 → Step 2 → OK 42
// Obwohl p3 sofort erfüllt ist, wartet .then() bis der synchrone Code fertig ist
const p3 = new Promise(resolve => resolve(42));
console.log('Step 1');

p3.then(result => console.log('OK ' + result));
console.log('Step 2');





// ── 1. Chaining – .then() verketten ──────────────────────────────────────────

// Gibt ein Promise zurück, das nach 1000ms resolved (ohne Wert)
const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

wait()
    .then(() => {
        console.log('The');
        return wait(); // Nächstes .then() wartet auf dieses Promise
    })
    .then(() => {
        console.log('pyramid');
        return wait();
    });



// ── 2. Promise Delay – Text verzögert ausgeben ────────────────────────────────

// Gibt ein Promise zurück, das nach `time` ms den Text `str` ausgibt und resolved
const printDelay = (time, str) =>
  new Promise((resolve) =>
    setTimeout(() => {
        console.log(str);
        resolve(); // Promise abschließen, damit das nächste .then() startet
    }, time)
);

// Jedes .then() wartet auf das vorherige Promise – sequenzielle Ausgabe
printDelay(1000, 'The')
  .then(() => printDelay(1000, 'pyramid'))
  .then(() => printDelay(1000, 'of'))
  .then(() => printDelay(1000, 'doom'))
  .then(() => printDelay(1000, 'is'))
  .then(() => printDelay(1000, 'defeated.'));



// ── 3. Berechnung mit Catch ───────────────────────────────────────────────────

// 50% Chance: Promise wird mit Ergebnis resolved oder mit Fehler rejected
const tryWork = (resolve, reject) => {
    const ergebnis = 21 * 2;
    if (Math.random() < 0.5) {
        resolve(ergebnis);
    } else {
        reject(new Error('nope')); // Bricht die Promise-Kette ab → .catch() springt an
    }
};

new Promise(tryWork)
  .then(() => new Promise(tryWork)) // Nur ausgeführt, wenn vorheriges resolved
  .then(() => new Promise(tryWork))
  .then((result) => console.log('OK: ' + result)) // Alle drei erfolgreich
  .catch((err) => {
    // Fängt den ersten reject aus der gesamten Kette ab
    console.log('KO: ' + err.message);
    console.log(err.stack); // Gibt den genauen Fehler-Stacktrace aus
  });



// Read File FS Modul

// Node.js Dateisystem-Modul einbinden
const fs = require('fs');

// Datei asynchron lesen – Callback wird aufgerufen, sobald fertig
fs.readFile('data/file.txt', 'UTF8', (error, content) => {
    if (error) {
        // Datei nicht gefunden oder kein Lesezugriff
        console.log('could not read file');
    } else {
        // Dateiinhalt als String ausgeben
        console.log(content);
    }
});



// readFile in Funktion, die Promise zurückgibt

const fs2 = require('fs');

const getFileContent = (path, encoding = 'utf-8') => {
    return new Promise((resolve, reject) => {
        fs2.readFile(path, encoding, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

getFileContent('data/file.text')
    .then((data) => console.log(data))
    .catch((err) => console.error(`Something went wrong: ${err}`));









