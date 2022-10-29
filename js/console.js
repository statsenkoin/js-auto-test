// TO USE OPEN console.html AND START LIVE SERVER

'use strict';

// console.log('Hello, Console!');

// ----- alert() ---------------------

// Виводить модальне вікно-повідомлення
// const message = 'JavaScript is awesome!';
// alert(message);

// ----- confirm() ------------------

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
// OK повертає true, Cancel - false
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// ----- prompt() --------------------

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
// OK повертає рядок - те, що ввів користувач, Cancel - null
// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);

// --------------------------------------------------------
// --------------------------------------------------------

// Напишіть 3 цикла:
// 1й цикл: выводить в консоль числа від max до min по зменшеню (убыванию).
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }

// 2й цикл: виводить в консоль усі парні (четные) числа від min до max.
// const max = 50;
// const min = 23;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) console.log(i);
// }

// 3й цикл: виводить в консоль суму усіх парних (четных) чисел від min до max
const max = 50;
const min = 23;

let sum = 0;
for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);
