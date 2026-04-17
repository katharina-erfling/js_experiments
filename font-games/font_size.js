'use strict';

const $ = (queryselector) => document.querySelector(queryselector);
const $$ = (qs) => Array.from(document.querySelectorAll(qs));


$('p').style.color = 'blue';

{
    const SMALL = 14;
    const NORMAL = 16;
    const BIG = 24;
    const VERY_BIG = 36;

    const init = () => {
        $('#very_big').addEventListener('click', () => setFontSizeTo(VERY_BIG));
        $('#big').addEventListener('click', () => setFontSizeTo(BIG));
        $('#normal').addEventListener('click', () => setFontSizeTo(NORMAL));
        $('#small').addEventListener('click', () => setFontSizeTo(SMALL));

        $('#black').addEventListener('click', () => setColorTo('black'));
        $('#grey').addEventListener('click', () => setColorTo('grey'));
        $('#red').addEventListener('click', () => setColorTo('red'));
        $('#green').addEventListener('click', () => setColorTo('green'));
        $('#blue').addEventListener('click', () => setColorTo('blue'));
        
        $('#red_range').addEventListener('input', readAndSetColor);
        $('#green_range').addEventListener('input', readAndSetColor);
        $('#blue_range').addEventListener('input', readAndSetColor);
    }



    const setFontSizeTo = (size) => {
        $('p').style.fontSize = size + 'px';
    };

    const readAndSetColor = () => {
        const red = $('#red_range').value;
        const green = $('#green_range').value;
        const blue = $('#blue_range').value;

        $('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    const setColorTo = (color) => {
        $('p').style.color = color;
    };



    init();

}