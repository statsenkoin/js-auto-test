/** ДЕСТРУКТУРИЗАЦІЯ В ЦИКЛАХ
Під час перебирання масиву об'єктів циклом for...of відбуваються багаторазові 
звернення до властивостей об'єкта.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

Для того щоб скоротити кількість повторень, можна деструктуризувати властивості 
об'єкта у локальні змінні в тілі циклу.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

Якщо об'єкт містить небагато властивостей, деструктуризація можна виконати 
безпосередньо в місці оголошення змінної book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// -------------------------------------------------------------------------
Виконай рефакторинг циклу for...of таким чином, щоб в ньому 
використовувалася деструктуризація об'єкта.
*/

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// ----------------------------------------------------------------------
console.log(rgbColors);
console.log(hexColors);
