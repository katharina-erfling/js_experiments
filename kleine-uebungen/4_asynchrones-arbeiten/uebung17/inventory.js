'use strict';

 // ── Übung 17: Lagerbestand erweitern ───────────────────────────────────────────────────

console.log('Übung 17: Lagerbestand erweitern');


const inventory = [
  [
    // Category: Electronics
    ['Shelf 1', 'Laptop', 10],
    ['Shelf 2', 'Smartphone', 25],
  ],
  [
    // Category: Clothing
    ['Shelf 1', 'T-Shirts', 50],
    ['Shelf 2', 'Jeans', 30],
  ],
  [
    // Category: Groceries
    ['Shelf 1', 'Milk', 100],
    ['Shelf 2', 'Bread', 80],
  ],
];

// Increase the number of laptops
inventory[0][0][2] += 5; // New quantity: 15

// Add a new shelf to a category
inventory[1].push(['Shelf 3', 'Pants', 20]);


// Books hinzufügen
inventory.push([
  ['Shelf 1', 'Novels', 40],
  ['Shelf 2', 'Non-Fiction', 35],
]);


console.log(inventory);
/* Expected outcome:
[
    [ // Electronics
        ['Shelf 1', 'Laptop', 10],
        ['Shelf 2', 'Smartphone', 25],
    ],
    [ // Clothing
        ['Shelf 1', 'T-Shirts', 50],
        ['Shelf 2', 'Jeans', 30],
    ],
    [ // Groceries
        ['Shelf 1', 'Milk', 100],
        ['Shelf 2', 'Bread', 80],
    ],
    [ // Books
        ['Shelf 1', 'Novels', 40],
        ['Shelf 2', 'Non-fiction', 35],
    ],
]
*/
