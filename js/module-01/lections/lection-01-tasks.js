/** Example 1 - Ввод пользователя и ветвления
 * Используя конструкцию if..else и prompt, напиши код,
 * который будет спрашивать: "Какое официальное название JavaScript?".
 * Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
 * в противном случае - "Не знаете? ECMAScript!"
 */

// const output = 'ECMAScript';
// let result = 'Не знаете? ECMAScript!';
// let input = prompt('Какое официальное название JavaScript?');
// if (input === output) {
//   result = 'Верно!';
// }
// alert(result);

/** Example 3 - Ветвеления
 * Напиши скрипт, который выводит в консоль строку
 * "Это положительное число", если в prompt пользователь ввел число
 * больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль".
 * Если передали отрицательное число, в консоли должна быть строка
 * "Это отрицательное число".
 */

// let userOutput = '';
// const userInput = prompt('Введите число');
// if (userInput > 0) userOutput = 'Это положительное число';
// else if (userInput < 0) userOutput = 'Это отрицательное число';
// else userOutput = 'Это ноль';
// console.log(userOutput);

/** Example 4 - Вложенные ветвления
 * Напиши скрипт, который сравнивает числа в переменных a и b.
 * Если оба значения больше 100, то выведи в консоль максимальное из них.
 * В противном случае в консоли должна быть сумма значения b и числа 512.
 */

// const a = 120;
// const b = 180;
// const result = a > 100 && b > 100 ? Math.max(a, b) : b + 512;
// console.log(result);

/** Example 5 - Форматирование ссылки (endsWith)
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной link символом /. Если нет, добавь в конец значения link
 * этот символ. Используй конструкцию if...else.
 */

// let link = 'https://my-site.com/about/';
// console.log(!link.endsWith('/'));
// if (!link.endsWith('/')) link += '/';
// console.log(link);

/** Example 6 - Форматирование ссылки (includes и логическое «И»)
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной link символом /. Если нет, добавь в конец значения
 * link этот символ, но только в том случае, если в link есть
 * подстрока "my-site". Используй конструкцию if...else.
 */

// let link = 'https://somesite.com/about';
// // let link = 'https://my-site.com/about';
// link = link.includes('my-site') && !link.endsWith('/') ? (link += '/') : link;
// console.log(link);

/** Example 8 - if...else и логические операторы
 * Напиши скрипт который будет выводить в консоль браузера строку
 * в зависимости от значения переменной hours.
 * Если значение переменной hours:
 * меньше 17, выводи строку "Pending"
 * больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
 * больше 24 , выводи строку "Overdue"
 */

// const hours = 2;
// let result = '';
// if (hours < 17) result = 'Pending';
// else if (hours >= 17 && hours <= 24) result = 'Expires';
// else result = 'Overdue';
// console.log(result);

/** Example 9 - Дедлайн сдачи проекта (if...else)
 * Напиши скрипт для отображения времени дедлайна сдачи проекта.
 * Используй конструкцию if...else.
 *
 * Eсли до дедлайна 0 дней - выведи строку "Сегодня"
 * Eсли до дедлайна 1 день - выведи строку "Завтра"
 * Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
 * Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
 */

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

/** Example 10 - Дедлайн сдачи проекта (switch)
 * Выполни рефакторинг кода задачи номер 5 используя switch.
 */

// const daysUntilDeadline = 5;
// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 3:
//     console.log('Послезавтра');
//     break;
//   default:
//     console.log('Дата в будущем');
// }

/** Example 11 - Цикл for
 * Напиши цикл for который выводит в консоль браузера числа
 * по возрастанию от min до max, но только если число кратное 5.
 */

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

/** Example 12 - Ввод пользователя и ветвления
 * Напиши скрипт, который будет спрашивать логин с помощью prompt и
 * логировать результат в консоль браузера.
 *
 * Если посетитель вводит "Админ", то prompt запрашивает пароль
 * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
 * В противном случае вывести строку "Я вас не знаю"
 * Пароль проверять так:
 * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
 * Иначе выводить строку "Неверный пароль" */

// let input = prompt('Ввести логін');
// if (input === null) console.log('Отменено');
// else if (input === 'Админ') input = prompt('Ввести пароль');
// else input = console.log('Неверный логін');

// if (input === null) console.log('Отменено');
// else if (input === 'Я админ') console.log('Здравствуйте!');
// else input = console.log('Неверный пароль');

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

// for (const key in dog) {
//   console.log(key, dog[key]);
console.log(Object.entries(dog));
//   console.log(dog[key]);
// }
// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
