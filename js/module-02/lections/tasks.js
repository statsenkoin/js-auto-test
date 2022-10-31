/** Модуль 2. Заняття 3. Масиви
// ===========================================================================
Example 1 - Базові операції з масивом
Створіть масив genres з елементами "Jazz" та "Blues".
Додайте «c» до кінця.
Виведіть у консоль перший елемент масиву.
Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву 
довільної довжини.
Видаліть перший елемент та виведіть його в консоль.
Вставте «Country» та «Reggae» на початок масиву.

js const genres =;
*/

// const genres = ['Jass', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae');

// console.log(genres);

/** Example 2 - Масиви та рядки
Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких 
зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

js const values = '8 11';
*/

// const values = '8 11';

// const valuesArr = values.split(' ');
// console.log(valuesArr);
// const square = valuesArr[0] * valuesArr[1];
// console.log(square);

/** Example 3 - Перебір масиву
Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента 
масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. 
Нумерація елементів має починатися з 1.

js const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// console.table(fruits);

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

/** Example 4 - Масиви та цикли
Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. 
У змінних names та phones зберігаються рядки імен та телефонних номерів, 
розділені комами. Порядковий номер імен та телефонів у рядках вказують на 
відповідність. Кількість імен та телефонів гарантовано однакова.

js const names = 'Jacob, William, Solomon, Artemis'; 
const phones = '89001234567,89001112233,890055566377,890055566300';
*/

// ------------------------------------------------------------------
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,89005566377,89005566300';

// const arrNames = names.split(',');
// let arrPhones = phones.split(',');
// console.log(arrNames, arrPhones);
// for (const name of arrNames) {
//   console.log(
//     `${arrNames.indexOf(name) + 1}: ${name} - ${
//       arrPhones[arrNames.indexOf(name)]
//     }`
//   );
// }

// ------------------------------------------------------------------
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,89005566377,89005566300';

// const arrNames = names.split(',');
// let arrPhones = phones.split(',');
// const pArr = [];
// for (let phone of arrPhones) {
//   const phoneArr = phone.split('');
//   phoneArr.splice(4, 0, ')');
//   phoneArr.splice(1, 0, '(');
//   phoneArr.splice(-7, 0, '-');
//   phoneArr.splice(-4, 0, '-');
//   phoneArr.splice(-2, 0, '-');
//   pArr.push(phoneArr.join(''));
//   //   console.log(pArr);
// }
// for (let i = 0; i < arrNames.length; i++) {
//   console.log(`${i + 1}: ${arrNames[i]} - ${pArr[i]}`);
// }

/** Example 5 - Масиви та рядки
Напиши скрипт який виводить у консоль усі слова рядка окрім першого та останнього. 
Результуючий рядок не повинен починатися або закінчуватися символ пробілу. 
Скрипт повинен працювати для будь-якого рядка.

js const string = 'Welcome to the future';
*/

/** Example 6 - Масиви та рядки
Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить її в консоль.

js const string = 'Welcome to the future';
*/

/** Example 7 - Сортування масиву
Напиши скрипт сортування масиву.

js const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
*/

/** Example 8 - Пошук елемента
Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для 
будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

js const numbers = [2, 17, 94, 1, 23, 37]; let min; console.log(min); // 1
*/

/** ============================================================================
    Модуль 2. Заняття 4. Функції
================================================================================

/** Example 1 - Індекс маси тіла
Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла. 
Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

/** Example 2 - Найменше з чисел
Напиши функцію min(a,b), яка повертає менше з чисел a та b.

js  console.log(min(2, 5));  // 2 
    console.log(min(3, -1)); // -1 
    console.log(min(1, 1));  // 1
*/

/** Example 3 - Площа прямокутника
Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі 
сторонами, значення яких будуть передані до параметра dimensions у вигляді рядки. 
Значення гарантовано розділені пробілом.

``js function getRectArea(dimensions) {}

console.log(getRectArea('8 11')); ``
*/

/** Example 4 - Логування елементів
Напиши функцію logItems(items), яка отримує масив та використовує цикл for, 
який для кожного елемента масиву буде виводити в консоль повідомлення форматі 
<номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 
буде виведено 1 – Mango, а для індексу 2 виведе 3 – Ajax.

``js function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']); logItems(['🍎', '🍇', '🍑', '🍌', '🍋']); ``
*/

/** Example 5 - Логування контактів
Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та 
телефонний номер користувача. У параметри names та phones будуть передані рядки 
імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів 
у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакове.

``js function printContactsInfo(names, phones) {}

printContactsInfo( 'Jacob, William, Solomon, Artemis', 
                    '89001234567,89001112233,890055566377,890055566300', ); ``
*/

/** Example 6 - Пошук найбільшого елемента
Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.

``js function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37]))); // 94 
console.log(findLargestNumber([49, 4, 7, 83, 12]))); // 83 ``
*/

/** Example 7 - Середнє значення
Напишіть функцію calAverage() яка приймає довільну кількість аргументів і 
повертає їхнє середнє значення. Усі аргументи будуть лише числами.

``js function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5 
console.log(calAverage(14, 8, 2)); // 8 
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2 ``
*/

/** Example 8 - Форматування часу
Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) 
у рядок у форматі годин та хвилин HH:MM.

``js const hours = Math.floor(totalMinutes / 60); 
    const minutes = totalMinutes % 60; 
    console.log(hours); 
    console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0); 
const doubleDigitMinutes = String(minutes).padStart(2, 0); 
console.log(${doubleDigitHours}:${doubleDigitMinutes});

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10" 
console.log(formatTime(450)); // "07:30" 
console.log(formatTime(1441)); // "24:01" ``
*/

/** Example 9 - Колекція курсів (includes, indexOf, push і т.д.)
Напишіть функції для роботи з колекцією навчальних курсів courses:

addCourse(name) - додає курс до кінця колекції
removeCourse(name) - видаляє курс з колекції
updateCourse(oldName, newName) - змінює ім'я на нове
``js const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express'); console.log(courses); 
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express'] 
addCourse('CSS'); 
// 'У вас вже є такий курс'
removeCourse('React'); console.log(courses); 
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express'] 
removeCourse('Vue'); 
// 'Курс з таким іменем не знайдено'
updateCourse('Express', 'NestJS'); console.log(courses); 
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS'] ``
*/
