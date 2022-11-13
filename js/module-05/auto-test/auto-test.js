/** AUTOTEST 01
Всередині функцій можна використовувати зарезервоване ключове слово this. 
Під час виконання функції, в this записується посилання на об'єкт, в 
контексті якого вона була викликана. Таким чином, в тілі функції ми 
можемо отримати доступ до властивостей і методів цього об'єкта.

const bookShelf = {
  authors: ["Bernard Cornwell", "Robert Sheckley"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); 
// ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor("Tanith Lee");
console.log(bookShelf.getAuthors()); 
// ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

Методи getAuthors і addAuthor - це функції (методи об'єкта), які 
викликаються в контексті об'єкта bookShelf. Під час їх виконання в 
this записується посилання на об'єкт bookShelf і ми можемо звернутися до 
його властивостей і методів.

// ----------------------------------------------------------------------------
Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this 
в місцях звернення до властивостей і методів об'єкта.
*/

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// ============================================================================

/** AUTOTEST 02
Перед звільненням розробник зламав вихідний код управління акаунтами 
користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта 
customer, розставивши відсутні this під час звернення до властивостей об'єкта.

Після оголошення об'єкта ми додали виклики методів у тій послідовності, 
в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
 */

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ============================================================================

/** AUTOTEST 03
Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. 
Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта 
historyService, щоб методи почали працювати правильно.
 */

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };

// ============================================================================

/** AUTOTEST 04
Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався 
автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. 
Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], 
яка в консолі браузера відображається як __proto__.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його 
з об'єктом obj. Об'єкт, на який вказує посилання в __proto__, називається 
прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. 
Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog 
і чи повертає true або false.

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Mango'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4

Звернення dog.name працює очевидним чином - повертає власну властивість name 
об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs 
в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з 
dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

Тобто прототип - це резервне сховище властивостей і методів об'єкта, що 
автоматично використовується під час їх пошуку. Об'єкт, який виступає 
прототипом, може також мати свій прототип, наступний - свій, і так далі.

Пошук властивості виконується до першого збігу. Інтерпретатор шукає 
властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до 
властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, 
а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка 
і не знайде властивості з таким ім'ям, то поверне undefined.

// ----------------------------------------------------------------------------
Зміни код таким чином, щоб об'єкт parent став прототипом 
для об'єкта у змінній сhild.
 */

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// ============================================================================

/** AUTOTEST 05
Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor 
був прототипом для parent, а той, своєю чергою, був прототипом для child.
 */

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// Change code above this line

// ============================================================================

/** AUTOTEST 06
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто 
потрібно створити багато однотипних об'єктів з однаковим набором властивостей, 
але різними значеннями і методами для взаємодії з ними. Все це потрібно 
робити динамічно, під час виконання програми. З цією метою використовують 
класи - спеціальний синтаксис оголошення функції для створення об'єктів.

Оголошення класу починається з ключового слова class, після якого стоїть 
ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої 
літери, а у назві відображати тип об'єкта (іменник), що створюється.

class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

Результат виклику new User() - це об'єкт, який називається екземпляром класу, 
тому що містить дані і поведінку, що описуються класом.

// ----------------------------------------------------------------------------
Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.
 */

// class Car {};

// ============================================================================

/** AUTOTEST 07
Для ініціалізації екземпляра в класі є метод constructor. Якщо він 
неоголошений, створюється конструктор за замовчуванням - порожня функція, 
яка не змінює екземпляр.

class User {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

Виклик класу з оператором new призводить до створення нового об'єкта і 
виклику конструктора в контексті цього об'єкта. Тобто this всередині 
конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати 
кожному об'єкту властивості з однаковими іменами, але різними значеннями.

Властивості name та email називаються публічними властивостями, тому що 
вони будуть власними властивостями об'єкта-екземпляра і до них можна буде 
отримати доступ, звернувшись через крапку.

// ----------------------------------------------------------------------------
Додай класу Car метод constructor, який приймає три параметри:

brand - марка автомобіля.
model - модель автомобіля.
price - ціна автомобіля.

Клас Car повинен створювати об'єкт з однойменними властивостями 
brand, model і price, значеннями яких повинні бути передані аргументи 
під час його виклику з оператором new.
 */

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// ============================================================================

/** AUTOTEST 08
Клас може приймати велику кількість вхідних даних для властивостей майбутнього 
об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, застосовують 
патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як 
параметр один об'єкт з логічно іменованими властивостями. Значення 
властивостей такого об'єкта замінять набір аргументів.

class User {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }

const poly = new User({
  name: "Poly",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// ----------------------------------------------------------------------------
Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - 
об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в 
сигнатурі (підписі) конструктора.
 */

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// ============================================================================

/** AUTOTEST 09
Для роботи з властивостями майбутнього екземпляра використовуються методи 
класу. Методи - це просто функції, але з однією відмінністю - вони 
доступні екземпляру класу.

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// ----------------------------------------------------------------------------
Додай класу Car два методи.

getPrice() - повертає значення властивості price з об'єкта, 
який буде його викликати.
changePrice(newPrice) - оновлює значення властивості price в об'єкта, 
який буде його викликати на newPrice.
 */

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }

// ============================================================================

/** AUTOTEST 10
Напиши клас Storage, який буде створювати об'єкти для управління складом 
товарів. Клас очікує тільки один аргумент - початковий масив товарів, 
який записується у властивість items об'єкта, що створюється.

Оголоси наступні методи класу:

getItems() - повертає масив поточних товарів у властивості items об'єкта, 
який викликає цей метод.
addItem(newItem) - приймає новий товар newItem і додає його в масив товарів 
у властивості items об'єкта, який викликає цей метод.
removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його 
з масиву товарів у властивості items об'єкта, який викликає цей метод.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій 
послідовності, в якій твій код перевірятимуть тести. Будь ласка, 
нічого там не змінюй.
 */

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   // removeItem(itemToRemove) {
//   //   const index = this.items.findIndex((item) => item === itemToRemove);
//   //   this.items.splice(index, 1);
//   // }

//   removeItem(itemToRemove) {
//     this.items.splice(
//       this.items.findIndex((item) => item === itemToRemove),
//       1
//     );
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ============================================================================

/** AUTOTEST 11
Напиши клас StringBuilder, який приймає один параметр initialValue - довільний 
рядок, який записується у властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() - повертає поточне значення властивості value.
padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення 
  властивості value об'єкта, який викликає цей метод.
padStart(str) - отримує параметр str (рядок) і додає його на початок значення 
  властивості value об'єкта, який викликає цей метод.
padBoth(str) - отримує параметр str (рядок) і додає його на початок і в 
  кінець значення властивості value об'єкта, який викликає цей метод.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій 
послідовності, в якій твій код перевірятимуть тести. Будь ласка, 
нічого там не змінюй.
 */

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str.concat(this.value);
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value.concat(str);
//     return this.value;
//   }

//   padBoth(str) {
//     this.value = str.concat(this.value, str);
//     return this.value;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// ============================================================================

/** AUTOTEST 12
Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. 
Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - 
набору публічних властивостей і методів класу. Решта методів і властивостей 
(не публічних) повинні бути недоступні.

В класах інкапсуляція реалізується приватними властивостями, доступ до яких 
можна отримати тільки всередині класу.

Припустимо, що пошта користувача повинна бути недоступною для прямої зміни 
зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо 
її приватною. Оголошення приватної властивості до ініціалізації в 
конструкторі - обов'язкове.

class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Виникне помилка, це приватна властивість

Методи класу також можуть бути приватними, тобто доступні тільки у 
тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

// ----------------------------------------------------------------------------
Виконай рефакторинг класу Car таким чином, щоб властивість brand була 
приватною, і додай два методи для публічного інтерфейсу, для читання і 
зміни цієї властивості.

getBrand() - повертає значення приватної властивості brand.
changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
 */

// class Car {
//   // Change code below this line
//   model;
//   price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// ----------------------------------------------------------------------------
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// // { model: "Q3", price: 36000 }
// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));
// // { model: "X5", price: 58900 }
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
// // { model: "Murano", price: 31700 }

// const myCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(myCar.getBrand());
// //повертає значення приватної властивості brand
// myCar.changeBrand('Honda');
// console.log(myCar.getBrand());
// // змінює значення приватної властивості brand на "Honda"

// ============================================================================

/** AUTOTEST 13
Виконай рефакторинг класу Storage, зробивши властивість items приватною.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій 
послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого 
там не змінюй.
 */

// class Storage {
//   // Change code below this line

//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// ----------------------------------------------------------------------------
// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems());
// // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems());
// // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems());
// // ["Нанитоиды", "Антигравитатор", "Droid"]

// ============================================================================

/** AUTOTEST 14
 */

// ============================================================================

/** AUTOTEST 15
 */

// ============================================================================

/** AUTOTEST 16
 */

// ============================================================================

/** AUTOTEST 17
 */

// ============================================================================

/** AUTOTEST 18
 */

// ============================================================================

/** AUTOTEST 19
 */

// ============================================================================

/** AUTOTEST 20
 */
