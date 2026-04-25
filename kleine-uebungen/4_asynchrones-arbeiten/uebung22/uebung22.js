'use strict';

// ── Übung 22: Fröhliches Mixen mit Arrays ──────────────────────────

console.log('Übung 22: Fröhliches Mixen mit Arrays');


const isMixableWithMyIngredients = (cocktailRecipe) => isMixableWith(cocktailRecipe, ingredientsFromMyBar);

const isMixableWith = (cocktailRecipe, availableIngredients) =>
  cocktailRecipe.every((ingredientFromRecipe) => hasIngredient(availableIngredients, ingredientFromRecipe));

const hasIngredient = (listOfIngredients, searchedIngredient) =>
  listOfIngredients.includes(searchedIngredient);

const honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice'
];

const casualFriday = ['Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber'];
const pinkDolly = [
  'Vodka',
  'Orange Juice',
  'Pineapple Juice',
  'Grenadine',
  'Cream',
  'Coco Syrup'
];
const cocktailRecipes = [honoluluFlip, casualFriday, pinkDolly];

const ingredientsFromMyBar = [
  'Pineapple',
  'Maracuja Juice',
  'Cream',
  'Grapefruit Juice',
  'Crushed Ice',
  'Milk',
  'Vodka',
  'Apple Juice',
  'Aperol',
  'Pineapple Juice',
  'Lime Juice',
  'Lemons',
  'Cucumber'
];

console.log(cocktailRecipes.find(isMixableWithMyIngredients));
// => [ 'Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber' ]