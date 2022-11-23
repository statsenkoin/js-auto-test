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

// class Toggle {
//   constructor(on = { isOpen: false }) {
//     this.on = on;
//   }
//   toggle() {
//     this.on.isOpen = !this.on.isOpen;
//   }
// }

// const zeroToggle = new Toggle();
// console.log(zeroToggle);
// const firstToggle = new Toggle({ isOpen: true });

// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// ============================================================================
// ===== замикання closures ===================================================
// ============================================================================

// function foo(param) {
//   const value = 10;
//   const value2 = 15;

//   function boo(someValue) {
//     return value + value2 * someValue;
//   }

//   if (param > 20) {
//     return boo;
//   } else {
//     return value;
//   }
// }
// console.log(foo(10));
// console.log(foo(25)(11));
// const result = foo(25);
// console.log(result(11));

// ============================================================================
// ===== Tasks ================================================================
// ============================================================================

/** Task 1
1 Створити метод об'єкту який буде приймати 1 параметр назву факультету 
та повертати списoк імен учнів факультету
2 Створити метод об'єкту який буде приймати 1 параметр назву факультету 
та повертати кількість очків факультета
3 Створити метод об'єкту який буде виводити ім'я факультету 
в якого більше очків
*/

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],

//   getStudents(school) {
//     // const mySchool = this[school];
//     // console.log(mySchool);
//     // const names = mySchool.map((mate) => mate.name);
//     // console.log(names);

//     return this[school].map((mate) => mate.name);
//   },

//   getTotalPoints(school) {
//     // const mySchool = this[school];
//     // console.log(mySchool);
//     // const points = mySchool.reduce((acc, mate) => acc + mate.points, 0);
//     // console.log(points);

//     return this[school].reduce((acc, mate) => acc + mate.points, 0);
//   },

//   getWinner() {
//     // ----- varuant 1 якщо факультети відомі і не змінюються -----------------
//     // const griffindorPoint = this.griffindor.reduce(
//     //   (acc, mate) => acc + mate.points,
//     //   0
//     // );
//     // const sliserinPoint = this.sliserin.reduce(
//     //   (acc, mate) => acc + mate.points,
//     //   0
//     // );
//     // return griffindorPoint > sliserinPoint ? 'griffindor' : 'sliserin';

//     // ----- variant 2 якщо факультети можуть змінитись -----------------------
//     const schools = Object.keys(hogvarts).filter((key) =>
//       Array.isArray(this[key])
//     );
//     console.log(schools);

//     return schools.reduce(
//       (acc, school) => (this[school].points > acc ? school : acc),
//       schools[0]
//     );
//   },
// };

// console.log('getStudents in griffindor: ', hogvarts.getStudents('griffindor'));
// console.log('getStudents in sliserin: ', hogvarts.getStudents('sliserin'));

// console.log(
//   'getTotalPoints in griffindor: ',
//   hogvarts.getTotalPoints('griffindor')
// );
// console.log(
//   'getTotalPoints in sliserin: ',
//   hogvarts.getTotalPoints('sliserin')
// );

// console.log('getWinner: ', hogvarts.getWinner());

/** Task 2
Створити функцію яка буде приймати 2 параметра.
1 Масив студентів.
2 Мову програмування яку потрібно знайти.
Функція повертає масив імен користувачів які вивчають цю мову.
*/

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     language: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// function studentsByLanguage(students, language) {
//   return students
//     .filter((student) => student.language === language)
//     .map((student) => student.name); //[]
// }

// console.log(studentsByLanguage(students, 'html'));
// console.log(studentsByLanguage(students, 'css'));
// console.log(studentsByLanguage(students, 'js'));

/** task 3
Порахувати скільки ззаробив кожен  юзер
(функція приймає 2 параметри
1 параметр масив
2 параметр імя робітника
Функція повертає скільки він заробив (salary*month) )

Порахувати загальну суму заробітку всіх робітників()
функція приймає 1 параметр масив, 
повертає загальну суму заробітку всіх робітників);
*/

// const workers = [
//   {
//     name: 'Alex',
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: 'Dima',
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: 'Oleg',
//     salary: 1500,
//     month: 36,
//   },
// ];

// const workerSalary = function (workersArr, workerName) {
//   const worker = workersArr.find(({ name }) => name === workerName);
//   return worker.salary * worker.month;
// };

// function totalSalary(workersArr) {
//   // return workersArr.reduce(
//   //   (acc, worker) => (acc += worker.salary * worker.month),
//   //   0
//   // );
//   return workersArr.reduce(
//     (acc, { salary, month }) => (acc += salary * month),
//     0
//   );
// }

// console.log(workerSalary(workers, 'Alex'));
// console.log(workerSalary(workers, 'Dima'));
// console.log(workerSalary(workers, 'Oleg'));
// console.log(totalSalary(workers));

/** Task 4
1 Створити функцію яка буде приймати 2 параметри
   1 параметр масив
   2 параметр назва книги
Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") 
\\\ "Anna, Oleksii"

2 Порахувати вік всіх юзерів у яких є ключ age.
*/

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// function getUserByBook(users, book) {
//   return users
//     .filter((user) => user.books.includes(book))
//     .map((user) => user.name)
//     .join(', ');
// }
// function getUsersAge(users) {
//   let totalAge = 0;
//   users.forEach((user) => {
//     if (Object.keys(user).includes('age')) totalAge += user.age;
//   });
//   return totalAge;
// }

// console.log(getUserByBook(friends, 'Harry Potter'));
// console.log(getUserByBook(friends, 'Romeo and Juliet'));
// console.log(getUsersAge(friends));

/** Task 5
Потрібно створити 4 методи об'єкту
1 виводить суму на карті (назву вводимо в prompt())
2 додає нову карту (назву вводимо в prompt())
3 зняти з карти (назву вводимо в prompt() та суму в prompt())
4 додати на карту (назву вводимо в prompt() та суму в prompt())
*/

// const bankSystem = {
//   privat: 1000,
//   mono: 1500,
//   checkCard() {
//     const name = prompt('Enter bank name to check your credit card:');
//     if (Object.keys(this).includes(name)) {
//       alert(`You have $${this[name]} on your ${name}bank credit card`);
//     } else {
//       alert('Thereis no such bank account\nTry again...');
//       this.checkCard();
//     }
//   },
//   addcard() {
//     const name = prompt('Enter bank name to add your credit card:');
//     if (Object.keys(this).includes(name)) {
//       alert('This bank account is already exist');
//     } else {
//       this[name] = 0;
//       alert(`Your credit card added successfully`);
//     }
//   },
//   deposit() {
//     const name = prompt('Enter bank name to put money onto your credit card:');
//     if (Object.keys(this).includes(name)) {
//       const amount = prompt(
//         'Enter amount of money to put onto your credit card:'
//       );
//       this[name] = Number(this[name]) + Number(amount);
//       alert(`Your account updated successfull\nTotal amount is $${this[name]}`);
//     } else {
//       alert('Thereis no such bank account\nTry again...');
//       // this.deposit();
//     }
//   },
//   withdrow() {
//     const name = prompt('Enter bank name to get money from your credit card:');
//     if (Object.keys(this).includes(name)) {
//       const amount = prompt(
//         'Enter amount of money to get from your credit card:'
//       );
//       if (amount > this[name]) {
//         alert('Not enougth money...');
//       } else {
//         this[name] = Number(this[name]) - Number(amount);
//         alert(`Operation successfull\nTotal amount is $${this[name]}`);
//       }
//     }
//   },
// };

// bankSystem.checkCard();
// bankSystem.addcard();
// console.log(bankSystem);
// bankSystem.checkCard();

// bankSystem.deposit();
// bankSystem.withdrow();

/** Task 6
Створити функцію яка буде шукати нарциса. Головна умова - нарциса знають всі, 
нарцис не знає нікого.
*/

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Alex'],
//   },
// ]; //Not found

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ]; // Not found

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ]; // Jhon

// function findNarciss(peopleList) {
//   let narcissName = '';
//   const narcissList = [];

//   // список (масив) імен можливих нарцисів - ті, хто нікого не знає
//   peopleList
//     .filter((person) => person.know.length === 0)
//     .forEach((person) => {
//       narcissList.push(person.name);
//     });
//   console.log('Possible narcisses: ', narcissList);

//   // нарцисс може бути тільки один
//   if (narcissList.length !== 1) {
//     narcissName = 'not found';
//     return narcissName;
//   }

//   // список (масив об'єктів) не нарцисів - ті, хто хоч когось знає
//   const personsList = peopleList.filter((person) => person.know.length !== 0);
//   // console.log('Not narcisses: ', personsList);

//   // нарциса мають знати всі
//   narcissName = narcissList[0];
//   personsList.forEach((person) => {
//     if (!person.know.includes(narcissName)) narcissName = 'not found';
//   });

//   return narcissName;
// }

// console.log('Narciss is', findNarciss(people1));
// console.log('Narciss is', findNarciss(people2));
// console.log('Narciss is', findNarciss(people3));

/** Task 7
Створити функцію яка приймає 1 параметр масив продуктів 
і повертає мутований масив
Потрібно перебрати масив і якщо він має об'єкти в яких дублюються 
айді то квонтіті цих елементів потрібно сплюсувати, а ті обє'кти 
в яких айді співпав видалити з масиву.
(Потрібно мутувати масив, створювати новий не потрібно)
*/

const products = [
  {
    id: 'sku1',
    qty: 1,
  },
  {
    id: 'sku2',
    qty: 2,
  },
  {
    id: 'sku3',
    qty: 3,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 8,
  },
  {
    id: 'sku2',
    qty: 19,
  },
  {
    id: 'sku4',
    qty: 1,
  },
];

function sortByID(productsList) {
  return productsList.reduce((acc, product) => {
    const index = acc.findIndex((el) => el.id === product.id);

    if (index === -1) {
      acc.push(product);
    } else {
      acc[index].qty += product.qty;
    }
    return acc;
  }, []);

  // return productsList.reduce((acc, product) => {
  //   const item = acc.find((el) => el.id === product.id);

  //   if (!item) {
  //     acc.push(product);
  //   } else {
  //     acc[acc.indexOf(item)].qty += product.qty;
  //   }

  //   // if (item) {
  //   //   acc[acc.indexOf(item)].qty += product.qty;
  //   // } else {
  //   //   acc.push(product);
  //   // }

  //   return acc;
  // }, []);

  // return productsList.reduce((acc, product) => {
  //   if (!acc.find((el) => el.id === product.id)) {
  //     acc.push(product);
  //   } else {
  //     acc[acc.indexOf(acc.find((el) => el.id === product.id))].qty +=
  //       product.qty;
  //   }
  //   return acc;
  // }, []);
}

console.log(sortByID(products));
