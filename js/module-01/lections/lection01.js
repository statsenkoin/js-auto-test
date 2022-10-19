'use strict';
// console.log('Hi, js!');

// ===== from freeCodeCamp =====
// https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a

// function createSentence(words, punctuation) {
//   const sentence = words.join(' ');
//   return sentence + punctuation;
// }

// const words = ['Hi,', 'my', 'name', 'is', 'Ihor'];
// const punctuation = '!';
// const sentence = createSentence(words, punctuation);
// console.log(sentence);

// ===============================

// ===== ОПЕРАТОР typeof =========

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = 'JavaScript is awesome!';
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// ==================================

// ===== ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ =========
// ----- !!! для браузера -----------------
// ----- !!! nodemon ламається ------------

// const message = 'JavaScript is awesome!';
// alert(message);

// // Просимо клієнта підтвердити бронювання готелю
// // і зберігаємо результат роботи confirm у змінну
// // OK повертає true, Cancel - false
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// // Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// // і зберігаємо результат виклику prompt у змінну.
// // OK повертає рядок - те, що ввів користувач, Cancel - null
// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);

// =========================================

// ===== NUMBER ============================

// const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"
// console.log(typeof valueA); // string

// const valueB = 'random string';
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"
// console.log(typeof valueB); // string

// ---------------------------------

// console.log(Number.parseInt('5px')); // 5
// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseInt('12.46qwe79')); // 12
// console.log(Number.parseInt('qweqwe')); // NaN

// console.log(Number.parseFloat('5px')); // 5
// console.log(Number.parseFloat('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46
// console.log(Number.parseFloat('qweqwe')); // NaN

// -----------------------------------

// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// ------------------------------------

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// ---------------------------------------

// // Math.floor(num) - повертає найбільше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// // console.log(Math.random() * (max - min) + min);
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// ===========================================================

// ===== РЯДКИ =================================

// const message = 'Welcome to Bahamas!';
// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// ----------- toUpperCase(), toLowerCase() --------------------------------------

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// ---------- indexOf() ---------------------------------------

// const message = 'Welcome to Bahamas!';
// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1

// ---------- includes() -----------------------------------------

// const productName = 'Ремонтний дроїд';

// console.log(productName.includes('н')); // true
// console.log(productName.includes('Н')); // false
// console.log(productName.includes('дроїд')); // true
// console.log(productName.includes('Дроїд')); // false
// console.log(productName.includes('Ремонтний')); // true
// console.log(productName.includes('ремонтний')); // false

// ---------- endsWith() ------------------------------------------

// const jsFileName = 'script.js';
// console.log(jsFileName.endsWith('.js')); // true

// const cssFileName = 'styles.css';
// console.log(cssFileName.endsWith('.js')); // false

// ---------- replace(), replaceAll() ----------------------------------------

// const jsFileName = 'script.js';
// const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = 'styles.css, about.css, portfolio.css';
// const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// --------- slice (startIndex, endIndex) ----------------------------------------

// const productName = 'Repair droid';
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// ==================================================
