'use strict';

// ── Übung 28: Passwortgenerator ──────────────────────────

console.log('Übung 28: Passwortgenerator');

const crypto = require('crypto'); // Node.js-Modul für kryptografisch sichere Zufallszahlen

const PASSWORTH_LENGTH = 10;

// Erlaubte Zeichen – bewusst ohne l, I, O, 0, 1 (leicht verwechselbar)
const s = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ!.,;#$%/+*';

// Erzeugt einen Buffer mit 10 kryptografisch zufälligen Bytes (Werte 0–255)
// Sicherer als Math.random(), das NICHT für Passwörter geeignet ist
const buf = crypto.randomBytes(PASSWORTH_LENGTH);

const password = Array.from(buf)       // Buffer → Array von Zahlen (0–255)
    .map(byte => s.charAt(byte % s.length)) // Zahl → Zeichen aus dem Alphabet
    // byte % s.length → Index zwischen 0 und 65
    .join(''); // Array → String

console.log(password);