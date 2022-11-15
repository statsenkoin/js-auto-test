// var a = {},
//   b = { key: 'b' },
//   c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// ============================================================================
// ===== Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach ============
// ============================================================================

/** Example 1 - Коллбек функції
Напишіть наступні функції:

createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. 
Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у 
властивість id та викликає коллбек передаючи йому створений об'єкт.

logProduct(product) - колббек приймаючий об'єкт продукту 
і логуючий його в консоль

logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює 
загальну вартість товару в консоль
*/

// your code here
// const product = [];
// let id = 0;

// const createProduct = (obj, callback) => {
//   const { name, price, quantity } = obj;
//   // id += 1;
//   const id = Math.floor(Math.random() * 1000);
//   const newProduct = { id, name, price, quantity };
//   // product.push(newProduct);
//   callback(newProduct);
// };

// const createProduct = (obj, callback) => {
//   const id = Math.floor(Math.random() * 1000);
//   const product = { id, ...obj };
//   return callback(product);
// };

// const logProduct = (product) => {
//   console.log(product);
// };

// // const logTotalPrice = (product) => {
// //   console.log(`Total costs: ${product.price * product.quantity}`);
// // };
// const logTotalPrice = ({ price, quantity }) => {
//   console.log(`Total costs: ${price * quantity}`);
// };

// // ----------------------------------------------------------------------------
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// console.log(product);

// ============================================================================

/** Example 2 - Коллбек функції
Додайте об'єкт account методи withdraw(amount, onSuccess, onError) 
та deposit(amount, onSuccess, onError), де перший параметр це сума операції, 
а другий та третій - коллбеки.

Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT 
або this.balance, і onSuccess в іншому випадку.

Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT 
або менше або дорівнює нулю, і onSuccess в іншому випадку.
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     return amount > TRANSACTION_LIMIT || amount > this.balance
//       ? onError()
//       : onSuccess(amount);
//   },
//   deposit(amount, onSuccess, onError) {
//     return amount > TRANSACTION_LIMIT || amount <= 0
//       ? onError()
//       : onSuccess(amount);
//   },
// };

// const handleSuccess = (amount) => {
//   account.balance += amount;
//   return console.log('Succes');
// };
// const handleError = () => console.log('Error');

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// console.log(account.balance);

/** Example 3 - Коллбек функції
Напишіть функцію each(array, callback), яка першим параметром очікує 
масив, а другим - функцію, яка застосовується до кожного елемента масиву. 
Функція each повинна повернути новий масив, елементами якого будуть 
результати виклику коллбека.
*/

// const employees = [
//   {
//     name: 'Artur',
//     bonus: 64.5,
//   },
//   {
//     name: 'Ivan',
//     bonus: 49.2,
//   },
//   {
//     name: 'Makar',
//     bonus: 36,
//   },
//   {
//     name: 'Anastasiya',
//     bonus: 25,
//   },
//   {
//     name: 'Olha',
//     bonus: 165.13,
//   },
// ];

// // const newArr = [...employees].sort((a, b) => a.bonus - b.bonus);
// // console.log(newArr);
// let newArr = [];

// const each = (array, callback) => {
//   newArr = callback(array);
//   return newArr;
// };

// const bonusList = (array) => {
//   return [...array].sort((a, b) => a.bonus - b.bonus);
// };

// // ----------------------------------------------------------------------------
// each(employees, bonusList);
// console.log('employees', employees);
// console.log('newArr', newArr);

/** Example 4 - Стрілочні функції
Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const createProduct = (partialProduct, callback) =>
//   callback({ id: Date.now(), ...partialProduct });

// // function logProduct(product) {
// //   console.log(product);
// // }
// const logProduct = (product) => console.log(product);

// // function logTotalPrice(product) {
// //   console.log(product.price * product.quantity);
// // }
// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/** Example 7 - Метод forEach
Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
*/

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
const logItems = (items) => {
  console.log(items);
  items.forEach((item) => {
    console.log(`${items.indexOf(item) + 1} - ${item}`);
  });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
