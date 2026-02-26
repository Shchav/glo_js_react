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
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(obj)
    }).then(res => {
        if (!res.ok) {
            console.log('Ошибка отправки данных');
        } else {
            return res.json();
        }
    }).then(res => {
        console.log(`Объект ${JSON.stringify(res)} успешно отправлен`);
    }).catch(error => {
        console.log(`Ошибка: ${error}`);
    });
}

getData(sendData);
