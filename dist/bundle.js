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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_externelAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/externelAPI.js */ \"./src/modules/externelAPI.js\");\n/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\nconst countResults = document.querySelector('h2');\n\n// Update Likes\nconst updateLikes = async () => {\n  const response = await (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n  document.querySelectorAll('.starCount').forEach((button) => {\n    for (let i = 0; i < response.length; i += 1) {\n      if (response[i].item_id === Number(button.id)) {\n        button.lastChild.textContent = response[i].likes;\n      }\n    }\n  });\n};\n\n// Display Cards\nconst cards = document.querySelector('.cards');\nconst createElement = async (requestURL) => {\n  cards.innerHTML = '';\n  await (0,_modules_externelAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\n    .then((data) => {\n      let elementCount = 0;\n      const dataArray = data.embedded.episodes;\n      dataArray.forEach((el) => {\n        const div = document.createElement('div');\n        div.classList.add('cardItem');\n        const divImg = document.createElement('div');\n        divImg.classList.add('cardImg');\n        divImg.style.backgroundImage = `url(${el.image.original})`;\n        const h1 = document.createElement('h1');\n        h1.classList.add('cardName');\n        h1.textContent = `S${el.season}E${el.number} ${el.name}`;\n        const details = document.createElement('p');\n        details.classList.add('cardDetails');\n        details.innerHTML = `Plot Summary: <br>${el.summary}`;\n        const h2 = document.createElement('h2');\n        h2.classList.add('cardRuntime');\n        h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;\n\n        const starContainer = document.createElement('div');\n        starContainer.classList.add('starContainer');\n\n        const starRate = document.createElement('span');\n        starRate.classList.add('material-icons-round');\n        starRate.classList.add('icons');\n        starRate.classList.add('starRate');\n        starRate.textContent = 'star_rate';\n\n        const starCount = document.createElement('span');\n        starCount.classList.add('starCount');\n        starCount.setAttribute('id', el.id);\n        starCount.textContent = '0';\n\n        const starBorder = document.createElement('span');\n        starBorder.classList.add('material-icons-round');\n        starBorder.classList.add('icons');\n        starBorder.classList.add('starBorder');\n        starBorder.textContent = 'star_border';\n        starBorder.setAttribute('id', el.id);\n\n        // Like\n        starBorder.addEventListener('click', () => {\n          (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.show.id);\n          starBorder.classList.toggle('liked');\n          starCount.setAttribute('disabled', true);\n          setTimeout(updateLikes, 100);\n        });\n\n        const cBtn = document.createElement('button');\n        cBtn.classList.add('commentBtn');\n        cBtn.textContent = 'Comments';\n        starContainer.append(starRate, starCount, starBorder);\n        div.append(divImg, starContainer, h1, h2, details, cBtn);\n        cards.append(div);\n        elementCount += 1;\n        countResults.textContent = `Search Results (${elementCount})`;\n      });\n    });\n};\ncreateElement('https://api.tvmaze.com/shows');\n\nconst createElementForShows = async (requestURL) => {\n  cards.innerHTML = '';\n  await (0,_modules_externelAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL)\n    .then((data) => {\n      let elementCount = 0;\n      data.forEach((el) => {\n        const div = document.createElement('div');\n        div.classList.add('cardItem');\n        const divImg = document.createElement('div');\n        divImg.classList.add('cardImg');\n        divImg.style.backgroundImage = `url(${el.image.original})`;\n        const h1 = document.createElement('h1');\n        h1.classList.add('cardName');\n        h1.textContent = el.name;\n\n        const starContainer = document.createElement('div');\n        starContainer.classList.add('starContainer');\n\n        const starRate = document.createElement('span');\n        starRate.classList.add('material-icons-round');\n        starRate.classList.add('icons');\n        starRate.classList.add('starRate');\n        starRate.textContent = 'star_rate';\n\n        const starCount = document.createElement('span');\n        starCount.classList.add('starCount');\n        starCount.setAttribute('id', el.id);\n        starCount.textContent = '0';\n\n        const starBorder = document.createElement('span');\n        starBorder.classList.add('material-icons-round');\n        starBorder.classList.add('icons');\n        starBorder.classList.add('starBorder');\n        starBorder.textContent = 'star_border';\n        starBorder.setAttribute('id', el.id);\n\n        // Like\n        starBorder.addEventListener('click', () => {\n          (0,_modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(el.id);\n          starBorder.classList.toggle('liked');\n          starCount.setAttribute('disabled', true);\n          setTimeout(updateLikes, 1000);\n        });\n\n        const cBtn = document.createElement('button');\n        cBtn.classList.add('commentBtn');\n        cBtn.setAttribute('id', `b${el.id}`);\n        cBtn.textContent = 'Comments';\n        starContainer.append(starRate, starCount, starBorder);\n        div.append(divImg, starContainer, h1, cBtn);\n        cards.append(div);\n        elementCount += 1;\n        countResults.textContent = `Number of Elements: ${elementCount}`;\n\n        cBtn.addEventListener('click', () => {\n          (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el.id);\n        });\n      });\n    });\n};\n\nwindow.onload = () => {\n  const defaultURL = 'https://api.tvmaze.com/shows';\n  createElementForShows(defaultURL);\n  setTimeout(updateLikes, 100);\n};\n\n\n//# sourceURL=webpack://api-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/externelAPI.js":
/*!************************************!*\
  !*** ./src/modules/externelAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async (url) => {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://api-webapp/./src/modules/externelAPI.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appID = '69OY6E73yjavl4eR3trH';\n\nconst postLike = async (itemID) => {\n  const response = await fetch(`${url}${appID}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemID }),\n  });\n  const post = await response.text();\n  return post;\n};\n\nconst getLikes = async () => {\n  const response = await fetch(`${url}${appID}/likes`);\n  const likes = await response.json();\n  return likes;\n};\n\nconst postComment = async (_id, _name, _comment) => {\n  const response = await fetch(`${url}${appID}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: _id,\n      username: _name,\n      comment: _comment,\n    }),\n  });\n  const post = await response.text();\n  return post;\n};\n\nconst getComments = async (_id) => {\n  const response = await fetch(`${url}${appID}/comments?item_id=${_id}`);\n  const comments = await response.json();\n  return comments;\n};\n\n\n\n\n//# sourceURL=webpack://api-webapp/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\n\nlet numComments = 0;\nconst popup = (id) => {\n  let i = 0;\n  const body = document.querySelector('body');\n  const popup = document.createElement('section');\n  const content = document.createElement('div');\n  const title = document.createElement('h1');\n  const rating = document.createElement('div');\n  const puntuation = document.createElement('h3');\n  const image = document.createElement('img');\n  const category = document.createElement('div');\n  const description = document.createElement('div');\n  const line = document.createElement('div');\n  const revh2 = document.createElement('h2');\n  const line2 = document.createElement('div');\n  const commentUl = document.createElement('ul');\n  const reviewForm = document.createElement('form');\n  const formh2 = document.createElement('h2');\n  const nameBox = document.createElement('input');\n  const msgBox = document.createElement('textarea');\n  const btnInput = document.createElement('button');\n  const close = document.createElement('button');\n\n  popup.className = 'popup';\n  content.className = 'popup-content';\n  title.className = 'popup-title';\n  rating.className = 'popup-rating-div';\n  puntuation.className = 'popup-punt';\n  image.className = 'popup-img';\n  category.className = 'popup-category';\n  description.className = 'popup-description';\n  line.className = 'popup-line';\n  line2.className = 'popup-line';\n  revh2.className = 'popup-subtilte';\n  commentUl.className = 'popup-comment-list';\n  reviewForm.className = 'popup-form';\n  formh2.className = 'popup-subtilte';\n  nameBox.className = 'popup-form-name';\n  msgBox.className = 'popup-form-msg';\n  btnInput.className = 'popup-submit';\n  close.className = 'close-popup';\n\n  puntuation.setAttribute('id', 'punt');\n  formh2.setAttribute('id', 'popup-subtitle');\n  nameBox.setAttribute('name', 'name');\n  nameBox.setAttribute('placeholder', 'Name');\n  nameBox.setAttribute('type', 'text');\n  nameBox.setAttribute('maxlength', '30');\n  msgBox.setAttribute('name', 'message');\n  msgBox.setAttribute('placeholder', 'Comments');\n  msgBox.setAttribute('type', 'text');\n  msgBox.setAttribute('maxlength', '500');\n  btnInput.setAttribute('type', 'submit');\n  body.appendChild(popup);\n  popup.appendChild(content);\n  content.appendChild(title);\n  content.appendChild(close);\n  content.appendChild(rating);\n  rating.appendChild(puntuation);\n  content.appendChild(image);\n  content.appendChild(category);\n  content.appendChild(description);\n  content.appendChild(line);\n  content.appendChild(revh2);\n  content.appendChild(commentUl);\n  content.appendChild(line2);\n  content.appendChild(reviewForm);\n  reviewForm.appendChild(formh2);\n  reviewForm.appendChild(nameBox);\n  reviewForm.appendChild(msgBox);\n  reviewForm.appendChild(btnInput);\n\n  const popupData = async () => {\n    const gameUrl = `https://api.tvmaze.com/shows/${id}`;\n    const result = await fetch(gameUrl);\n    const data = await result.json();\n\n    document.querySelector('.popup-title').textContent = data.name;\n    document.querySelector('.popup-punt').textContent = `⭐  ${data.rating.average}`;\n    document.querySelector('.popup-img').src = data.image.original;\n    document.querySelector('.popup-description').innerHTML = data.summary;\n    document.querySelector('#popup-subtitle').textContent = 'Add review';\n    document.querySelector('.popup-submit').textContent = 'submit';\n    document.querySelector('.close-popup').textContent = 'X';\n\n    data.genres.forEach((e) => {\n      const genre = document.createElement('p');\n      genre.className = 'popup-cat-des';\n      genre.setAttribute('id', `p${i}`);\n      document.querySelector('.popup-category').appendChild(genre);\n      document.getElementById(`p${i}`).textContent = e;\n      i += 1;\n    });\n  };\n  popupData();\n\n  const updateComments = async (id) => {\n    let comments = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n    comments = Array.isArray(comments) ? comments : [];\n    if (comments) {\n      comments.forEach((comment) => {\n        commentUl.innerHTML += `\n          <li class=\"comment-item\">\n            <h4 class=\"user\">${comment.username}</h4>\n            <span class=\"date\">${comment.creation_date}</span>\n            <p class=\"user-comment\">${comment.comment}</p>\n          </li>`;\n      });\n      numComments = comments.length;\n      document.querySelector('.popup-subtilte').textContent = `Reviews (${numComments})`;\n    }\n  };\n  updateComments(id);\n\n  reviewForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(id, nameBox.value, msgBox.value);\n    commentUl.innerHTML = '';\n    setTimeout(() => {\n      updateComments(id);\n    }, '500');\n    nameBox.value = '';\n    msgBox.value = '';\n  });\n\n  close.addEventListener('click', (e) => {\n    e.preventDefault();\n    popup.remove();\n  });\n  window.addEventListener('click', (e) => {\n    if (e.target === popup) {\n      popup.remove();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://api-webapp/./src/modules/popup.js?");

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