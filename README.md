# 🧪 JS Experiments
Eine wachsende Sammlung von JavaScript-Übungen und Mini-Projekten – entstanden beim Lernen im Rahmen der Frontend Developer Zertifizierung JavaScript.

🚧 Work in Progress  
Dieses Repo wächst mit – neue Experimente kommen regelmäßig dazu.

---

## 📁 Projektstruktur
```
/
├── kleine-uebungen/        ← Übungsaufgaben
│   ├── index.html
│   ├── hallo-welt.js
│   ├── uebungen1.js
│   ├── uebungen2.js
│   ├── uebungen3.js
│   ├── uebungen4.js
│   ├── uebungen5.js
│   ├── uebungen6.js
│   ├── uebungen7.js
│   ├── uebungen8.js
│   ├── uebungen9.js
│   ├── uebungen10.js
│   ├── uebungen11.js
│   ├── uebungen12.js
│   ├── uebungen-asynchron.js
│   └── 4_asynchrones-arbeiten/
│       ├── uebung12/
│       │   ├── data/
│       │   │   ├── file1.txt
│       │   │   ├── file2.txt
│       │   │   ├── file3.txt
│       │   │   ├── file4.txt
│       │   │   ├── file5.txt
│       │   │   └── file6.txt
│       │   └── uebung12.js
│       └── uebung13/
│           └── uebung13.js
├── dom-abfragen/           ← DOM Selektoren & Abfragen
│   ├── index.html
│   └── js/
│       └── script.js
├── dom-test/               ← DOM Manipulation
│   ├── index.html
│   └── js/
│       └── script.js
├── artikellaenge/          ← CSS-Klasse per Textlänge
│   ├── artikellaenge.html
│   └── artikellaenge.js
├── buy-button/             ← Button Toggle
│   ├── index.html
│   └── buy_button.js
├── running-light/          ← Glühbirnen-Experimente
│   ├── index.html
│   └── running_light.js
├── font-games/             ← Schriftgröße, Farbe & Hintergrund
│   ├── index.html
│   ├── style.css
│   └── font_size.js
├── tooltips/               ← Maus-Tooltips mit Lookup-Objekt
│   ├── index.html
│   ├── tooltips.css
│   └── tooltips.js
└── awesome-tours/          ← Bilderinfo per data-* Attributen
    ├── index.html
    ├── awesome_tours.css
    └── awesome_tours.js
```

---

## 🧩 Experimente

| Projekt | Beschreibung | Themen |
|--------|-------------|--------|
| hallo-welt.js | Einstieg in JavaScript | console.log, alert |
| uebungen1.js | Erste JS-Übungen | console.log, alert, typeof, Operatoren, prompt, String-Methoden |
| uebungen2.js | Zahlensysteme & Präzision | Binär, Oktal, Hexadezimal, Exponentialnotation, Rundungsfehler, IEEE-754 |
| uebungen3.js | Strings & Typkonvertierung | Verkettung, Template Strings, Escape-Zeichen, Zitate in Strings, prompt(), Konstanten, implizite & explizite Typkonvertierung, NaN |
| uebungen4.js | Typkonvertierung & Rechner | Ausdrücke & Datentypen, Kraftstoffverbrauchsrechner, toFixed() |
| uebungen5.js | Math-Objekt | Math.floor(), Math.round(), Math.random(), prompt(), Number() |
| uebungen6.js | If/Else & Bedingungen | if/else, else if, Vergleichsoperatoren, Booleans, null, undefined, Nutzereingaben, Eingabevalidierung, String-Methoden (startsWith, toLowerCase, length), Schaltjahrberechnung, Rabattlogik |
| uebungen7.js | String Methods | indexOf(), lastIndexOf(), substring(), trim(), charAt(), replaceAll(), includes(), startsWith(), toLowerCase() |
| uebungen8.js | Funktionen | Arrow Functions, Parameter, Rückgabewerte, Ternärer Operator in Template Strings, Guard Clauses, Restparameter (...rest), forEach(), verschachtelte Funktionen |
| uebungen9.js | Arrays | Array erstellen, length, Indexzugriff, push(), unshift(), pop(), splice(), slice(), join(), sort(), indexOf(), split(), reverse() |
| uebungen10.js | Higher Order Functions | sort() mit Vergleichsfunktion, map(), filter(), forEach(), reduce(), some(), every(), includes(), endsWith(), Callback-Parameter, verschachtelte Arrow Functions |
| uebungen11.js | Objekte | Objekte erstellen, Punkt- & Bracket-Notation, Methoden, this, Destructuring, Renaming-Destructuring, Default-Werte, Rest-Operator, Shorthand Properties, CSV-Verarbeitung |
| uebungen12.js | Rekursion | Rekursive Summe, Kombinatorik (Pascal'sches Dreieck), Fibonacci mit Memoization, String-Umkehrung, Maximum in Array, Tiefe verschachtelter Arrays, Summe verschachtelter Arrays |
| uebungen-asynchron.js | Asynchrones Arbeiten | async/await, fetch, Promise, .then(), .catch(), Promise.all(), setTimeout, fs.readFile, rekursive Verzögerung, Chaining |
| 4_asynchrones-arbeiten/uebung12/ | Promise.all – Sechs Dateien einlesen | Promise.all(), fs.readFile, Node.js fs-Modul, paralleles Einlesen |
| 4_asynchrones-arbeiten/uebung13/ | DNS-Lookup per Promise | dns.lookup(), Node.js dns-Modul, Promise, IPv4 |
| dom-abfragen/ | DOM Selektoren & Abfragen | querySelector(), querySelectorAll(), CSS-Selektoren, Attributselektoren, Pseudo-Klassen, $$() |
| dom-test/ | DOM Manipulation | innerHTML, Element-Inhalte setzen, Template Literals im DOM |
| artikellaenge/ | CSS-Klasse per Textlänge | classList.add(), innerHTML.length, querySelector()-Kurzschreibweise, Guard Clauses |
| buy-button/ | Button Toggle | disabled, Event Listener, querySelector(), gegenseitiges Aktivieren/Deaktivieren |
| running-light/ | Glühbirnen-Experimente – 4 Varianten: Chase (mouseover), Click, Chaos (Math.random()), Hopping (2er-Sprünge) | mouseover, click, src-Manipulation, forEach(), Math.random(), Index-Logik |
| font-games/ | Schriftgröße, Farbe & Hintergrund per Button und Range-Slider – inkl. inkrementeller +/- Buttons | style.fontSize, style.color, style.backgroundColor, input-Event, rgb(), getComputedStyle(), parseInt(), Block-Scoping |
| tooltips/ | Maus-Tooltips die dem Cursor folgen – Texte per Lookup-Objekt, Fallback mit ?? | mousemove, mouseleave, clientX/Y, position: absolute, Lookup-Objekt, Nullish Coalescing (??) |
| awesome-tours/ | Bildbeschreibungen per mouseover aus data-* Attributen lesen und anzeigen | data-* Attribute, dataset, Attributselektor, mouseover, Template Literals, innerHTML |

---

## 🛠️ Technologien
JavaScript (ES6+) · Node.js · HTML5 · CSS3

---

## 📚 Kontext
Teil von **Softwareentwicklerin Frontend Javascript Zertifizierung** bei GFN (extern zertifiziert durch WPI), März – Juni 2026.
