'use strict';

 // ── Übung 18: 3D Array Zugriff ───────────────────────────────────────────────────

console.log('Übung 18: 3D Array Zugriff');


const inventory = [
    [ // Category: Electronics
        ['Shelf 1', 'Laptop', 10],
        ['Shelf 2', 'Smartphone', 25],
    ],
    [ // Category: Clothing
        ['Shelf 1', 'T-Shirts', 50],
        ['Shelf 2', 'Jeans', 30],
    ],
    [ // Category: Groceries
        ['Shelf 1', 'Milk', 100],
        ['Shelf 2', 'Bread', 80],
    ],
    [ // Category: Books
        ['Shelf 1', 'Novels', 40],
        ['Shelf 2', 'Non-fiction', 35],
    ],
];

inventory[1][1][2] = 25;

console.log(inventory);
/*
Expected outcome:
[
    [ // Electronics
        ['Shelf 1', 'Laptop', 10],
        ['Shelf 2', 'Smartphone', 25],
    ],
    [ // Clothing
        ['Shelf 1', 'T-Shirts', 50],
        ['Shelf 2', 'Jeans', 25], // Changed quantity
    ],
    // ...
]
*/