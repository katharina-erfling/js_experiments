'use strict';

 // ── Übung 15: Einkaufsliste bearbeiten ───────────────────────────────────────────────────

console.log('Übung 15: Einkaufsliste bearbeiten');


const shoppingList = [
    ['Fruits', 'Apples', 'Bananas', 'Oranges'],
    ['Vegetables', 'Carrots', 'Broccoli', 'Spinach'],
    ['Dairy', 'Milk', 'Cheese', 'Yogurt'],
];

shoppingList[0][2] = 'Grapes';
shoppingList[1][2] = 'Tomatoes';
shoppingList[2][2] = 'Butter';

console.log(shoppingList);
// Expected outcome:
// [
//     ['Fruits', 'Apples', 'Grapes', 'Oranges'],
//     ['Vegetables', 'Carrots', 'Tomatoes', 'Spinach'],
//     ['Dairy', 'Milk', 'Butter', 'Yogurt'],
// ]


