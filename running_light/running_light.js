'use strict';

// Kurzschreibweise für querySelectorAll
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

// Alle Glühbirnen-Gruppen einsammeln
const bulbsHover   = $$('img.bulb-hover');
const bulbsClick   = $$('img.bulb-click');
const bulbsChaos   = $$('img.bulb-chaos');
const bulbsHopping = $$('img.bulb-hopping');


// Hover: Leuchtendes Licht wandert bei mouseover zur nächsten Birne
// Am Ende: zurück zur ersten
bulbsHover.forEach((bulb, index) => {
    bulb.addEventListener('mouseover', () => {
        if (index === bulbsHover.length - 1) {
            bulbsHover[index].src = 'light_off.png';
            bulbsHover[0].src    = 'light_on.png';
            return;
        }
        if (bulb.src.includes('light_on.png')) {
            bulbsHover[index].src     = 'light_off.png';
            bulbsHover[index + 1].src = 'light_on.png';
        }
    });
});


// Click: Leuchtendes Licht wandert bei click zur nächsten Birne
// Am Ende: zurück zur ersten
bulbsClick.forEach((bulb, index) => {
    bulb.addEventListener('click', () => {
        if (index === bulbsClick.length - 1) {
            bulbsClick[index].src = 'light_off.png';
            bulbsClick[0].src    = 'light_on.png';
            return;
        }
        if (bulb.src.includes('light_on.png')) {
            bulbsClick[index].src     = 'light_off.png';
            bulbsClick[index + 1].src = 'light_on.png';
        }
    });
});


// Chaos: Leuchtendes Licht springt bei mouseover zu einer zufälligen Birne
bulbsChaos.forEach((bulb, index) => {
    bulb.addEventListener('mouseover', () => {
        if (bulb.src.includes('light_on.png')) {
            const randomIndex = Math.floor(Math.random() * bulbsChaos.length);
            bulbsChaos[index].src       = 'light_off.png';
            bulbsChaos[randomIndex].src = 'light_on.png';
        }
    });
});


// Hopping: Leuchtendes Licht überspringt bei click immer eine Birne (+2)
// Vorletzter → Index 1 (überspringt Index 0), Letzter → Index 0
bulbsHopping.forEach((bulb, index) => {
    bulb.addEventListener('click', () => {
        if (index === bulbsHopping.length - 1) {
            bulbsHopping[index].src = 'light_off.png';
            bulbsHopping[0].src    = 'light_on.png';
            return;
        }
        if (index === bulbsHopping.length - 2) {
            bulbsHopping[index].src = 'light_off.png';
            bulbsHopping[1].src    = 'light_on.png';
            return;
        }
        if (bulb.src.includes('light_on.png')) {
            bulbsHopping[index].src     = 'light_off.png';
            bulbsHopping[index + 2].src = 'light_on.png';
        }
    });
});