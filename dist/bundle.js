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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://api-webapp/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_tvmaze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tvmaze.js */ \"./src/modules/tvmaze.js\");\n/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\n\n\n\n\n// Update Likes\nconst updateLikes = async () => {\n  const response = await (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n  document.querySelectorAll('.starCount').forEach((button) => {\n    for (let i = 0; i < response.length; i += 1) {\n      if (response[i].item_id === Number(button.id)) {\n        button.lastChild.textContent = response[i].likes;\n      }\n    }\n  });\n};\n\n// Display Cards Dynamically\nconst cards = document.querySelector('.cards');\nconst createElement = async (requestURL) => {\n  cards.innerHTML = '';\n  await (0,_modules_tvmaze_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\n    .then((data) => {\n      let searchCount = 0;\n      const dataArray = data._embedded.episodes;\n      dataArray.forEach((el) => {\n        const div = document.createElement('div');\n        div.classList.add('cardItem');\n        const divImg = document.createElement('div');\n        divImg.classList.add('cardImg');\n        divImg.style.backgroundImage = `url(${el.image.original})`;\n        const h1 = document.createElement('h1');\n        h1.classList.add('cardName');\n        h1.textContent = `S${el.season}E${el.number} ${el.name}`;\n        const details = document.createElement('p');\n        details.classList.add('cardDetails');\n        details.innerHTML = `Plot Summary: <br>${el.summary}`;\n        const h2 = document.createElement('h2');\n        h2.classList.add('cardRuntime');\n        h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;\n\n        const starContainer = document.createElement('div');\n        starContainer.classList.add('starContainer');\n\n        const starRate = document.createElement('span');\n        starRate.classList.add('material-icons-round');\n        starRate.classList.add('icons');\n        starRate.classList.add('starRate');\n        starRate.textContent = 'star_rate';\n\n        const starCount = document.createElement('span');\n        starCount.classList.add('starCount');\n        starCount.setAttribute('id', el.id);\n        starCount.textContent = '0';\n\n        const starBorder = document.createElement('span');\n        starBorder.classList.add('material-icons-round');\n        starBorder.classList.add('icons');\n        starBorder.classList.add('starBorder');\n        starBorder.textContent = 'star_border';\n        starBorder.setAttribute('id', el.id);\n\n        // Like Event\n        starBorder.addEventListener('click', () => {\n          (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.show.id);\n          starBorder.classList.toggle('liked');\n          starCount.setAttribute('disabled', true);\n          setTimeout(updateLikes, 1000);\n        });\n\n        const cBtn = document.createElement('button');\n        cBtn.classList.add('commentBtn');\n        cBtn.textContent = 'Comments';\n        starContainer.append(starRate, starCount, starBorder);\n        div.append(divImg, starContainer, h1, h2, details, cBtn);\n        cards.append(div);\n        searchCount += 1;\n        searchResults.textContent = `Search Results (${searchCount})`;\n      });\n    });\n};\n\n\n// Default Search On Page Load\nconst createElementForShows = async (requestURL) => {\n  cards.innerHTML = '';\n  await (0,_modules_tvmaze_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\n    .then((data) => {\n      data.forEach((el) => {\n        const div = document.createElement('div');\n        div.classList.add('cardItem');\n        const divImg = document.createElement('div');\n        divImg.classList.add('cardImg');\n        divImg.style.backgroundImage = `url(${el.image.original})`;\n        const h1 = document.createElement('h1');\n        h1.classList.add('cardName');\n        h1.textContent = el.name;\n\n        const starContainer = document.createElement('div');\n        starContainer.classList.add('starContainer');\n\n        const starRate = document.createElement('span');\n        starRate.classList.add('material-icons-round');\n        starRate.classList.add('icons');\n        starRate.classList.add('starRate');\n        starRate.textContent = 'star_rate';\n\n        const starCount = document.createElement('span');\n        starCount.classList.add('starCount');\n        starCount.setAttribute('id', el.id);\n        starCount.textContent = '0';\n\n        const starBorder = document.createElement('span');\n        starBorder.classList.add('material-icons-round');\n        starBorder.classList.add('icons');\n        starBorder.classList.add('starBorder');\n        starBorder.textContent = 'star_border';\n        starBorder.setAttribute('id', el.id);\n\n        // Like Event\n        starBorder.addEventListener('click', () => {\n          (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.id);\n          starBorder.classList.toggle('liked');\n          starCount.setAttribute('disabled', true);\n          setTimeout(updateLikes, 1000);\n        });\n\n        const cBtn = document.createElement('button');\n        cBtn.classList.add('commentBtn');\n        cBtn.textContent = 'Comments';\n        starContainer.append(starRate, starCount, starBorder);\n        div.append(divImg, starContainer, h1, cBtn);\n        cards.append(div);\n      });\n    });\n};\n\nwindow.onload = () => {\n  const defaultURL = 'https://api.tvmaze.com/shows';\n  createElementForShows(defaultURL);\n  setTimeout(updateLikes, 100);\n};\n\n// Homepage Link\nconst h1 = document.querySelector('h1');\nh1.addEventListener('click', () => {\n  window.location.reload();\n});\n\n//# sourceURL=webpack://api-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst postLike = async (itemID) => {\n  const appID = 'OQCl5yEXf3GxJhpasEHV';\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`;\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemID }),\n  });\n  const post = await response.text();\n  return post;\n};\n\nconst getLikes = async () => {\n  const appID = 'OQCl5yEXf3GxJhpasEHV';\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);\n  const likes = await response.json();\n  return likes;\n};\n\n \n\n//# sourceURL=webpack://api-webapp/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/tvmaze.js":
/*!*******************************!*\
  !*** ./src/modules/tvmaze.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async (url) => {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://api-webapp/./src/modules/tvmaze.js?");

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