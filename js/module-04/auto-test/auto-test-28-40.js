const myLog = (data) => console.log(data);

/** 28 МЕТОД FIND()
Якщо метод filter(callback) використовується для пошуку всіх елементів, 
що задовольняють умову, то метод find(callback) дозволяє знайти і 
повернути перший відповідний елемент, після чого перебирання масиву 
припиняється. Тобто він шукає до першого збігу.

масив.find((element, index, array) => {
  // Тіло колбек-функції
});

Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек 
повернув false, метод повертає undefined.

Метод find() використовується для одного завдання - пошуку елемента 
за унікальним значенням властивості. Наприклад, пошук користувача за поштою, 
автомобіля - за серійним номером, книги - за назвою тощо.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); 
// { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); 
// { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); 
// undefined

// ----------------------------------------------------------------------------
Використовуючи метод find(), доповни код таким чином, щоб:

У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) 
збігається зі значенням змінної BOOK_TITLE.
У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) 
збігається зі значенням змінної AUTHOR.
*/

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// // ----------------------------------------------------------------------------
// myLog(bookWithTitle);
// myLog(bookByAuthor);

// ============================================================================

/** 29 ЗАДАЧА. КОРИСТУВАЧ З ПОШТОЮ
Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала 
об'єкт користувача, пошта якого (властивість email) збігається зі значенням 
параметра email.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час
// виклику функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(getUserWithEmail(users, 'shereeanthony@kog.com')); // Sheree Anthony
// myLog(getUserWithEmail(users, 'elmahead@omatom.com')); // Elma Head
// myLog(getUserWithEmail(users, 'blackburndotson@furnigeer.com')); // Blackburn Dotson
// myLog(getUserWithEmail(users, 'anthony@kog.com')); // undefined

// ============================================================================

/** 30 МЕТОД EVERY()
Метод every(callback) перевіряє, чи проходять всі елементи масиву тест 
колбек-функції. Повертає true або false.

масив.every((element, index, array) => {
  // Тіло колбек-функції
});

Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає true, якщо всі елементи масиву задовольняють умову.
Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
Перебирання масиву припиняється, якщо колбек повертає false.
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

При роботі з масивом об'єктів перевіряється значення якоїсь їх властивості.

// ----------------------------------------------------------------------------
Використовуючи метод every(), доповни код таким чином, щоб:

У змінній eachElementInFirstIsEven був результат перевірки всіх елементів 
масиву firstArray на парність.
У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів 
масиву firstArray на непарність.
У змінній eachElementInSecondIsEven був результат перевірки всіх елементів 
масиву secondArray на парність.
У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів 
масиву secondArray на непарність.
У змінній eachElementInThirdIsEven був результат перевірки всіх елементів 
масиву thirdArray на парність.
У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів 
масиву thirdArray на непарність.
 */

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);

// // ----------------------------------------------------------------------------
// myLog(eachElementInFirstIsEven); // true
// myLog(eachElementInFirstIsOdd); //false
// myLog(eachElementInSecondIsEven); //false
// myLog(eachElementInSecondIsOdd); //true
// myLog(eachElementInThirdIsEven); //false
// myLog(eachElementInThirdIsOdd); //false

/** 31 ЗАДАЧА. ЧИ ВСІ КОРИСТУВАЧІ АКТИВНІ
Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи 
всі користувачі зараз активні (властивість isActive) і повертала true або false.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час
// виклику функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const isEveryUserActive = (users) => users.every((user) => user.isActive);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(isEveryUserActive(users)); //false

// ============================================================================

/** 32 МЕТОД SOME()
Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест 
колбек-функції. Повертає true або false.

масив.some((element, index, array) => {
  // Callback function body
});

Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає true, якщо хоча б один елемент масиву задовольняє умову.
Повертає false, якщо жоден елемент масиву не задовольняє умову.
Перебирання масиву припиняється, якщо колбек повертає true.

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// ----------------------------------------------------------------------------
Використовуючи метод some(), доповни код таким чином, щоб:

У змінній anyElementInFirstIsEven був результат перевірки наявності парних 
елементів в масиві firstArray.
У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних 
елементів в масиві firstArray.
У змінній anyElementInSecondIsEven був результат перевірки наявності парних 
елементів в масиві secondArray.
У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних 
елементів в масиві secondArray.
У змінній anyElementInThirdIsEven був результат перевірки наявності парних 
елементів в масиві thirdArray.
У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних 
елементів в масиві thirdArray.
*/

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 !== 0);

// // ----------------------------------------------------------------------------
// myLog(anyElementInFirstIsEven); //true
// myLog(anyElementInFirstIsOdd); //false
// myLog(anyElementInSecondIsEven); //false
// myLog(anyElementInSecondIsOdd); //true
// myLog(anyElementInThirdIsEven); //true
// myLog(anyElementInThirdIsOdd); //true

// ============================================================================

/** 33 ЗАДАЧА. ЧИ Є АКТИВНІ КОРИСТУВАЧІ
Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність 
активних користувачів (властивість isActive) і повертала true або false.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const isAnyUserActive = (users) => users.some((user) => user.isActive);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(isAnyUserActive(users)); //true

// ============================================================================

/** 34 МЕТОД REDUCE()
Метод reduce(callback, initialValue) використовується для послідовної обробки 
кожного елемента масиву із збереженням проміжного результату, як акумулятор. 
Трохи складніший за інші методи для засвоєння, але результат вартий того.

массив.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);

Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає все, що завгодно.
Робить все, що завгодно.

Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний 
результат. Значення, яке поверне колбек-функція на поточній ітерації, буде 
значенням цього параметра на наступній ітерації.

Другим аргументом для reduce() можна передати необов'язкове початкове значення 
акумулятора - параметр initialValue.

# Спочатку метод reduce() створює внутрішню змінну-акумулятор і
# присвоює їй значення параметра initialValue або першого елемента
# масиву, що перебирається, якщо initialValue не задане.
previousValue = 0

# Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
# параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

# Після завершення перебирання всього масиву, метод reduce() повертає значення 
акумулятора.
Результат - 32
Тобто метод reduce() використовується, коли необхідно взяти «багато» і 
привести до «одного». У повсякденних завданнях його застосування зводиться 
до роботи з числами.

// ----------------------------------------------------------------------------
Ігровому сервісу необхідний функціонал підрахунку середнього часу, 
проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime 
вийшло загальний ігровий час з масиву playtimes.
*/

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((a, b) => a + b, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// // ----------------------------------------------------------------------------
// myLog(totalPlayTime); //2692

// ============================================================================

/** 35 МЕТОД REDUCE() І МАСИВ ОБ'ЄКТІВ
Під час роботи з масивом об'єктів виконується редукування за значенням певної 
властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно 
отримати середній бал.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

// ----------------------------------------------------------------------------
Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для 
кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для 
кожного з гравців можна, розділивши його час (властивість playtime) на 
кількість ігор (властивість gamesPlayed).
*/

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (averageTime, nextPlayer) =>
//     averageTime + nextPlayer.playtime / nextPlayer.gamesPlayed,
//   0
// );

// // ----------------------------------------------------------------------------
// myLog(totalAveragePlaytimePerGame); //1023

// ============================================================================

/** 36 ЗАДАЧА. ЗАГАЛЬНИЙ БАЛАНС КОРИСТУВАЧІВ
Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і 
повертала суму всіх коштів (властивість balance), які зберігають користувачі 
з масиву users.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const calculateTotalBalance = (users) =>
//   users.reduce((acc, user) => acc + user.balance, 0);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(calculateTotalBalance(users)); //20916

// ============================================================================

/** 37 ЗАДАЧА. ЗАГАЛЬНА КІЛЬКІСТЬ ДРУЗІВ
Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і 
повертала загальну кількість друзів (властивість friends) усіх користувачів з 
масиву users.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const getTotalFriendCount = (users) =>
//   users.reduce((acc, user) => acc + user.friends.length, 0);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(getTotalFriendCount(users)); //14

// ============================================================================

/** 38МЕТОД SORT()
Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, 
він сортує вихідний масив.

Сортує і змінює вихідний масив.
Повертає змінений масив, тобто посилання на відсортований вихідний.
За замовчуванням сортує за зростанням.
Сортування відбувається шляхом приведення значень до рядка і порівняння 
порядкових номерів у таблиці Unicode.
Такий масив чисел буде відсортований за зростанням.

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

Але, оскільки за замовчуванням значення приводяться до рядка, стандартне 
сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як 
задавати свій порядок сортування.

const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

Масив рядків сортується за алфавітом.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
students.sort();
console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

Водночас порядковий номер великих літер менший, ніж у малих.

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ["A", "B", "C", "a", "b", "c"]

Через те, що сортується вихідний масив, порушується принцип чистоти функцій і 
не можна зручно створити декілька похідних колекцій на основі вихідної. 
Наприклад, створити колекцію, відсортовану за зростанням, а іншу - 
за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і 
сортують вже її.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ----------------------------------------------------------------------------
Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву 
releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - 
копія масиву імен авторів authors, відсортована за алфавітом.
*/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// // ----------------------------------------------------------------------------
// myLog(ascendingReleaseDates);
// //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// myLog(alphabeticalAuthors);
// //['Bernard Cornwell','Fyodor Dostoevsky','Robert Sheckley','Tanith Lee']

// ============================================================================

/** 39 СВІЙ ПОРЯДОК СОРТУВАННЯ ЧИСЕЛ
Для зазначення свого порядку сортування методу sort(compareFunction) потрібно 
передати колбек-функцію з двома параметрами. Це функція порівняння 
(compare function), порядок сортування залежить від її результату. 
Метод sort() буде викликати її для двох довільних елементів.

масив.sort((a, b) => {
  // Callback function body
});
a - перший елемент для порівняння.
b - другий елемент для порівняння.

Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, 
тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення 
більше нуля, тобто b більше a, сортування поставить b перед a. 
Це сортування за спаданням.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b 
незмінними по відношенню один до одного, але відсортує їх по відношенню 
до всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх 
взаємний порядок не має значення.

// ----------------------------------------------------------------------------
Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою 
видання, за її зростанням або спаданням. 
Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія 
масиву releaseDates, відсортована за зростанням, а у змінній 
descendingReleaseDates - копія, відсортована за спаданням.
*/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// // ----------------------------------------------------------------------------
// myLog(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// myLog(descendingReleaseDates); //[2016, 2012, 2008, 1997, 1984, 1973, 1967]

// ============================================================================

/** 40 СВІЙ ПОРЯДОК СОРТУВАННЯ РЯДКІВ
Для сортування рядків в алфавітному порядку, за зростанням або спаданням, 
використовується метод рядків localeCompare().

firstString.localeCompare(secondString)

Він викликається на рядку, який потрібно порівняти (firstString) з тим, 
що був переданий йому як аргумент (secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0
Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
Повертає додатне значення більше нуля, якщо firstString повинен бути 
після secondString.
Якщо рядки однакові, повертається нуль.

Це зручно використовувати для сортування рядків, оскільки метод sort() 
очікує такі самі значення від колбек-функції.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); 
// [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); 
// [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// ----------------------------------------------------------------------------
Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, 
в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, 
щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, 
відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, 
відсортована у зворотному алфавітному порядку.
*/

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// // ----------------------------------------------------------------------------
// myLog(authorsInAlphabetOrder);
// //["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft",
// // "Robert Sheckley", "Tanith Lee"]
// myLog(authorsInReversedOrder);
// //["Tanith Lee", "Robert Sheckley", "Howard Lovecraft",
// // "Fyodor Dostoevsky", "Bernard Cornwell"]

// ============================================================================

/** 41 СОРТУВАННЯ ОБ'ЄКТІВ
Під час роботи з масивом об'єктів, сортування виконується за числовим або 
рядковим значенням певної властивості. Наприклад, у нас є група студентів 
з балами за тест. Необхідно відсортувати масив об'єктів за зростанням і 
спаданням кількості балів, і за ім'ям студента.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

// ----------------------------------------------------------------------------
Доповни код таким чином, щоб:

У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям 
автора в алфавітному порядку.
У змінній sortedByReversedAuthorName вийшов масив книг, відсортований 
за ім'ям автора у зворотному алфавітному порядку.
У змінній sortedByAscendingRating вийшов масив книг, відсортований 
за зростанням рейтингу.
У змінній sortedByDescentingRating вийшов масив книг, відсортований 
за спаданням рейтингу.
*/

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// ----------------------------------------------------------------------------
// myLog(sortedByAuthorName);
// myLog(sortedByReversedAuthorName);
// myLog(sortedByAscendingRating);
// myLog(sortedByDescentingRating);

// ============================================================================

/** 42 ЗАДАЧА. СОРТУВАННЯ ЗА БАЛАНСОМ
Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала 
масив користувачів, відсортований за зростанням їх балансу (властивість balance).
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const sortByAscendingBalance = (users) =>
//   [...users].sort((a, b) => a.balance - b.balance);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(sortByAscendingBalance(users));

// ============================================================================

/** 43 ЗАДАЧА. СОРТУВАННЯ ЗА КІЛЬКІСТЮ ДРУЗІВ
Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона 
повертала масив користувачів, відсортований за спаданням кількості їхніх 
друзів (властивість friends).
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);
// // Change code above this line

// // // ----------------------------------------------------------------------------
// myLog(sortByDescendingFriendCount(users));

// ============================================================================

/** 44 ЗАДАЧА. СОРТУВАННЯ ЗА ІМ'ЯМ
Доповни функцію sortByName(users) таким чином, щоб вона повертала масив 
користувачів, відсортований за їх ім'ям (властивість name) 
в алфавітному порядку.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(sortByName(users));

// ============================================================================

/** 45 ЛАНЦЮЖКИ МЕТОДІВ (ЧЕЙНІНГ, CHAINING)
У нас є масив об'єктів з іменами, балами і відвідуваними предметами 
кожного студента.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];
Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. 
З цією метою ми відсортуємо копію масиву методом sort(), після чого методом 
map() створимо масив значень властивості name з відсортованого масиву.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, 
крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна тільки для 
зберігання проміжного результату.

Позбутися таких «мертвих» змінних можна за допомогою групування викликів 
методів у ланцюжки. Кожний наступний метод буде виконуватися на основі 
результату роботи попереднього.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

Робимо копію вихідного масиву перед сортуванням.
На копії викликаємо метод sort().
До результату роботи методу sort() застосовуємо метод map().
Змінній names присвоюється результат роботи методу map().
Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); 
// ["biology", "science", "literature", "mathematics", "physics"]

На вихідному масиві викликаємо flatMap() і робимо розгладжений 
масив усіх курсів.
До результату методу flatMap() застосовуємо метод filter() для 
фільтрації унікальних елементів.
На результаті методу filter() викликаємо sort().
Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 
2-3 операцій. По-перше, перебираючі методи використовуються для порівняно 
простих операцій над колекцією. По-друге, виклик кожного наступного 
методу - це додаткове перебирання масиву, що за великої кількості, 
може позначитися на продуктивності.

// ----------------------------------------------------------------------------
Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в 
алфавітному порядку, рейтинг книг яких більший за значення 
змінної MIN_BOOK_RATING.
*/

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// // ----------------------------------------------------------------------------
// myLog(names);

// ============================================================================

/** 46 ЗАДАЧА. КОРИСТУВАЧІ І ДРУЗІ
Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона 
повертала масив імен користувачів, відсортований за зростанням кількості їхніх 
друзів (властивість friends).
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// // Change code above this line

// // ----------------------------------------------------------------------------
// myLog(getNamesSortedByFriendCount(users));
// //["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony",
// // "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

// ============================================================================

/** 47 ЗАДАЧА. ІМЕНА ДРУЗІВ
Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив 
унікальних імен друзів (властивість friends), відсортований за алфавітом.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// // Change code above this line
// // // ----------------------------------------------------------------------------
// myLog(getSortedFriends(users));
//["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong",
// "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman",
// "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison",
// "Sharron Pace", "Solomon Fokes"]

// ============================================================================

/** 48 ЗАДАЧА. ІМЕНА ДРУЗІВ
Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив 
унікальних імен друзів (властивість friends), відсортований за алфавітом.
*/

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику
// функції із завдання.

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

// // Change code below this line
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// // Change code above this line
// // // ----------------------------------------------------------------------------
// myLog(getSortedFriends(users));
//["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong",
// "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman",
// "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison",
// "Sharron Pace", "Solomon Fokes"]
