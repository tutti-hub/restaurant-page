/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\nvar aboutPage = document.createElement('div');\naboutPage.classList.add('about');\naboutPage.innerHTML = \"\\n                <div class=\\\"contacts\\\">\\n                    <div class=contact>\\n                        <h2>Call Us</h2>\\n                        <p>(+34) 622 658 553</p>\\n                        <p>(+34) 622 658 554</p>\\n                    </div>\\n\\n                    <div class=contact>\\n                        <h2>Email Us</h2>\\n                        <p>support.restaurant@mail.com</p>\\n                        <p>manager.restaurant@mail.com</p>\\n                    </div>\\n\\n                    <div class=\\\"contact\\\">\\n                        <h2>Find Us</h2>\\n                        <p>Carrer del Sabor, 42</p>\\n                        <p>08001 Barcelona, Spain</p>\\n                    </div>\\n\\n                    <div class=\\\"contact\\\">\\n                        <h2>When We Sizzle</h2>\\n                        <p>Monday to Friday: 11:00 - 22:00</p>\\n                        <p>Saturday & Sunday: 12:00 - 23:00</p>\\n                    </div>\\n                </div>\";\n\n\n//# sourceURL=webpack://my-webpack-project/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/*  <div class=\"home\">\n        <h1>Restaurant Page</h1>\n        <p>Pasta la vista baby, pasta la vista...</p>\n    </div> */\n\nvar homePage = document.createElement('div');\nhomePage.classList.add('home');\nhomePage.innerHTML = \"<h1>Restaurant Page</h1>\\n<p>Pasta la vista baby, pasta la vista...</p>\\n\";\n\n\n//# sourceURL=webpack://my-webpack-project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pastas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pastas.js */ \"./src/pastas.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n__webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n__webpack_require__(/*! ./styles/header.css */ \"./src/styles/header.css\");\n__webpack_require__(/*! ./styles/footer.css */ \"./src/styles/footer.css\");\n__webpack_require__(/*! ./styles/home.css */ \"./src/styles/home.css\");\n__webpack_require__(/*! ./styles/menu.css */ \"./src/styles/menu.css\");\n__webpack_require__(/*! ./styles/about.css */ \"./src/styles/about.css\");\nvar homeBtn = document.querySelector('#home-btn');\nvar menuBtn = document.querySelector('#menu-btn');\nvar aboutBtn = document.querySelector('#about-btn');\nvar content = document.querySelector('#content');\ncontent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage);\nhomeBtn.addEventListener('click', function () {\n  addActiveClass(homeBtn);\n  content.innerText = '';\n  content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage);\n});\nmenuBtn.addEventListener('click', function () {\n  addActiveClass(menuBtn);\n  content.innerText = '';\n  content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage);\n});\naboutBtn.addEventListener('click', function () {\n  console.log('about');\n  addActiveClass(aboutBtn);\n  content.innerText = '';\n  content.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutPage);\n});\nfunction addActiveClass(btn) {\n  document.querySelectorAll('header button').forEach(function (btn) {\n    return btn.classList.remove('active');\n  });\n  btn.classList.add('active');\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _pastas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pastas.js */ \"./src/pastas.js\");\n\n/*\n   <div class=\"menu\">\n   <h2>Menu:</h2>\n   <div class=\"menu-list\">\n   <div class=\"dish\">\n   <div class=\"dish-title\">Lorem ipsum dolor sitdiv</div>\n   <div class=\"dish-description\">Lorem ipsum dolor amet consectetur adipisicing.</div>\n   <div class=\"dish-region\">Lorem</div>\n   <div class=\"dish-price\">9</div>\n   </div>\n   </div>\n   </div>\n   */\n\nvar menuPage = document.createElement('div');\nmenuPage.classList.add('menu');\nvar h2 = document.createElement('h2');\nh2.innerText = 'Menu:';\nmenuPage.appendChild(h2);\nvar menuList = document.createElement('div');\nmenuList.classList.add('menu-list');\nmenuPage.appendChild(menuList);\nfunction createDishElement(dish) {\n  var dishElement = document.createElement('div');\n  dishElement.classList.add('dish');\n  dishElement.innerHTML = \"<div class=\\\"dish-title\\\">\".concat(dish.title, \"</div>\\n    <div class=\\\"dish-description\\\">\").concat(dish.description, \"</div>\\n    <div class=\\\"dish-region\\\">\").concat(dish.region, \"</div>\\n    <div class=\\\"dish-price\\\">\").concat(dish.price, \"</div>\");\n  return dishElement;\n}\n_pastas_js__WEBPACK_IMPORTED_MODULE_0__.pastas.forEach(function (dish) {\n  var elem = createDishElement(dish);\n  menuList.appendChild(elem);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/menu.js?");

/***/ }),

/***/ "./src/pastas.js":
/*!***********************!*\
  !*** ./src/pastas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pastas: () => (/* binding */ pastas)\n/* harmony export */ });\nvar pastas = [{\n  title: 'Agnolini mantovani in brodo',\n  region: 'Lombardy',\n  price: 9,\n  description: 'A Mantua dish made with agnolini dumplings in broth'\n}, {\n  title: 'Agnolotti al plin',\n  region: 'Piedmont',\n  price: 7,\n  description: 'Agnolotti dumplings with Piedmont ragu sauce'\n}, {\n  title: \"Agnolotti pavesi in brodo d'oca\",\n  region: 'Lombardy',\n  description: 'Pavese agnolotti dumplings in goose broth'\n}, {\n  title: 'Anelletti al forno',\n  region: 'Sicily',\n  price: 12,\n  description: 'A Palermo baked pasta dish made with anelletti pasta, eggplant, meat sauce, cheese and peas'\n}, {\n  title: 'Anolini in brodo',\n  region: 'Emilia',\n  price: 8,\n  description: 'A Piacenza dish of anolini dumplings in broth'\n}, {\n  title: 'Battolli Caiegue',\n  region: 'Liguria',\n  price: 4,\n  description: 'Battolli pasta, made with chestnut flour, with a sauce made of pesto, turnip and potato'\n}, {\n  title: 'Bigoli in salsa',\n  region: 'Veneto',\n  price: 6,\n  description: 'Whole-wheat bigoli pasta, with a sauce made salt-cured fish with onion'\n}, {\n  title: 'Bigoli col musso',\n  region: 'Veneto',\n  price: 11,\n  description: 'Whole-wheat bigoli pasta, with a donkey ragu sauce'\n}, {\n  title: \"Bigoli con l'anatra\",\n  region: 'Veneto',\n  price: 10,\n  description: 'Whole-wheat bigoli pasta, with a duck ragu sauce'\n}, {\n  title: \"Bucatini all'amatriciana\",\n  region: 'Lazio',\n  price: 5,\n  description: 'Traditional Amatrice dish, made with bucatini pasta, with tomatoes, guanciale, pecorino romano cheese and black pepper.'\n}, {\n  title: 'Busiate con pesto alla trapanese',\n  region: 'Sicily',\n  price: 7,\n  description: 'A Trapani dish, made with busiate pasta, with pesto alla trapanese (a pesto sauce made of garlic and walnuts) '\n}];\n\n//# sourceURL=webpack://my-webpack-project/./src/pastas.js?");

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/about.css?");

/***/ }),

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/footer.css?");

/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/header.css?");

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/home.css?");

/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/menu.css?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;