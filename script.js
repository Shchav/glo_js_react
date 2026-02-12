'use strict'

const btnElem = document.querySelector('#btn');
const squareElem = document.querySelector('#square');
const inputElem = document.querySelector('input[type=text]');
btnElem.addEventListener('click', function (e) {
    squareElem.style.backgroundColor = inputElem.value;
})

const circleElem = document.querySelector('#circle');
circleElem.style.display = 'none';

circleElem.style.display = null;
const rangeElem = document.querySelector('#range');
rangeElem.addEventListener('input', function (e) {
    circleElem.style.width = e.target.value + '%';
    circleElem.style.height = e.target.value + '%';
})





