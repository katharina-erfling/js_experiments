'use strict';

// gibt CSS-Klasse zurück je nach Textlänge
const articleLength = (length) => {
    if (length <= 3000) return 'coffee_break_article';
    if (length <= 9000) return 'normal_length_article';
    return 'lone_weekend_article';
};

// Kurzschreibweise für document.querySelector
const $ = (query) => document.querySelector(query);

// gibt die Zeichenanzahl des #content-Elements zurück
const contentLength = () => $('#content').innerHTML.length;

// fügt der h1 die passende CSS-Klasse hinzu
$('h1').classList.add(articleLength(contentLength()));