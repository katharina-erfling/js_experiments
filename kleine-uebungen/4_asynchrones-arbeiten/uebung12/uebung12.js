'use strict';

 // ── Übung 12 - Sechs Dateien einlesen ───────────────────────────────────────────────────

console.log('Übung 12 - Sechs Dateien einlesen');

// Dateien im Dateisystem lesen durch Modul fs
const fs = require('fs');

const getFileContent = (name, encoding = 'UTF8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(name, encoding, (error, content) => {
            if (error) {
                reject(`could not read file ${name}`);
            } else {
                resolve(content);
            }
        });
    });
};

Promise.all([
    getFileContent('data/file1.txt'),
    getFileContent('data/file2.txt'),
    getFileContent('data/file3.txt'),
    getFileContent('data/file4.txt'),
    getFileContent('data/file5.txt'),
    getFileContent('data/file6.txt'),
])
    .then((contents) =>
        contents.forEach((content) => {
            console.log(content);
        })
    )
    .catch((error) => {
        console.log(error);
    });



