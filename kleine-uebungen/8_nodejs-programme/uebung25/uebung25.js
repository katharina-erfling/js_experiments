'use strict';

// ── Übung 25: CSV-Datensätze mit Anführungszeichen ──────────────────────────

console.log('Übung 25: CSV-Datensätze mit Anführungszeichen');

const quotedCSV =
    '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"'

const fields = quotedCSV.slice(1, -1).split('","');

console.log(fields);
