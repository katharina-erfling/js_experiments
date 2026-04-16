'use strict';

const $ = (queryselector) => document.querySelector(queryselector);

$('button:last-child').addEventListener('click', (event) => {
    $('button:first-child').disabled = false;
    $('button:last-child').disabled = true;
});

$('button:first-child').addEventListener('click', (event) => {
    $('button:last-child').disabled = false;
    $('button:first-child').disabled = true;
});