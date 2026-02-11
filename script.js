'use strict'

// const aside = document.querySelector('.books');
const divs = document.querySelectorAll('.book');
divs[0].before(divs[1]);
divs[2].before(divs[4]);
divs[2].before(divs[3]);
divs[2].before(divs[5]);

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

const book3Link = divs[4].querySelector('a[target]');
book3Link.innerHTML = book3Link.innerHTML.replace('Пропопипы', '<b>Прототипы</b>');

document.querySelector('.adv').remove();

const content2Book = divs[0].querySelectorAll('li');
content2Book[9].after(content2Book[2]);
content2Book[3].after(content2Book[6]);
content2Book[6].after(content2Book[8]);

const content5Book = divs[5].querySelectorAll('li');
content5Book[1].after(content5Book[9]);
content5Book[9].after(content5Book[3]);
content5Book[4].after(content5Book[2]);
content5Book[7].after(content5Book[5]);

const content6Book = divs[2].querySelectorAll('li');
const chapter8 = content6Book[8].cloneNode();
chapter8.textContent = 'Глава 8: За пределами ES6';
content6Book[8].after(chapter8);

console.log(content6Book)