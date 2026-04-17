'use strict';

const $ = (queryselector) => document.querySelector(queryselector);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));


{
    const MOUSE_TO_TOOLTIP = 10;

    const tooltipTexts = {
        'quantum mechanics': 'Erklärung zu quantum mechanics...',
        'entangled': 'Erklärung zu entangled...',
        'Entanglement': 'Erklärung zu Entanglement...',
    }


    const init = () => {
        $$('.keyword').forEach((element) => {
            element.addEventListener('mousemove', showTooltip);
            element.addEventListener('mouseleave', hideTooltip);
        });
    };


    const showTooltip = (element) => {
        const tooltip = $('#tooltip')
        tooltip.innerHTML = tooltipTexts[element.target.innerHTML];
        tooltip.style.display = 'block';
        tooltip.style.top = `${element.clientY + MOUSE_TO_TOOLTIP}px`;
        tooltip.style.left = `${element.clientX + MOUSE_TO_TOOLTIP}px`;
    };


    const hideTooltip = () => {
        $('#tooltip').style.display = 'none';
    };

    init();
};