'use strict';

// ── Übung 29: Datenströme ──────────────────────────

console.log('Übung 29: Datenströme');

const fs = require('fs');
const zlib = require('zlib');

// Erstellt einen Transform-Stream: nimmt Daten rein, gibt gzip-komprimierte Daten raus
const gzipCompressor = zlib.createGzip();

// ReadStream: liest die Datei in Chunks (nicht alles auf einmal im RAM)
const inputStream = fs.createReadStream('products.html');

// WriteStream: schreibt die komprimierten Chunks in die Zieldatei
const outputStream = fs.createWriteStream('products.html.gz');


// Event: wird für jeden eingehenden Datenchunk gefeuert
// → Chunk direkt in den Kompressor schreiben
inputStream.on('data', data => {
    gzipCompressor.write(data);
});

// Event: wird gefeuert wenn der Kompressor einen komprimierten Chunk fertig hat
// → komprimierten Chunk in die Ausgabedatei schreiben
gzipCompressor.on('data', data => {
    outputStream.write(data);
});

// Event: inputStream ist fertig → Kompressor schließen
// gzipCompressor.end() signalisiert: keine Daten mehr, gzip-Footer schreiben
inputStream.on('end', () => {
    gzipCompressor.end();
});