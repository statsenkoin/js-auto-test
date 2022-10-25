/**
Іноді, під час створення об'єкта, значення властивості необхідно взяти 
зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться 
дублювати ім'я властивості та ім'я змінної, в якій зберігається 
необхідне значення.

const name = "Генрі Сибола";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Генрі Сибола"
console.log(user.age); // 25

Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, 
дозволяючи використовувати ім'я змінної як ім'я властивості, 
а її значення як значення властивості.

const name = "Генрі Сибола";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Генрі Сибола"
console.log(user.age); // 25

Тобто, під час оголошення об'єкта достатньо вказати тільки ім'я властивості, 
а значення буде взято зі змінної з аналогічним ім'ям.

// -------------------------------------------------------

Доповни код оголошення об'єкта таким чином, щоб у нього були властивості 
name, price, image і tags зі значеннями зі змінних з аналогічними іменами. 
Обов'язково використовуй синтаксис коротких властивостей.
 */

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line

  name,
  price,
  image,
  tags,

  // Change code above this line
};

// ------------------------------------------------
console.log(product);
