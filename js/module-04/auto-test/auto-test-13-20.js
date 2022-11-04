const myLog = (data) => console.log(data);

/** 13 ЧИСТІ ФУНКЦІЇ
Функція з побічними ефектами - це функція, яка в процесі виконання може 
змінювати або використовувати глобальні змінні, змінювати значення 
аргументів посилального типу, виконувати операції введення-виведення тощо.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]

Функція dirtyMultiply(array, value) множить кожен елемент масиву array на 
число value. Вона змінює (мутує) вихідний масив за посиланням.

Чиста функція (pure function) - це функція, результат якої залежить тільки 
від значень переданих аргументів. За умови однакових аргументів вона завжди 
повертає один і той самий результат, і не має побічних ефектів, тобто не 
змінює значення аргументів.

Напишемо реалізацію чистої функції множення елементів масиву, що повертає 
новий масив, не змінюючи вихідний.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// ------------------------------------------------------------------------
Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює 
кожен елемент, значення якого - це парне число, додаючи до нього значення 
параметра value.

Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала 
масив чисел numbers, а створювала, наповнювала і повертала новий масив з 
оновленими значеннями.
*/

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   return numbers;
//   // Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach((number) => {
//     number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
//   });

//   return newArray;
//   // Change code above this line
// }

// const changeEven = (numbers, value) => {
//   const newArray = [];

//   numbers.forEach((number) => {
//     // number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
//     if (number % 2 === 0) number += value;
//     newArray.push(number);
//   });

//   return newArray;
// };

// // ------------------------------------------------------------------------
// myLog(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
// myLog(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
// myLog(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]
// myLog(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

// ========================================================================

/** 14 МЕТОД MAP()
Більшість перебираючих методів масиву - це чисті функції. Вони створюють 
новий масив, заповнюють його, застосовуючи до значення кожного елемента 
зазначену колбек-функцію, після чого повертають цей новий масив.

Метод map(callback) використовується для трансформації масиву. Він викликає 
колбек-функцію для кожного елемента вихідного масиву, а результат її роботи 
записує у новий масив, який і буде результатом виконання методу.

масив.map((element, index, array) => {
  // Тіло колбек-функції
});
Поелементо перебирає оригінальний масив.
Не змінює оригінальний масив.
Результат роботи колбек-функції записується у новий масив.
Повертає новий масив однакової довжини.

Його можна використовувати для того, щоб змінити кожен елемент масиву. 
Оригінальний масив використовується як еталон, на основі якого можна 
зробити іншу колекцію.

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

Використання анонімних стрілочних функцій з неявним поверненням суттєво 
скорочує «шум» оголошення колбек-функції, що робить код чистішим і 
простішим для сприйняття. 

// ------------------------------------------------------------------------
Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин 
назв планет. Обов'язково використовуй метод map().
*/

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// // const planetsLengths = planets;
// const planetsLengths = planets.map((planet) => planet.length);

// // ------------------------------------------------------------------------
// myLog(planetsLengths); //[5, 4, 5, 7]

// ========================================================================

/** 15 МЕТОД MAP() І МАСИВ ОБ'ЄКТІВ
Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. 
Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив 
студентів, а потрібно отримати окремий масив їхніх імен.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в 
колбек-функції повернути значення властивості кожного з них.

//-------------------------------------------------------------------------
Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив 
назв книг (властивість title) з усіх об'єктів масиву books.
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

// // const titles = books;
// const titles = books.map(({ title }) => title);

// // -----------------------------------------------------------------------
// myLog(titles);

// ========================================================================

/** 16 МЕТОД FLATMAP()
Метод flatMap(callback) - аналогічний методу map(), але застосовується у 
випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

масив.flatMap((element, index, array) => {
  // Тіло колбек-функції
});

У масиві students зберігається список студентів зі списком предметів, які 
відвідує студент, у властивості courses. Кілька студентів можуть відвідувати 
один і той самий предмет. Необхідно скласти список всіх предметів, які 
відвідує ця група студентів, поки що, навіть повторюваних.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат 
її роботи записує у новий масив. Відмінність від map() у тому, що новий 
масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). 
Цей розгладжений масив і є результатом роботи flatMap().

// -------------------------------------------------------------------------
Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив 
усіх жанрів книг (властивість genres) з масиву книг books.
*/

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// // const genres = books;
// const genres = books.flatMap(({ genres }) => genres);

// // -------------------------------------------------------------------------
// myLog(genres);

// ========================================================================

/** 17 ЗАДАЧА. ІМЕНА КОРИСТУВАЧІВ
 Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив 
 імен користувачів (властивість name) з масиву об'єктів в параметрі users.
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
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // var 1
// // // Change code below this line
// // const getUserNames = (users) => {
// //   const userNames = users.map((user) => user.name);
// //   return userNames;
// // };
// // // Change code above this line

// // var 2
// // const getUserNames = (users) => {
// //   return users.map(({ name }) => name);
// // };

// // var 3
// const getUserNames = (users) => users.map(({ name }) => name);

// // ------------------------------------------------------------------------
// myLog(getUserNames(users));
// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head",
//  "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// ========================================================================

/** 18 ЗАДАЧА. ПОШТИ КОРИСТУВАЧІВ
Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив 
поштових адрес користувачів (властивість email) з масиву об'єктів 
в параметрі users.
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
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // // Change code below this line
// // const getUserEmails = (users) => {
// //   return users.map((user) => user.email);
// // };
// // Change code above this line

// const getUserEmails = (users) => users.map((user) => user.email);

// // -------------------------------------------------------------------------
// myLog(getUserEmails(users));
// ["moorehensley@indexia.com", "sharlenebush@tubesys.com",
//  "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com",
//  "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

// ========================================================================

/** 13 */

// ========================================================================

/** 13 */

// ========================================================================

/** 13 */

// ========================================================================

/** 13 */

// ========================================================================
