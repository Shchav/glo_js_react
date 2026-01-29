const title = 'Glo JS+REACT';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1700;
let rollback = 30;
let fullPrice = 2000;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));