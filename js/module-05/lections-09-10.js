// ============================================================================
// ===== lesson 09 ============================================================
// ============================================================================

/**  Example 1 - Майстерня коштовностей
Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та 
розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та 
кількістю із властивості stones.
*/
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     // const chosenStone = this.stones.find((stone) => stone.name === stoneName);
//     // const totalPrice = chosenStone.price * chosenStone.quantity;
//     // return totalPrice;

//     const chosenStone = this.stones.find(({ name }) => name === stoneName);
//     return chosenStone ? chosenStone.price * chosenStone.quantity : 'Error!!!';
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ametist'));
// ----------------------------------------------------------------------------

/**  Example 3 - Калькулятор
Створіть об'єкт calculator із трьома методами:

read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
add() - повертає суму збережених значень.
mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     console.log('a', a);
//     console.log('b', b);
//     // this.a = a;
//     // this.b = b
//     this.a = a || 0; // 0, NaN, null, undefined, "", false
//     this.b = b ?? 0; // null undefined
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };
// calculator.read(7);
// console.log(calculator.add());
// console.log(calculator.mult());

// const calc = {
//   a: 24,
//   b: 100,
// };

// console.log(calculator.add.call(calc));
/** */
// ============================================================================
// ===== lesson 10 ============================================================
// ============================================================================

// let i = 0;

// function foo() {
//   i += 1;
//   if (i < 10) {
//     foo();
//   }
//   return i;
// }
// console.log(foo());
// ----------------------------------------------------------------------------

/** Example 1 - Блогер
Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

email - пошта, рядок
age - вік, число
numberOfPosts - кількість постів, число
topics - масив тем на яких спеціалізується блогер

Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} 
years old and has ${кількість постів} posts.

Додай метод updatePostCount(value), який у параметрі value приймає кількість 
постів, які потрібно додати користувачеві.
*/

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo());
// // User mango@mail.com is 24 years old and has 20 posts

// mango.updatePostCount(5);
// console.log(mango.getInfo());
// // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly.getInfo());
// // User poly@mail.com is 19 years old and has 17 posts

// poly.updatePostCount(12);
// console.log(poly.getInfo());
// // User poly@mail.com is 19 years old and has 21 posts

// ----------------------------------------------------------------------------

/**  Example 2 - Сховище
Напиши клас Storage який створює об'єкти для керування складом товарів. 
При виклику отримуватиме один аргумент - початковий масив товарів і 
записуватиме його властивість items.

Додай методи класу:
getItems() - повертає масив товарів.
addItem(item) - отримує новий товар і додає його до поточних.
removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
*/

// class Storage {
//   #productItems = [];
//   constructor(items) {
//     this.#productItems = items;
//   }
//   getItems() {
//     return this.#productItems;
//   }
//   addItem(item) {
//     //   this.#productItems.push(item);

//     if (!this.#productItems.includes(item)) this.#productItems.push(item);
//   }
//   removeItem(item) {
//     // const index = this.#productItems.indexOf(item);
//     // this.#productItems.splice(index, 1);

//     // if (this.#productItems.includes(item)) {
//     //   const index = this.#productItems.indexOf(item);
//     //   this.#productItems.splice(index, 1);
//     // }

//     const index = this.#productItems.indexOf(item);
//     if (!!~index) this.#productItems.splice(index, 1);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// storage.addItem('🍋');
// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// storage.removeItem('🍎');
// console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]

// ----------------------------------------------------------------------------

/** Example 3 - User
Напиши клас User який створює об'єкт із властивостями login та email. 
Оголоси приватні властивості #login та #email, доступ до яких зроби через 
гетер та сетер login та email.
*/

// class User {
//   #login = 'user';
//   #email = 'user@user.com';
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(userLogin) {
//     this.#login = userLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(userEmail) {
//     this.#login = userEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// console.log(poly.email); // Polycutie

/** Example 4 - Нотатки
Напиши клас Notes який керує колекцією нотаток у властивості items. 
Замітка це об'єкт із властивостями text та priority. 
Додай класу статичну властивість Priority, у якому зберігатиметься 
об'єкт із пріоритетами.
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(arr) {
//     this.items = arr;
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (!!~index) this.items.splice(index, 1);
//   }
//   updatePriority(text, newPriority) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (!!~index) this.items[index].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// // myNotes.removeNote('Моя перша замітка');
// // console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

/** Example 5 - Toggle
Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і 
оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням 
значення властивості on повинно бути false.
*/

class Toggle {
  constructor(on = { isOpen: false }) {
    this.on = on;
  }
  toggle() {
    this.on.isOpen = !this.on.isOpen;
  }
}

const zeroToggle = new Toggle();
console.log(zeroToggle);
const firstToggle = new Toggle({ isOpen: true });

console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
