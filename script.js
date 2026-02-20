'use strict'

// Кухонная посуда 
class Kitchenware {
    constructor(volume) {
        this._volume = volume; // Объем, л.
        this._canDishwasher = false; // Можно ли мыть в посудомойке? 
    }
    _country; // Страна производитель
    _weight; // Вес, кг.

    set volume(volume) { this._volume = volume; }
    get volume() { return this._volume; }
    set canDishwasher(canDishwasher) { this._canDishwasher = canDishwasher; }
    get canDishwasher() { return this._canDishwasher };
    get country() { return this._country; }
    set country(country) { this._country = country; }
    get weight() { return this._weight; }
    set weight(weight) { this._weight = weight; }

    // Обработчик нажатия кнопки "Удалить"
    static getDelBtnListener = (tr, index) => () => {
        tr.remove();
        kitchenwareArray.splice(index, 1);
    }
}

// Чайник
class Kettle extends Kitchenware {
    constructor(volume, power) {
        super(volume);
        this._power = power; // Мощность, Вт.
    }
    _isAutoShutdown; // Наличие автовыключения

    set power(power) { this._power = power; }
    get power() { return this._power; }
    set isAutoShutdown(isAutoShutdown) { this._isAutoShutdown = isAutoShutdown; }
    get isAutoShutdown() { return this._isAutoShutdown; }
}

// Кастрюля
class Saucepan extends Kitchenware {
    constructor(volume, maxTemperature) {
        super(volume);
        this._maxTemperature = maxTemperature; // Максимально разрешенная температура 
    }
    _fromSet; // Из набора кастрюль или самостоятельная?

    set maxTemperature(maxTemperature) { this._maxTemperature = maxTemperature; }
    get maxTemperature() { return this._maxTemperature; }
    set fromSet(fromSet) { this._fromSet = fromSet; }
    get fromSet() { return this._fromSet; }
}

const kitchenwareSelect = document.querySelector('#kitchenware');
const kettleForm = document.querySelector('#kettle');
const saucepanForm = document.querySelector('#saucepan');
const table = document.querySelector('table');
const saveButton = document.querySelector('button');

// Единый массив объектов
let kitchenwareArray = [];

const listenerKitchenwareSelect = function () {
    if (this.value == "kettle") {
        kettleForm.style.display = 'block';
        saucepanForm.style.display = 'none';
    } else if (this.value == "saucepan") {
        kettleForm.style.display = 'none';
        saucepanForm.style.display = 'block';
    }
}

// Заполнение данных базового класса
const setDataKitchenware = function (form) {
    this.canDishwasher =
        form.querySelector('input[name="can_dish_washer"]:checked').id
        == "can_dish_washer_yes";
    this.country =
        form.querySelector('#country').value;
    this.weight =
        form.querySelector('#weight').value;
}

// Создание строки таблицы на основе данных созданного объекта
const createTrTable = function () {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.textContent = this.volume;
    tr.append(td);
    td = document.createElement('td');
    td.textContent = this.canDishwasher ? "Да" : "Нет";
    tr.append(td);
    td = document.createElement('td');
    td.textContent = this.country;
    tr.append(td);
    td = document.createElement('td');
    td.textContent = this.weight;
    tr.append(td);
    td = document.createElement('td');
    '_power' in this && (td.textContent = this['_power']);
    tr.append(td);
    td = document.createElement('td');
    '_isAutoShutdown' in this &&
        (td.textContent = this['_isAutoShutdown'] ? "Да" : "Нет");
    tr.append(td);
    td = document.createElement('td');
    '_maxTemperature' in this && (td.textContent = this['_maxTemperature']);
    tr.append(td);
    td = document.createElement('td');
    '_fromSet' in this &&
        (td.textContent = this['_fromSet'] ? "Да" : "Нет");
    tr.append(td);

    // Добавление в последний столбец строки кнопки "Удалить"
    const delTrBtn = document.createElement('button');
    delTrBtn.innerText = "Удалить";
    delTrBtn.addEventListener('click',
        Kitchenware.getDelBtnListener(tr, kitchenwareArray.length - 1));
    tr.append(delTrBtn);

    return tr;
}

listenerKitchenwareSelect.call(kitchenwareSelect);

kitchenwareSelect.addEventListener('change', listenerKitchenwareSelect);

saveButton.addEventListener('click', () => {

    let kitchenware;

    if (kitchenwareSelect.value == "kettle") {
        // Создание объекта "Чайник" и заполнение его данными
        kitchenware = new Kettle(
            kettleForm.querySelector('#volume').value,
            kettleForm.querySelector('#power').value
        );
        kitchenware.isAutoShutdown =
            kettleForm.querySelector('input[name="is_auto_shutdown"]:checked').id
            == "is_auto_shutdown_yes";
        // Заполнение данных базового класса
        setDataKitchenware.call(kitchenware, kettleForm);

    } else if (kitchenwareSelect.value == "saucepan") {
        // Создание объекта "Кастрюля" и заполнение его данными
        kitchenware = new Saucepan(
            saucepanForm.querySelector('#volume').value,
            saucepanForm.querySelector('#max_temperature').value
        );
        kitchenware.fromSet =
            saucepanForm.querySelector('input[name="from_set"]:checked').id
            == "from_set_yes";
        // Заполнение данных базового класса
        setDataKitchenware.call(kitchenware, saucepanForm);

        console.log("saucepan");
    }

    // Сохранение созданного объекта в единый массив
    kitchenwareArray.push(kitchenware);
    // и в localStorage
    localStorage.kitchenware = JSON.stringify(kitchenwareArray);

    // Создание строки таблицы на основе данных созданного объекта  и 
    // добавление ее в таблицу
    table.append(createTrTable.call(kitchenware));
});

// При перезагрузки страницы получаем созданные ранее объекты из localStorage
window.addEventListener('load', e => {
    kitchenwareArray = 'kitchenware' in localStorage ?
        JSON.parse(localStorage.kitchenware) : [];
    kitchenwareArray.forEach(elem => {
        // Создание строки таблицы на основе данных созданного объекта  и 
        // добавление ее в таблицу
        table.append(createTrTable.call(elem));
    });
});