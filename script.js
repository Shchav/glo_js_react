'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные')

        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 10_000);
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что-то пошло не так";
        }
    },

    trimStartSpace: function (str) {
        if (str[0] == ' ') {
            str = trimStartSpace(str.replace(str[0], ''));
        }
        return str;
    },

    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

const asking = function () {
        title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные')

        screenPrice = prompt('Сколько будет стоить данная работа?');

        do {
            screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!isNumber(screenPrice));

        adaptive = confirm('Нужен ли адаптив на сайте?');
    }

const getAllServicePrices = function () {
        let sum = 0;
        let sumSevice;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            do {
                sumSevice = prompt('Сколько это будет стоить?');
            } while (!isNumber(sumSevice));
            sum += +sumSevice;
        };

        return sum;
    }

function getFullPrice() {
        return screenPrice + allServicePrices;
}

const getTitle = function () {
    title = trimStartSpace(title);
    return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice * (rollback / 100));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOF(getTitle());
showTypeOF(fullPrice);
showTypeOF(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
console.log(title);

