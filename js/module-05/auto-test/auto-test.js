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
//     // this.value = str.concat(this.value);
//     this.value = str + this.value;
//   }

//   padEnd(str) {
//     // this.value = this.value.concat(str);
//     this.value += str;
//   }

//   padBoth(str) {
//     // this.value = str.concat(this.value, str);
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// Change code above this line
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
Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій 
послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого 
там не змінюй.
 */

// class StringBuilder {
//   // Change code below this line

//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
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

/** AUTOTEST 15
Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії 
з властивостями. Геттер і сетер імітують звичайну публічну властивість 
класу, але дозволяють змінювати інші властивості зручнішим способом. 
Геттер виконується при спробі отримати значення властивості, а сетер - 
при спробі його змінити.

Гетери та сетери доречно використовувати для простих операцій читання і 
зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. 
Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

Ми оголосили гетер і сетер email, поставивши перед ім'ям властивості 
ключові слова get і set. Всередині цих методів ми або повертаємо значення 
приватної властивості #email, або змінюємо її значення. Геттер і сетер 
застосовуються в парі та повинні називатися однаково.

const mango = new User({ name: "Mango", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com

Звертаючись до mango.email, викликається гетер get email() {...} і 
виконується його код. При спробі запису mango.email = "mango@supermail.com" 
викликається сетер set email(newEmail) {...} і рядок "mango@supermail.com" 
буде значенням параметра newEmail.

Перевага в тому, що це методи, а значить, під час запису можна виконати 
додатковий код, наприклад, з будь-якими перевірками, на відміну від 
виконання цієї ж операції безпосередньо з властивістю.

set email(newEmail) {
  if(newEmail === "") {
    console.error("Помилка! Пошта не може бути порожнім рядком!");
    return;
  }

  this.#email = newEmail;
}

// ----------------------------------------------------------------------------
Виконай рефакторинг класу Car. Зроби властивості model і price приватними, 
а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже 
оголошені методи на гетери та сетери brand, model і price, для взаємодії з 
приватними властивостями.
 */

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// // ----------------------------------------------------------------------------

// const myCar = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(myCar);
// console.log(myCar.brand);
// //повертає значення приватної властивості brand
// myCar.brand = 'Honda';
// console.log(myCar.brand);
// // змінює значення приватної властивості brand на "Honda"

// ============================================================================

/** AUTOTEST 16
Крім публічних і приватних властивостей майбутнього екземпляра, в класі 
можна оголосити його власні властивості, доступні тільки класові, 
але не його екземплярам - статичні властивості (static). Вони корисні 
для зберігання інформації, що стосується класу.

Додамо класу користувача приватну властивість role - його роль, що 
визначає набір прав, наприклад, адміністратор, редактор, звичайний 
користувач тощо. Можливі ролі користувачів будемо зберігати як статичну 
властивість Roles - об'єкт з властивостями.

Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості 
додається ключове слово static.

class User {
  // Оголошення та ініціалізація статичної властивості
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"

Статичні властивості також можуть бути приватними, тобто доступними тільки 
всередині класу. Для цього ім'я властивості повинно починатися з символу #, 
так само, як приватні властивості. Звернення до приватної статичної 
властивості за межами тіла класу викличе помилку.

// ----------------------------------------------------------------------------
Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE 
зі значенням 50000 - максимально допустима ціна автомобіля.

Додай сетеру price перевірку значення параметра newPrice, що передається. 
Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або 
дорівнює, то перезаписує ціну автомобіля.
 */

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ============================================================================

/** AUTOTEST 17
В класі можна оголосити не тільки методи майбутнього екземпляра, а також 
методи, доступні тільки класу - статичні методи, які можуть бути як публічні, 
так і приватні. Синтаксис оголошення аналогічний статичним властивостям, 
за винятком того, що значенням буде метод.

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));

Особливість статичних методів полягає у тому, що під час їх виклику ключове 
слово this посилається на сам клас. Це означає, що статичний метод може 
отримати доступ до статичних властивостей класу, але не до властивостей 
екземпляра. Логічно, тому що статичні методи викликає сам клас, 
а не його екземпляри.

// ----------------------------------------------------------------------------
Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну 
автомобіля. Метод повинен порівняти значення параметра price і приватної 
статичного властивості MAX_PRICE.

Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок 
"Error! Price exceeds the maximum".
В іншому випадку метод повинен повернути рядок 
"Success! Price is within acceptable limits".

Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, 
щоб показати, як буде використовуватися метод checkPrice(price).
 */

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   static checkPrice(price) {
//     return price > this.#MAX_PRICE
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log('audi ', audi);

// console.log(Car.checkPrice(audi.price));
// // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price));
// // "Error! Price exceeds the maximum"

// ============================================================================

/** AUTOTEST 18
Ключове слово extends дозволяє реалізувати наслідування класів, коли один 
клас (дочірній, похідний) наслідує властивості та методи іншого 
класу (батьківського).

class Child extends Parent {
  // ...
}
У виразі class Child extends Parent дочірній клас Child наслідує 
(розширює) від батьківського класу Parent. Це означає, що ми можемо 
оголосити базовий клас, який зберігає загальні характеристики і методи 
для групи похідних класів, які наслідують властивості і методи 
батьківського, але також додають свої унікальні.

Наприклад, у застосунку є користувачі з різними ролями — адміністратор, 
копірайтер, контент менеджер тощо. У кожного типу користувача є набір 
загальних характеристик, наприклад, пошта і пароль, але також є й унікальні.

Створивши незалежні класи для кожного типу користувача, ми отримаємо 
дублювання загальних властивостей і методів, і, якщо необхідно 
змінити, наприклад, назву властивості, доведеться проходити по усіх класах, 
а це незручно і вимагає багато часу.

Замість цього, можна створити загальний клас User, який буде зберігати 
набір загальних властивостей і методів, після чого, створити класи для 
кожного типу користувача, які наслідують цей набір від класу User. За 
потреби змінити щось спільне, достатньо буде змінити тільки код класу User.

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentEditor extends User {
  // Тіло класу ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"

Клас ContentEditor наслідує від класу User його конструктор, гетер і 
сетер email, а також однойменну публічну властивість. Важливо пам'ятати, 
що приватні властивості і методи батьківського класу не наслідуються 
дочірнім класом.

// ----------------------------------------------------------------------------
У застосунку потрібен адміністратор з можливістю додавати пошти користувачів 
у чорний список.

Оголоси клас Admin, який наслідує від класу User
Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), 
значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
 */

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }
// // Change code below this line

// // ----------------------------------------------------------------------------
// console.log(Admin.AccessLevel.BASIC); //"basic"
// console.log(Admin.AccessLevel.SUPERUSER); //"superuser"
// ============================================================================

/** AUTOTEST 19
Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну 
функцію super(аргументи) - це псевдонім конструктора батьківського класу. 
В іншому випадку, при спробі звернутися до this в конструкторі дочірнього 
класу, виникне помилка. Під час виклику конструктора батьківського класу 
передаємо необхідні йому аргументи для ініціалізації властивостей.

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Виклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'

// ----------------------------------------------------------------------------
Додай класу Admin метод constructor, який приймає один параметр - об'єкт 
налаштувань з двома властивостями email і accessLevel. Додай класу Admin 
публічну властивість accessLevel, значення якої буде передаватися під час 
виклику конструктора.

Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію 
екземпляра під оголошенням класу.
 */

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ============================================================================

/** AUTOTEST 20
В дочірньому класі можна оголошувати методи, які будуть доступні тільки 
його екземплярам.

// Уявімо, що вище є оголошення класу User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']

// ----------------------------------------------------------------------------
Додай класу Admin наступні властивості і методи.

  Публічну властивість blacklistedEmails для зберігання чорного списку 
поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
  Публічний метод blacklist(email) для додавання пошти у чорний список. 
Метод повинен додавати значення параметра email в масив, що зберігається 
у властивості blacklistedEmails.
  Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. 
Метод повинен перевіряти наявність значення параметра email в масиві, 
що зберігається у властивості blacklistedEmails, і повертати true або false.

Після оголошення класу ми додали ініціалізацію екземпляра і виклики 
методів у тій послідовності, в якій твій код перевірятимуть тести. 
Будь ласка, нічого там не змінюй.
 */

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
