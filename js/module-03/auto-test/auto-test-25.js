/** ГЛИБОКА ДЕСТРУКТУРИЗАЦІЯ
Для деструктуризації властивостей вкладених об'єктів використовуються 
ті самі принципи, що й в трьох попередніх вправах.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// ----------------------------------------------------------
Ми отримали прогноз погоди на два дні, з мінімальними і максимальними 
температурами, а також необов'язковими іконками. Заміни оголошення всіх 
змінних однією операцією деструктуризації властивостей об'єкта forecast. 
Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - 
рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

*/

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

const {
  today: { low: lowToday, high: highToday, icon: todayIcon },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

// --------------------------------------------
console.log(highToday);
console.log(lowToday);
console.log(todayIcon);
console.log(highTomorrow);
console.log(lowTomorrow);
console.log(tomorrowIcon);
