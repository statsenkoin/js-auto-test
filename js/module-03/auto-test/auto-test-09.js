/**
Бувають ситуації, коли під час оголошення об'єкта необхідно додати 
властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно 
зберігається як значення змінної або як результат виконання функції.

Раніше для цього необхідно було спочатку створити об'єкт, а потім 
додавати властивості через квадратні дужки, що не зовсім зручно.

const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Генрі Сибола";
console.log(user.name); // "Генрі Сибола"

Синтаксис обчислюваних властивостей (computed properties) допомагає 
уникнути зайвого коду і, в деяких випадках, спростити його. 
Значенням обчислюваної властивості може бути будь-який валідний вираз.

const propName = "name";
const user = {
  age: 25,
  // Ім'я цієї властивості буде взято зі значення змінної propName
  [propName]: "Генрі Сибола",
};

console.log(user.name); // "Генрі Сибола"

// ------------------------------------------------------------

Доповни код оголошення об'єкта credentials таким чином, щоб в результаті 
у нього були дві властивості: email і password, імена яких зберігаються 
у змінних emailInputName і passwordInputName.

Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", 
а значенням властивості password - рядок "jqueryismyjam".
 */

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
  // Change code above this line
};

// -----------------------------------------------
console.log(credentials);
