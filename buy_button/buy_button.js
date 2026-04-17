'use strict';

// Kurzschreibweise für querySelector
const $ = (qs) => document.querySelector(qs);

// Klick auf letzten Button: ersten aktivieren, letzten deaktivieren
$('button:last-child').addEventListener('click', () => {
    $('button:first-child').disabled = false;
    $('button:last-child').disabled  = true;
});

// Klick auf ersten Button: letzten aktivieren, ersten deaktivieren
$('button:first-child').addEventListener('click', () => {
    $('button:last-child').disabled  = false;
    $('button:first-child').disabled = true;
});