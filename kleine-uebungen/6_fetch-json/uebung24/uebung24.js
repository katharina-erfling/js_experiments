'use strict';

// ── Übung 24: Objekt in JSON umwandeln ──────────────────────────

console.log('Übung 24: Objekt in JSON umwandeln');


const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
};

const jsonString = JSON.stringify(book);
console.log(jsonString);

try {
  const parsedBook = JSON.parse(jsonString);
  console.log(parsedBook.title);
  console.log(parsedBook.author);
} catch (error) {
  console.error('Invalid JSON:', error);
}
