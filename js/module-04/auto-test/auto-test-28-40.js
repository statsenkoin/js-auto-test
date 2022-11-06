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
