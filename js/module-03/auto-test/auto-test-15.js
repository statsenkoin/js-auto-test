/**
МЕТОД OBJECT.VALUES()
Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, 
то метод Object.values(obj) повертає масив значень його власних властивостей. 
Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне 
порожній масив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

Масив значень властивостей також можна перебрати циклом for...of, 
наприклад для отримання загальної суми числових значень.

Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, 
а у змінну values - масив всіх значень його властивостей. 
Використовуй методи Object.keys() і Object.values().
 */

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// -------------------------------------------------
console.log(apartment);
console.log(keys);
console.log(values);
