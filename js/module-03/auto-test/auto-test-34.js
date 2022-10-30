/** МЕТОДИ ОБ'ЄКТА
Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, 
наприклад, інформація про книгу тощо. Об'єкти-сховища, зазвичай, знаходяться 
в масиві таких самих об'єктів, який є колекцією однотипних елементів.

Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими 
даними - методи. Якщо значення властивості - це функція, така властивість 
називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності
const bookShelf = {
  books: ["Останнє королівство", "Страж снів"],
  // Це метод об'єкта
  getBooks() {
    console.log("Цей метод буде повертати всі книги - властивість books");
  },
  // Це метод об'єкта
  addBook(bookName) {
    console.log("Цей метод буде додавати нову книгу у властивість books");
  },
};

// Виклики методів
bookShelf.getBooks();
bookShelf.addBook("Нова книга");

Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для 
роботи з цими даними. Наприклад, можна було оголосити змінну books і 
дві функції getBooks() і addBook(bookName), але тоді це були б три 
незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// ❌ Слабкопозв'язані, незалежні сутності
const books = [];
function getBooks() {}
function addBook() {}

// ------------------------------------------------------------------
Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто 
рядки за аналогією з getBooks() і addBook(bookName).

Метод removeBook(bookName) буде видаляти книгу за назвою. 
Повертає рядок "Deleting book <назва книги>", де <назва книги> - 
це значення параметра bookName.

Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. 
Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> 
і <нова назва> - це значення параметрів oldName і newName відповідно.
*/

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldBookName, newBookName) {
    return `Updating book ${oldBookName} to ${newBookName}`;
  },
  // Change code above this line
};

// ---------------------------------------------------------------
console.log(bookShelf.getBooks()); //"Returning all books"
console.log(bookShelf.addBook('Haze')); //"Adding book Haze"
console.log(bookShelf.removeBook('Red sunset')); //"Deleting book Red sunset"
console.log(bookShelf.updateBook('Sands of dune', 'Dune')); //"Updating book Sands of dune to Dune"
