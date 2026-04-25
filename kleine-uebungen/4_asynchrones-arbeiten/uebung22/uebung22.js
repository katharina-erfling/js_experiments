'use strict';

// ── Übung 22: Fröhliches Mixen mit Arrays ──────────────────────────

console.log('Übung 22: Fröhliches Mixen mit Arrays');


// Prüft ob ein Cocktail mit den eigenen Zutaten mixbar ist.
// Ist eine spezialisierte Version von isMixableWith – ingredientsFromMyBar ist fest verdrahtet.
const isMixableWithMyIngredients = (cocktailRecipe) => isMixableWith(cocktailRecipe, ingredientsFromMyBar);

// Prüft ob ALLE Zutaten eines Rezepts in der verfügbaren Liste vorhanden sind.
// .every() bricht ab und gibt false zurück, sobald eine Zutat fehlt.
const isMixableWith = (cocktailRecipe, availableIngredients) =>
  cocktailRecipe.every((ingredientFromRecipe) => hasIngredient(availableIngredients, ingredientFromRecipe));

// Prüft ob eine einzelne Zutat in der Liste enthalten ist.
// Wrapper um .includes() – macht den Code in .every() lesbarer.
const hasIngredient = (listOfIngredients, searchedIngredient) =>
  listOfIngredients.includes(searchedIngredient);

// Drei Cocktail-Rezepte als Arrays ihrer benötigten Zutaten
const honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',     // ← fehlt in ingredientsFromMyBar → nicht mixbar
  'Grapefruit Juice',
  'Crushed Ice'
];

const casualFriday = ['Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber']; // ← alle vorhanden → mixbar
const pinkDolly = [
  'Vodka',
  'Orange Juice',    // ← fehlt in ingredientsFromMyBar → nicht mixbar
  'Pineapple Juice',
  'Grenadine',       // ← fehlt auch
  'Cream',
  'Coco Syrup'       // ← fehlt auch
];
const cocktailRecipes = [honoluluFlip, casualFriday, pinkDolly];

// Verfügbare Zutaten in der eigenen Bar
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

// Gibt das erste Rezept zurück, das sich mit den vorhandenen Zutaten mixen lässt.
// .find() iteriert über cocktailRecipes und ruft für jedes isMixableWithMyIngredients auf.
console.log(cocktailRecipes.find(isMixableWithMyIngredients));
// => [ 'Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber' ]