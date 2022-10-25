/** Другий спосіб отримати доступ до властивості об'єкта - це синтаксис 
об'єкт["ключ_властивості"]. Схоже на звернення до елемента масиву 
з відмінністю в тому, що в дужках зазначається не індекс елемента, 
а ім'я властивості як рядок.

Синтаксис «квадратних дужок» використовується значно рідше. 
Як правило у випадках, коли ім'я властивості заздалегідь невідоме 
або воно зберігається у змінній (як значення параметра функції, наприклад).

На місце звернення буде повернуто значення властивості з таким ім'ям.
Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення 
повернеться undefined.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book["genres"];
console.log(bookGenres); // ["historical prose", "adventure"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // "Bernard Cornwell"

// -------------------------------------------------------------
Доповни код, присвоївши оголошеним змінним вирази звернення 
до відповідних властивостей об'єкта apartment, використовуючи 
синтаксис «квадратних дужок».

aptRating - рейтинг;
aptDescr - опис;
aptPrice - ціна;
aptTags - теги.
*/

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

// -------------------------------------------------------------------
console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);
