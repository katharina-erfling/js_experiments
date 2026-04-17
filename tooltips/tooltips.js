'use strict';

// Kurzschreibweise für querySelector / querySelectorAll
const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

{
    // Abstand des Tooltips zum Mauszeiger (in Pixeln)
    const MOUSE_TO_TOOLTIP = 10;

    // Zuordnung: Keyword → Tooltip-Text
    const tooltipTexts = {
        'quantum': 'Erklärung zu quantum...',
        'quantum mechanics': 'Erklärung zu quantum mechanics...',
        'entangled': 'Erklärung zu entangled...',
        'Entanglement': 'Erklärung zu Entanglement...',
    };

    // Event-Listener an alle .keyword-Elemente hängen
    const init = () => {
        $$('.keyword').forEach((el) => {
            el.addEventListener('mousemove', showTooltip);
            el.addEventListener('mouseleave', hideTooltip);
        });
    };

    // Tooltip einblenden und an Mausposition ausrichten
    const showTooltip = (event) => {
        const tooltip = $('#tooltip');
        // Text aus tooltipTexts laden, Fallback: '...'
        tooltip.innerHTML = tooltipTexts[event.target.innerHTML] ?? '...';
        tooltip.style.display = 'block';
        tooltip.style.top  = `${event.clientY + MOUSE_TO_TOOLTIP}px`;
        tooltip.style.left = `${event.clientX + MOUSE_TO_TOOLTIP}px`;
    };

    // Tooltip ausblenden
    const hideTooltip = () => {
        $('#tooltip').style.display = 'none';
    };

    init();
}