/** Example 6 - Методы строк и чейнинг
Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо 
разделить вес в киллограммах на квадрат высоты человека в метрах.

Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк 
(специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, 
то есть в качестве разделителя дробной части может быть запятая.

Индекс массиы тела необходимо округлить до одной цифры после запятой;
*/

// let weight = '88,3';
// let height = '1.75';
// // weight / (height * height)

// weight = weight.replace(',', '.');
// console.log(weight);

// const bmi = weight / (height * height);
// console.log(bmi.toFixed(1)); // 28.8

// ---------------------------------------------------------------------------------

/** Example 9 - Значение по умолчанию и оператор нулевого слияния
Отрефактори код так, чтобы в переменную value присваивалось значение переменной 
incomingValue, если оно не равно undefined или null. В противном случае должно 
присваиваться значение defaultValue. Проверь работу скрипта для слепдующих 
значений переменной incomingValue: null, undefined, 0, false. 
Используй оператор ?? (nullish coalescing operator).
*/

// // const incomingValue = 5; //5
// // const incomingValue = null; //10
// // const incomingValue = undefined; //10
// // const incomingValue = 0; //0
// const incomingValue = false; //false
// const defaultValue = 10;

// // const value = incomingValue || defaultValue;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ----------------------------------------------------------------------------------

/** Example 10 - Опертор % и методы строк
Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку 
в формате часов и минут HH:MM.

70 покажет 01:10
450 покажет 07:30
1441 покажет 24:01
*/

const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
