/** ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ
З метою уникнення присвоєння undefined під час деструктуризації неіснуючих 
властивостей, можна задати змінним значення за замовчуванням, які будуть 
присвоєні тільки у разі, коли в об'єкті відсутня властивість з таким ім'ям.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"

// ---------------------------------------------------------------
У прогнозі максимальних температур також може бути необов'язкова 
властивість icon - іконка погоди. Заміни оголошення змінних 
yesterday, today, tomorrow і icon однією операцією деструктуризації 
властивостей об'єкта highTemperatures. Задай значення за замовчуванням 
для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// ----------------------------------------------------------------
console.log(highTemperatures, icon);
