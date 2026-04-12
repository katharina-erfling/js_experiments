/* ----------------- */
/*       Objekte    */
/* ----------------- */

'use strict'





// Objekt anlegen und darauf zugreifen
const user = {
    firstName2: 'Ravith',
    age: 27,
    isAdmin: false,
};

// Punkt-Notation
console.log(user.firstName2);

// Bracket-Notation
console.log(user['age']);

// Dynamisch
const propertyToFind = 'age';
console.log(user[propertyToFind]);






// Methoden definieren
const person = {
    name: 'Ben',
    run(){
        console.log('I start running!');
    }
}

person.run();




// This
const person2 = {
    name: 'Ryon',
    introduce() {
        console.log(`Ich bin ${this.name}`);
    },
};

person2.introduce();




// Arrays und Destructoring

const productFromCSV2 = (productString2) => {
    const [name, category, price] = productString2.split(', ');
    return {
        name: name,
        category: category,
        price: price,
    };
};

const product2 = productFromCSV2('Rucksack, Reise, 29.99€')
console.dir(product2);





// Parameter auseinandernehmen mit Destructoring

'use strict';

// Entfernt führende/abschließende Leerzeichen per Regex
// s.match(...) gibt Array zurück → [1] holt nur die Klammer-Gruppe
const trim = (s) => s.match(/\W*(.+)\W*/)[1];

// Erwartet ein Array wie ['Klingon Letter Opener', 'Office Warfare', '19.99']
// Destructuring im Parameter → gleich in name, category, price aufteilen
// => ({ }) → implizites return eines Objekts (runde Klammern nötig!)
const productFromArray = ([name, category, price]) => ({
    name,       // Kurzform für name: name
    category,   // Kurzform für category: category
    price       // Kurzform für price: price
});

const productsFromCSV = (csv) =>
    csv.split('\n')          // String → Array von Zeilen
    .slice(1)                // erste Zeile (Header) entfernen
    .map(trim)               // Leerzeichen jeder Zeile entfernen
    .map((s) => s.split(', '))  // jede Zeile → Array aus Teilen
    .map(productFromArray);  // jedes Array → Objekt umwandeln

// Template Literal (Backticks) → mehrzeiliger String
// erste Zeile ist der Header → wird später per slice(1) entfernt
const productsCSV = `name, category, price
  Klingon Letter Opener, Office Warfare, 19.99
  Backpack of Holding, Travel, 29.99
  Tardis Alarmclock, Merchandise, 15.99`;

// CSV-String durch die Verarbeitungskette schicken
const products = productsFromCSV(productsCSV);

// Ergebnis: Array aus Objekten
console.log(products);





// Objects Destructoring

// Funktion erwartet ein Objekt → { name, price } direkt im Parameter destructuren
// category wird nicht gebraucht → einfach weglassen
// Gibt einen formatierten String zurück (Template Literal)
const formatProduct = ({ name, price }) => `* ${name} - buy now for only $${price}`;

const product3 = {
    name: 'Klingon Letter Opener',
    category: 'Office Warfare',  // wird von formatProduct ignoriert
    price: '19.99',
};

// product3 wird übergeben → formatProduct packt name und price selbst aus
console.log(formatProduct(product3));
// Ausgabe: * Klingon Letter Opener - buy now for only $19.99






// Destructoring Defaults

const formatProduct2 = ({name, price, category = 'verschiedenes'}) =>
    `* ${name} [${category}] - buy now for only $${price}`;

const product4 = {
    name: 'Backpack of Holding',
    price: '29.99',
};

console.log(formatProduct2(product4));





// Rest bei Arrays

const product5 = [
    'Klingon Letter Opener',
    'Officer Warfare',
    '19,99'
];

const [name2, ...rest] = product5;

console.log(rest);



// Rest bei Objekten

const product6 = {
    name: 'Klingon Letter Opener',
    category: 'Office Warfare',
    price: '19.99',
};

const { name, ...everythingElse} = product6;

console.log(everythingElse);





// Übung 1: Vorname vor Nachname oder Nachname vor Vorname?
console.log('Übung 1 -  Vorname vor Nachname oder Nachname vor Vorname?');

let logTransformedName = ({ firstName, lastName}) => {
    console.log(`${lastName}, ${firstName.charAt(0)}.`);
};
    

logTransformedName({
    firstName: 'Ladislaus',
    lastName: 'Jones'
});




// Übung 2: Ist es noch weit? Sind wir schon da?
console.log('Übung 2: Ist es noch weit? Sind wir schon da?');

/*Math.sqrt((yDestination - yOrigin) ** 2 + (xDestination - xOrigin) ** 2);
distance({ x: 1, y: 1 }, { x: 5, y: 1 }); // => 4 */

/*
const distance = (origin, destination) => {
    const xOrigin = origin.x;
    const yOrigin = origin.y;
    const xDestination = destination.x;
    const yDestination = destination.y;
    return Math.sqrt((yDestination - yOrigin) **2 + (xDestination - xOrigin) ** 2);
}*/

const distance = (
    { x: xOrigin, y: yOrigin },
    { x: xDestination, y: yDestination }
) => Math.sqrt((yDestination - yOrigin) ** 2 + (xDestination - xOrigin) **2);
