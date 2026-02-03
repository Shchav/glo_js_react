'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = prompt('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 10;

const showTypeOF = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что-то пошло не так";
    }
}

const trimStartSpace = function (str) {
    if (str[0] == ' ') {
        str = trimStartSpace(str.replace(str[0], ''));
    }
    return str;
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    title = trimStartSpace(title);
    title = title[0].toUpperCase() + title.slice(1).toLowerCase();
    return title;
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice * (rollback / 100));
}

let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();

showTypeOF(getTitle());
showTypeOF(fullPrice);
showTypeOF(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

