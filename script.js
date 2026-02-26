'use strict'

const getData = (sendData) => {
    fetch('db.json')
        .then(res => {
            if (!res.ok) {
                console.log('Ошибка получения данных');
            } else {
                return res.json();
            }
        }).then(res => {
            if (res) {
                console.log(`Объект ${JSON.stringify(res)} успешно получен`);
                sendData(res);
            }
            else
                console.log(`Ошибка получения объекта ${JSON.stringify(res)}`);
        }).catch(error => {
            console.log(`Ошибка: ${error}`);
        });
}

const sendData = (obj) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(obj));
    xhr.onload = function () {
        if (xhr.status != 201) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(`Объект ${JSON.stringify(xhr.response)} успешно получен`);
        }
    };
}

getData(sendData);
