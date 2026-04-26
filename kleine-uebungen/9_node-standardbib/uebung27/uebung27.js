'use strict';

// ── Übung 27: Ohne Umwege ──────────────────────────

console.log('Übung 27: Ohne Umwege');

const fs = require('fs');
const zlib = require('zlib'); // Node.js-Modul zum Komprimieren (hier: gzip)

const STOCK_WARN_AMOUNT = 5;


// Wandelt eine CSV-Zeile in ein HTML-<li>-Element um (gleiche Logik wie Übung 23)
const recordToHTML = (record) => {
  const fields = record.split(',');
  const html = `<li class="list-group-item">
    <h2>${fields[1]}</h2>
    <p>${fields[2]}</p>
    <p><strong>Price:</strong> EUR ${fields[4]}</p>
    ${
      Number(fields[3]) <= STOCK_WARN_AMOUNT
        ? '<p class="alert alert-warning">Last items in stock!</p>'
        : ''
    }
  </li>`;
  return html;
};


// Datei ASYNCHRON einlesen (anders als in Übung 23 – blockiert den Thread nicht)
// Der Callback wird aufgerufen sobald die Datei geladen ist
fs.readFile('data/products.csv', 'UTF8', (err, data) => {
  if (err) {
    console.error(err);
    return; // frühzeitiger Abbruch – kein throw, weil wir in einem Callback sind
  }

  const products = data.split('\n');
  products.shift(); // Header-Zeile entfernen

  const entries = products
    .filter((row) => row !== '')
    .map(recordToHTML);

  writeToFile(entries);
});


const writeToFile = (entries) => {
  const headerStr = `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Products</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>
    <main>
      <div class="container py-5">`;
  const footerStr = `</div>
    </main>
    <script>
      'use strict';
      
    </script>
  </body>
</html>`;

  const html = `${headerStr}
    <ul class="list-group">
    ${entries.join('')}
  </ul>${footerStr}`;

  try {
    // HTML-String → gzip-komprimierter Buffer
    const compressed = zlib.gzipSync(html);

    // Komprimierte Datei schreiben (.gz = gzip-Format, z.B. für Webserver-Auslieferung)
    fs.writeFileSync('data/products.html.gz', compressed);
  } catch (err) {
    console.error(err);
    return;
  }

  console.log('file written');
};