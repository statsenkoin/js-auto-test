/** Перший спосіб отримати доступ до властивості об'єкта - це синтаксис
 * об'єкт.ключ_властивості. Здебільшого використовується синтаксис
 * «через крапку» і підходить тоді, коли ми заздалегідь знаємо
 * ім'я (ключ) властивості, до якої хочемо отримати доступ.
 *
 * На місце звернення буде повернуте значення властивості з таким ім'ям.
 * Якщо в об'єкті відсутня властивість з таким ім'ям,
 * на місце звернення повернеться undefined.
 *
 * const book = {
 *   title: "The Last Kingdom",
 *   author: "Bernard Cornwell",
 *   genres: ["historical prose", "adventure"],
 *   public: true,
 *   rating: 8.38,
 * };
 *
 * const bookTitle = book.title;
 * console.log(bookTitle); // "The Last Kingdom"
 *
 * const bookGenres = book.genres;
 * console.log(bookGenres); // ["historical prose", "adventure"]
 *
 * const bookPrice = book.price;
 * console.log(bookPrice); // undefined
 *
 * -------------------------------------------------------------
 * Доповни код, присвоївши оголошеним змінним вирази звернення
 * до відповідних властивостей об'єкта apartment.
 *
 * aptRating - рейтинг;
 * aptDescr - опис;
 * aptPrice - ціна;
 * aptTags - теги.
 */

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

// -----------------------------------------------------------
console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);
