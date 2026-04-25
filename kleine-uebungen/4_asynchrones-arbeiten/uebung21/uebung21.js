'use strict';

// ── Übung 21: Pokémon — Evolution ──────────────────────────

console.log('Übung 21: Pokémon — Evolution');

// Alle Evolutionsketten als verschachteltes Array
const evolutionStages = [
  ['Taubsi', 'Tauboga', 'Tauboss'],
  ['Vulpix', 'Vulnona'],
  ['Dratini', 'Dragonir', 'Dragoran']
];

// Gibt die gesamte Evolutionskette zurück, in der das Pokémon vorkommt
// Achtung: gibt undefined zurück, wenn das Pokémon nicht existiert
const stagesFor = (pokemon) => {
    return evolutionStages.find(kette => kette.includes(pokemon));
};

// Gibt alle Evolutionsstufen zurück, die NACH dem gegebenen Pokémon kommen
const stagesAfter = (pokemon) => {
    const kette = stagesFor(pokemon);
    const index = kette.indexOf(pokemon);
    return kette.slice(index + 1); // alles nach dem aktuellen Index
};

// Gibt alle Evolutionsstufen zurück, die VOR dem gegebenen Pokémon kommen
const stagesBefore = (pokemon) => {
    const kette = stagesFor(pokemon);
    const index = kette.indexOf(pokemon);
    return kette.slice(0, index); // alles bis (exkl.) dem aktuellen Index
};

console.log(stagesFor('Vulpix'));     // => [ 'Vulpix', 'Vulnona' ]
console.log(stagesAfter('Dratini')); // => [ 'Dragonir', 'Dragoran' ]
console.log(stagesBefore('Taubsi')); // => [] (Taubsi ist die erste Stufe)
console.log(stagesBefore('Dragoran')); // => [ 'Dratini', 'Dragonir' ]