'use strict';

const $$ = (qs) => Array.from(document.querySelectorAll(qs));
const bulbs = $$('img');

bulbs.forEach((bulb, index) => {
    bulb.addEventListener('mouseover', event => {
        if (index === bulbs.length - 1) {
            bulbs[index].src = 'light_off.png';
            bulbs[0].src = 'light_on.png';
        }
        if (bulb.src.includes('light_on.png')) {
            bulbs[index].src = 'light_off.png';
            bulbs[index + 1].src = 'light_on.png';
        }
    });
});