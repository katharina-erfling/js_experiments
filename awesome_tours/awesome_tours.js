'use strict';

const $ = (queryselector) => document.querySelector(queryselector);
const $$ = (queryselector) => Array.from(document.querySelectorAll(queryselector));

{
    const showInfo = (element) => {
        $('#info').innerHTML =
       ` <h3>
            <img src="${country(element)}.png" alt="${flagName(element)}" title="${flagName(element)}">
            ${name(element)}
        </h3>
        <p>${desc(element)}</p>`;
    };


    const name = (element) => element.target.alt;
    const desc = (element) => element.target.dataset.description;
    const country = (element) => element.target.dataset.countryCode;
    const flagName = (element) => element.target.dataset.flagName;


    const init = () => {
        $$('img[data-description]').forEach((img) => {
            img.addEventListener('mouseover', showInfo);
        });


    };


    init();



};