/** ЗМІНА ІМЕНІ ЗМІННОЇ
Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується 
значення властивості. Спочатку пишемо ім'я властивості, з якої хочемо 
отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної, 
в яку необхідно помістити значення цієї властивості.

const firstBook = {
  title: "Останнє королівство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Останнє королівство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images
                                /I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480

Такий запис читається як «Створити змінну firstTitle, в яку помістити 
значення властивості title з об'єкта firstBook» тощо.

// ------------------------------------------------------------------
Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon 
однією операцією деструктуризації властивостей об'єкта highTemperatures. 
Задай значення за замовчуванням для highIcon - рядок 
"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ----------------------------------------------------------------------
console.log(highYesterday);
console.log(highToday);
console.log(highTomorrow);
console.log(highIcon);
