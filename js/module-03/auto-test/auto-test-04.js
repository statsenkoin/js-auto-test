/** const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
Для доступу до вкладених властивостей використовується ланцюжок звернень 
«через крапку». Наприклад, якщо необхідно отримати значення країни 
користувача, записуємо user.location.country, де user.location - 
це звернення (шлях) до об'єкта у властивості location, 
а user.locaton.country - звернення до властивості country в цьому об'єкті. 
Тобто, «крапка» вказує наступну вкладеність.

const location = user.location;
console.log(location); // Об'єкт location

const country = user.location.country;
console.log(country); // "Jamaica"

Якщо значення властивості - це масив, то у нашому прикладі 
user.hobbies - звернення до цього масиву. Далі можна отримати доступ 
до його елементів через квадратні дужки та індекс або використовувати 
властивості і методи.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3 

--------------------------------------------------------------
Доповни код, присвоївши оголошеним змінним вирази звернення 
до відповідних властивостей об'єкта apartment.

ownerName - ім'я власника;
ownerPhone - телефон власника;
ownerEmail - пошта власника;
numberOfTags - кількість елементів масиву у властивості tags;
firstTag - перший елемент масиву у властивості tags;
lastTag - останній елемент масиву у властивості tags.
*/

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.slice(-1)[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line

// ---------------------------------------------------------
console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);
