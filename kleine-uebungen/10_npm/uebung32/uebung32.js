'use strict';

// ── Übung 32: Information zum Betriebssystem und der Anzahl der vorhandenen CPUs ──────────────────────────

console.log('Übung 32: Information zum Betriebssystem und der Anzahl der vorhandenen CPUs');

const os = require('os');

const system = os.platform();

const cpus = os.cpus().length;

console.log(`Ich laufe auf einem Rechner mit ${system} und ${cpus} Kernen`);
