
/* ----------------- */
/*Zahlensysteme Übung*/
/* ----------------- */


/*1. Variablen erstellen: Schreibe Variablen für jedes Zahlensystem – Binary, Octal, Hexadecimal und Exponential.
2. Werte überprüfen: Gib die Werte in der Konsole aus und vergleiche sie mit ihrer Dezimalumrechnung. */



console.log('Zahlensysteme Übung') 

let binaryExample = 0b101010;
console.log('Binär:', binaryExample); // => 42

let octalExample = 0o32;
console.log('Octal:', octalExample); // => 26

let hexExample = 0xA3;
console.log('Hexadezimal:', hexExample); // => 163

let exponentialExample = 1.56e5;
console.log('Exponentialnotation:', exponentialExample); // => 156000
console.log('----------------------------------')
console.log('----------------------------------')







/* ---------------------------------- */
/*Zahlensysteme Weiterführende Übung */
/* --------------------------------- */

/* Aufgabe 1: Eigene Binärzahl
- Erstelle eine neue Variable mit einer selbst gewählten Binärzahl.
- Gib sie in der Konsole aus und kommentiere den dezimalen Wert.*/

let binaryExample2 = 0b1110001;
console.log('Meine Binärzahl ist', binaryExample2); // => 113



/* Aufgabe 2: Oktalzahl selbst berechnen
- Erstelle eine Oktalzahl, die in Dezimal 25 ergibt.
- Gib das Ergebnis in der Konsole aus.*/

let octalExample2 = 0o40;
console.log('Meine Oktahlzahl ist', octalExample2); // => 32


/* Aufgabe 3: Hexadezimale Farbe
- Erstelle eine hexadezimale Zahl, die dem Dezimalwert 255 entspricht.
- Wie wird dieser Wert z. B. in Farben verwendet? */

let hexExample2 = 0xFF;
console.log('Meine Hexadezimalzahl (#FF0000 (Rot)) ist', hexExample2); // => 255
/* -> #FF0000 -> Rot */




/*Aufgabe 4: Exponentialnotation für kleine Zahl
- Erstelle eine Exponentialzahl, die 0.00045 darstellt.
- Gib das Ergebnis aus und überprüfe die Richtigkeit. */

let exponentialExample2 = 4.5e-4;
console.log('Meine Exponentialzahl ist', exponentialExample2); // => 0.00045



/*Bonus: Rundungsfehler untersuchen
- Addiere 0.1 + 0.2 + 0.3 und vergleiche mit 0.6.
- Erkläre das Ergebnis in einem Kommentar. */

console.log(0.1 + 0.2 + 0.3); // => 0.6000000000000001
console.log(0.6);              // => 0.6

// Das Ergebnis ist nicht exakt 0.6, weil JavaScript Dezimalzahlen
// im IEEE-754 Format speichert. Manche Zahlen wie 0.1 und 0.2
// können im Binärsystem nicht exakt dargestellt werden –
// die kleinen Ungenauigkeiten summieren sich beim Addieren.






