'use strict';

// Kurzschreibweise für querySelector / querySelectorAll
const $ = (qs) => document.querySelector(qs);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));

// Startfarbe des Absatzes
$('p').style.color = 'blue';

{
    // Schriftgrößen als benannte Konstanten
    const SMALL    = 14;
    const NORMAL   = 16;
    const BIG      = 24;
    const VERY_BIG = 36;

    // Alle Event-Listener registrieren
    const init = () => {
        // Schriftgröße per Button setzen
        $('#very_big').addEventListener('click', () => setFontSizeTo(VERY_BIG));
        $('#big')     .addEventListener('click', () => setFontSizeTo(BIG));
        $('#normal')  .addEventListener('click', () => setFontSizeTo(NORMAL));
        $('#small')   .addEventListener('click', () => setFontSizeTo(SMALL));

        // Textfarbe per Button setzen
        $('#black').addEventListener('click', () => setColorTo('black'));
        $('#grey') .addEventListener('click', () => setColorTo('grey'));
        $('#red')  .addEventListener('click', () => setColorTo('red'));
        $('#green').addEventListener('click', () => setColorTo('green'));
        $('#blue') .addEventListener('click', () => setColorTo('blue'));

        // Hintergrundfarbe per RGB-Regler setzen
        $('#red_range')  .addEventListener('input', readAndSetColor);
        $('#green_range').addEventListener('input', readAndSetColor);
        $('#blue_range') .addEventListener('input', readAndSetColor);

        // Schriftgröße schrittweise ändern
        $('#inc').addEventListener('click', incFontSize);
        $('#dec').addEventListener('click', decFontSize);
    };

    // Schriftgröße des Absatzes direkt setzen
    const setFontSizeTo = (size) => {
        $('p').style.fontSize = size + 'px';
    };

    // RGB-Regler auslesen und als Hintergrundfarbe anwenden
    const readAndSetColor = () => {
        const red   = $('#red_range').value;
        const green = $('#green_range').value;
        const blue  = $('#blue_range').value;
        $('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    };

    // Textfarbe des Absatzes setzen
    const setColorTo = (color) => {
        $('p').style.color = color;
    };

    // Schriftgröße um 5px erhöhen / verringern
    const incFontSize = () => changeFontSizeTo(currentFontSize() + 5);
    const decFontSize = () => changeFontSizeTo(currentFontSize() - 5);

    // Aktuelle Schriftgröße aus dem berechneten Style auslesen
    const currentFontSize = () => parseInt(getComputedStyle($('p')).fontSize);

    // Schriftgröße des Absatzes setzen (genutzt von inc/dec)
    const changeFontSizeTo = (size) => {
        $('p').style.fontSize = size + 'px';
    };

    init();
}