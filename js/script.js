//Объявление стрелочной ф-ии, которая принимает параметр type и все другие параметры, которые
// сворачиваются в массив values. Ф-ия возвращает новый массив в которых содержаться только 
// те элементы массива values, тип которых совпадает с типом type
const filterByType = (type, ...values) => values.filter(value => typeof value === type),
	// ',' - это разделитель, т.е hideAllResponseBlocks - это перемменная CONST, значение которой
	// равно стрелочной ф-ии. Ф-ия ничего не принимает
	hideAllResponseBlocks = () => {
		// Получение массива на основе псевдомассива, содержащего теги div с классом dialog__response-block
		// Получаем все блоки в которых выводятся ошибка фильтрации, положительный и нейтральный результат
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		// Все эти блоки скрываем
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},

	// Определение стрелочной ф-ии const showResponseBlock с тремя параметрами
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		// Скрываем все три блока вывода Результата (ошибки, положительный и нейтральный результат)
		hideAllResponseBlocks();
		// Отображение элемент с селектором blockSelector
		document.querySelector(blockSelector).style.display = 'block';
		// Если в ф-ию передан параметр spanSelector
		if (spanSelector) {
			// То элементу с селектором spanSelector в качестве текста устанавливается
			// значение параметра msgText
			document.querySelector(spanSelector).textContent = msgText;
		}
	},

	// Определение стрелочной ф-ии const showError
	// Она скрывает всё содержимое Результатов, показывать в результатах блок 'Что-то пошло нетак: ', 
	// (отрицательный результат) на котором отображаются ошибки, и в span этого блока выводит 
	// сообщение msgText
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),

	// Определение стрелочной ф-ии const showResults
	// Она скрывает всё содержимое Результатов, показывать в результатах блок 'Вот что получилось: ', 
	// (положительный результат) на котором отображаются положительные результаты, и в span этого 
	// блока выводит сообщение msgText
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),

	// Определение стрелочной ф-ии const showResults
	// Она скрывает всё содержимое Результатов, показывать в результатах блок 'Пока что нечего показать.', 
	// (нейтральный результат) на котором ничего не отображается
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),

	// Стрелочная ф-ий const tryFilterByType, которая принимает два параметр type и values
	tryFilterByType = (type, values) => {
		try {
			// eval вызывае ф-ию filterByType с параметрами type и values и полученный 
			// массив превращает с строку, с элементами массива, разделенными запятыми
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// Если полученная строка не пустая, то формируется строка с типами type, если 
			// полученная строка пустая, то фомируется строк с осутствием данных с типом type
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			// Сформированная строка отображается в Результатах
			showResults(alertMsg);
		} catch (e) {
			// Обработка ошибок
			showError(`Ошибка: ${e}`);
		}
	};

// Получение кнопки "Фильтровать"
const filterButton = document.querySelector('#filter-btn');

// Создание слушателя нажатия на кнопку "Фильтровать"
filterButton.addEventListener('click', e => {
	// Получение выпадающего списка "Тип данных"
	const typeInput = document.querySelector('#type');
	// Получение поля ввода "Данные"
	const dataInput = document.querySelector('#data');

	if (dataInput.value === '') { // Если поле ввода "Данные" не заполнено
		// то над этим полем устанавливаем отображение сообщения об ошибке валидации
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// и блоке "Результаты" отображаем надпись 'Пока что нечего показать'
		// (нейтральный результа).
		showNoResults();
	} else { // Если поле ввода "Данные" пользователь установил данные
		// то над этим полем удаляем отображение сообщения об ошибке валидации
		dataInput.setCustomValidity('');
		// Предотвращаем срабатывание стандартных обработчиков событий для кнопки
		e.preventDefault();
		// Начинаем обработку установленных пользователем данных, удаляя пробелы в начале и в конце данных.
		// Передаем на обработку выбранный тип в выпадающем списке "Тип данных" и данные из поля "Данные"
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

