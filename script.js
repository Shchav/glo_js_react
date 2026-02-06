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
            str = appData.trimStartSpace(str.replace(str[0], ''));
        }
        return str;
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function () {
        let sum = 0;
        let sumSevice;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Проверка');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Тестирование');
            }

            do {
                sumSevice = prompt('Сколько это будет стоить?', 20_000);
            } while (!appData.isNumber(sumSevice));
            sum += +sumSevice;
        };

        return sum;
    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function () {
        appData.title = appData.trimStartSpace(appData.title);
        return appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();

        appData.logger();
    },

    logger: function () {
        for (let property in appData)
            console.log(property);
    }
}

appData.start();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);


