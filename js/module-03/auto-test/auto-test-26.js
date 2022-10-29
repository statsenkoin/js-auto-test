/** ПАТЕРН «ОБ'ЄКТ НАЛАШТУВАНЬ»
Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатися, 
в якій послідовності і що передавати. В результаті виходить дуже неочевидний 
код у місці її виклику.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true);
Патерн «Об'єкт налаштувань» допомагає вирішити цю проблему, замінюючи набір 
параметрів всього одним - об'єктом з іменованими властивостями.

function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

Тоді під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
doStuffWithBook({
  title: "Останнє королівство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});

Ще один плюс в тому, що можна деструктуризувати об'єкт в параметрі book.

// Це можна зробити в тілі функції.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// Або в сигнатурі (підписі), різниці немає.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// -------------------------------------------------------------------
Функція calculateMeanTemperature(forecast) приймає один параметр forecast - 
об'єкт температур на два дні наступного формату.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh 
однією операцією деструктуризації властивостей об'єкта forecast.

*/

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;
// ------------------------------------------------

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // -------------------------------------

  // function calculateMeanTemperature({
  //   today: { low: todayLow, high: todayHigh },
  //   tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  // }) {
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// --------------------------------------------------
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);
console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
);
