/** 
Після того як об'єкт створений, значення його властивостей можна змінити. 
Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», 
і присвоїти нове значення.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]

// ----------------------------------------------------------------
Доповни код, оновивши значення властивостей об'єкта apartment:

ціну у властивості price на 5000;
рейтинг квартири у властивості rating на 4.7;
ім'я власника у вкладеній властивості name на "Henry Sibola";
масив тегів у властивості tags, додавши в кінець рядок "trusted".
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

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

// -------------------------------------------------------
console.log(apartment.price);
console.log(apartment.rating);
console.log(apartment.owner.name);
console.log(apartment.tags);
