/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
() {

eval("{\nconst select = document.querySelector('select')\nconst info = document.querySelector('p')\n\nselect.addEventListener('change', (e) => {\n    switch (select.value) {\n        case 'bmw':\n        case 'volvo':\n            getInfo(select.value)\n                .then(car => {\n                    info.innerHTML = `Тачка ${car.brand} ${car.model} <br>\n                    Цена: ${car.price}\\$`\n                })\n            break;\n        default:\n            info.innerHTML = ''\n    }\n})\n\nconst getInfo = async (brand) => {\n    try {\n        let res = await fetch(`http://localhost:4545/cars?brand:eq=${brand}`);\n        return (await res.json())[0]\n    } catch (error) { info.innerHTML = error.message }\n}\n\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;