/**
На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність, 
тобто його не можна перебрати циклами for або for...of. 
Для перебирання об'єктів використовується спеціальний цикл for...in, 
який перебирає ключі об'єкта object.

for (key in object) {
  // інструкції
}

Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде 
записано значення ключа (ім'я) властивості. Для того щоб отримати 
значення властивості з таким ключем (ім'ям), використовується 
синтаксис квадратних дужок.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// ---------------------------------------------
Перебери об'єкт apartment, використовуючи цикл for...in, і запиши 
в масив keys всі його ключі, а в масив values всі значення його властивостей.
 */

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

// -------------------------------------------------
console.log(keys);
console.log(values);
