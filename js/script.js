'use strict'

const title = document.getElementsByTagName('h1')[0];

const btns = document.getElementsByClassName('handler_btn');
const calcBtn = btns[0];
const resetBtn = btns[1];

const addBtn = document.querySelector('.screen-btn');

const otherItemsPercentClass = document.querySelectorAll('.other-items.percent');
const otherItemsNumberClass = document.querySelectorAll('.other-items.number');

const input = document.querySelector('.rollback input[type="range"]');

const span = document.querySelector('.rollback .range-value');

const totalInputs = document.getElementsByClassName('total-input');
const totalInputElem = [];
for (let i = 0; i < totalInputs.length; i++) {
    totalInputElem[i] = totalInputs[i];
}

let screenDiv = document.querySelectorAll('.screen');

console.log(screenDiv);