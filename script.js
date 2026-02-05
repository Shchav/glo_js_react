'use strict'

const isNumber = function (num) {
    return !!num && isFinite(num) && !num.includes(' ');
}

const guessNum = function (wishNum) {

    return function game() {
        let userNum = prompt('Угадай число от 1 до 100');

        function check(cond, message, isContinue) {
            if (cond) {
                alert(message);
                if (isContinue)
                    game();
            }
            return cond;
        }
        check(userNum == null, 'Игра окончена') ||
            check(!isNumber(userNum), 'Введи число!', true) ||
            check(userNum > wishNum, 'Загаданное число меньше', true) ||
            check(userNum < wishNum, 'Загаданное число больше', true) ||
            check(userNum == wishNum, 'Поздравляю, Вы угадали!!!')
    }
}

guessNum(23)();
