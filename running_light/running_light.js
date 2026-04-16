'use strict';

const $$ = (qs) => Array.from(document.querySelectorAll(qs));
const bulbsHover = $$('img.bulb-hover');
const bulbsClick = $$('img.bulb-click');
const bulbsChaos = $$('img.bulb-chaos');
const bulbsHopping = $$('img.bulb-hopping');



bulbsHover.forEach((bulb, index) => {
    bulb.addEventListener('mouseover', event => {
        if (index === bulbsHover.length - 1) {
            bulbsHover[index].src = 'light_off.png';
            bulbsHover[0].src = 'light_on.png';
            return;
        }
        if (bulb.src.includes('light_on.png')) {
            bulbsHover[index].src = 'light_off.png';
            bulbsHover[index + 1].src = 'light_on.png';
        }
    });
});

bulbsClick.forEach((bulb, index) => {
    bulb.addEventListener('click', event => {
        if (index === bulbsClick.length - 1) {
            bulbsClick[index].src = 'light_off.png';
            bulbsClick[0].src = 'light_on.png';
            return;
        }
        if (bulb.src.includes('light_on.png')) {
            bulbsClick[index].src = 'light_off.png';
            bulbsClick[index +1].src = 'light_on.png';
        }
    });
});

bulbsChaos.forEach((bulb, index) => {
    bulb.addEventListener('mouseover', event => {
        let randomBulb = Math.floor(Math.random() * bulbsChaos.length);
        if (bulb.src.includes('light_on.png')) {
            bulbsChaos[index].src = 'light_off.png';
            bulbsChaos[randomBulb].src = 'light_on.png';
            return;
        }
    })
})

bulbsHopping.forEach((bulb, index) => {
    bulb.addEventListener('click', event => {
        if (index === bulbsHopping.length - 1) {
            bulbsHopping[index].src = 'light_off.png';
            bulbsHopping[0].src = 'light_on.png';
            return;
        }

        if (index === bulbsHopping.length - 2) {
            bulbsHopping[index].src = 'light_off.png';
            bulbsHopping[0].src = 'light_on.png';
            return;
        }

        if (bulb.src.includes('light_on.png')) {
            bulbsHopping[index].src = 'light_off.png';
            bulbsHopping[index + 2].src = 'light_on.png';
        } 
    });
});





