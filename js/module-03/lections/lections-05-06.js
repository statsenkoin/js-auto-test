// var a = {},
//   b = { key: 'b' },
//   c = { key: 'c' };

// a[b] = 123;
// console.log(a);
// a[c] = 456;
// console.log(a);
// console.log(Object.keys(a));
// console.log(Object.values(a));

// console.log(a[b]); //456

// ===== LECTION 5 =======================================================

/** Example 1 - Основи об'єктів
Напиши скрипт, який для об'єкта user, послідовно:

додає поле mood зі значенням 'happy'
замінює значення hobby на 'skydiving'
замінює значення premium на false
виводить вміст об'єкта user у форматі ключ:значення використовуючи 
Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
// //   console.log(key, user[key]);
//   console.log(`${key}: ${user[key]}`);
// }

// // -----------------------------------------------------------------------
// console.log(user);

/** Example 2 - метод Object.values()
У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код 
для підсумовування всіх зарплат і збережіть результат у змінній sum. 
Повинно вийти 390. Якщо об'єкт salaries порожній, 
то результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// const salariesList = Object.values(salaries);
// for (const salary of salariesList) {
//   sum += salary;
// }

// const salaries1 = {};
// let sum1 = 0;
// const salariesList1 = Object.values(salaries1);
// for (const salary of salariesList1) {
//   sum1 += salary;
// }

// // -----------------------------------------------------------------------
// console.log(sum);
// console.log(sum1);

/** Example 3 - Масив об'єктів
Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив 
об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну 
вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
*/

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// // const calcTotalPrice = function (stones, stoneName) {
// //   for (const stone of stones) {
// //     if (stone.name === stoneName) {
// //       return stone.price * stone.quantity;
// //     }
// //   }
// // };

// const calcTotalPrice = (stones, stoneName) => {
//   for (const { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       return price * quantity;
//     }
//   }
// };

// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Щебінь'));

/** Example 4 - Комплексні завдання
Напиши скрипт управління особистим кабінетом інтернет банку. 
Є об'єкт account в якому необхідно реалізувати методи для роботи з 
балансом та історією транзакцій.
*/

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  transactionsID: 0,

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    this.transactionsID += 1;
    const id = this.transactionsID;
    this.transactions.push({ id, amount, type });
    console.log(this.transactions);
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return 0;
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('недостатньо коштів');
      return 0;
    }
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
    return 0;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalTransactionByType = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalTransactionByType += transaction.amount;
      }
    }
    return `Total ${type} transactions is ${totalTransactionByType} credits`;
  },
};

console.log(account.deposit(5000));
console.log(account.deposit(400));
console.log(account.withdraw(1400));
console.log(account.withdraw(14000));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

// -----------------------------------------------------------------------

// Розшифровка функції

// function findLongestWord(string) {
//   // 1. split розбиває рядок по пробілу на масив слів
//   // 2. в тілі колбека reduce порівнюємо поточний елемент масива з результатом поверненим на попередній ітерації
//   const wordsArr = string.split(' ');
//   const longest = wordsArr.reduce(function (prev, item) {
//     if (prev.length > item.length) {
//       return prev;
//     }
//     return item;
//   });

//   return longest;

//   // return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// }

// let res = findLongestWord('Hello my name is longest one');
// console.log(res);

// ===== LECTION 6 =======================================================

/** Example 1 - Деструктуризація
Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору 
незалежних аргументів.*/

// Було

// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// function calcBMI(object) {
//   const { weight, height } = object;
// or

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

// ---------------------------------------------------------------------------

/** Example 2 - Деструктуризація
Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість 
набору незалежних аргументів.
*/

// function printContactsInfo(printContactsInfo) {
//   const { names, phones } = printContactsInfo;
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ---------------------------------------------------------------------------

/** Example 3 - Глибока деструктуризація
Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору 
незалежних аргументів.
*/

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// const company = {
//   companyName: 'Cyberdyne Systems',
//   bots: {
//     repair: 150,
//     defence: 50,
//   },
// };

// console.log(getBotReport(company)); // "Cyberdyne Systems has 200 bots in stock"

// ----------- var 2 ----------------------------------------------------

// function getBotReport(object) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = object;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// const company = {
//   companyName: 'Cyberdyne Systems',
//   bots: {
//     repair: 150,
//     defence: 50,
//   },
// };

// console.log(getBotReport(company)); // "Cyberdyne Systems has 200 bots in stock"

/** Example 4 - Деструктуризація
Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями 
companyName та stock та виводила репорт про кількість товарів 
на складі будь-якої компанії.
*/

// // Рішення
// function getStockReport({ companyName, stock }) {
//   // your code here

//   //   const stockList = Object.values(stock);
//   let totalInStock = 0;
//   for (const stockItem of Object.values(stock)) {
//     totalInStock += stockItem;
//   }
//   return `${companyName} has ${totalInStock} bots in stock`;
// }

// // Перевірка
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/** Example 5 - Операція spread
Напиши функцію createContact(contact) так, щоб вона повертала новий об'єкт 
контакту з доданими властивостями id та createdAt, а також list зі 
значенням "default" якщо в partialContact немає такої властивості.
*/

// // Рішення
// function createContact({ ...obj }) {
//   // your code here
//   //     const newContact = {
//   //       list: 'default',
//   //     ...obj,
//   //     id: generateId(),
//   //     createdAt: Date.now(),
//   //   };
//   //   return newContact;

//   return {
//     list: 'default',
//     ...obj,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString().substring(2, 9);
// }

/** Example 6 - Операція rest
Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із 
властивістю fullName, замість firstName та lastName.
*/

// Рішення
// function transformUsername({ firstName, lastName, ...obj }) {
//   // your code
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...obj,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
