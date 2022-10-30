/** ДОСТУП ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА В ЙОГО МЕТОДАХ
Методи використовуються для роботи з властивостями об'єкта, їх зміни. 
Для доступу до об'єкта в методі використовується не ім'я змінної, 
наприклад bookShelf, а ключове слово this - контекст. 
Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей 
метод, у нашому випадку - це посилання на об'єкт bookShelf.

const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    console.log(this);
  },
};

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf.getBooks(); // {books: ["Останнє королівство"], getBooks: f}

Для того щоб отримати доступ до властивостей об'єкта в методах, 
ми звертаємось до нього через this і далі, стандартно - «через крапку» 
до властивостей.

const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["Останнє королівство"]
bookShelf.addBook("Імла");
bookShelf.addBook("Страж снів");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
bookShelf.removeBook("Імла");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

Логічно замислитися - чому б не використовувати ім'я об'єкта у зверненні 
до властивостей, адже ми явно не збираємося його змінювати. Справа в тому, 
що ім'я об'єкта - річ ненадійна, методи одного об'єкта можна копіювати 
в інший (з іншим ім'ям), а в майбутньому дізнаємось, що часто під час 
створення об'єкта, ми наперед зовсім не знаємо імені. Використання this 
гарантує, що метод працює саме з тим об'єктом, який його викликав.

// ---------------------------------------------------------------------
Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював 
назву книги з oldName на newName у властивості books. Використовуй indexOf() 
для того, щоб знайти потрібний елемент масиву, і splice() для того, 
щоб замінити цей елемент.
*/

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    // console.log(bookIndex);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
    // Change code above this line
  },
};

// ----------------------------------------------------------------
console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
//["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
console.log(bookShelf.updateBook('The last kingdom', 'Dune'));
//["Dune", "Haze", "The guardian of dreams"]
