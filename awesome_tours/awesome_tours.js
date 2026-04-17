'use strict';

// Kurzschreibweise für querySelector / querySelectorAll
const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

{
    // Info-Box mit Name, Flagge und Beschreibung befüllen
    const showInfo = (event) => {
        $('#info').innerHTML =
            `<h3>
                <img src="${country(event)}.png" alt="${flagName(event)}" title="${flagName(event)}">
                ${name(event)}
            </h3>
            <p>${desc(event)}</p>`;
    };

    // Hilfsfunktionen: Daten aus dem event.target auslesen
    const name     = (event) => event.target.alt;                      // alt-Attribut
    const desc     = (event) => event.target.dataset.description;      // data-description
    const country  = (event) => event.target.dataset.countryCode;      // data-country-code
    const flagName = (event) => event.target.dataset.flagName;         // data-flag-name

    // Event-Listener an alle Bilder mit data-description hängen
    const init = () => {
        $$('img[data-description]').forEach((img) => {
            img.addEventListener('mouseover', showInfo);
        });
    };

    init();
}