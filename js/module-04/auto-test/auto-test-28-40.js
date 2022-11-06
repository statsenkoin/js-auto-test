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
