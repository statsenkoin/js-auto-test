// ============================================================================
// ===== Модуль 4. Заняття 8. Перебираючі методи масиву =======================
// ============================================================================

/** Колекція об'єктів для всіх прикладів з автомобілями*/

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/** Example 1 - Метод map
Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
*/

// const getModels = (cars) => {
//   const models = [];
//   cars.forEach((car) => models.push(car.model));
//   return models;
// };
// const getModels = (cars) => cars.map((car) => car.model);

// console.table(getModels(cars));

/** Example 2 - Метод map
Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним 
значенням властивості price залежно від переданої знижки.
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   const newCars = [...cars];
//   // return newCars.map((car) => car.price - car.price * discount);
//   //   return newCars.map(({ price }) => price - price * discount);

//   newCars.map((car) => (car.price -= car.price * discount));
//   return newCars;
// };
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     return {
//       ...car,
//       price: car.price - car.price * discount,
//     };
//   });

// // console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

/** Example 3 - Метод filter
Нехай функція filterByPrice повертає масив автомобілів ціна яких менша 
ніж значення параметра threshold.
*/

// const filterByPrice = (cars, threshold) =>
//   //   cars.filter((car) => car.price < threshold);
//   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/** Example 4 - Метод filter
Нехай функція getCarsWithDiscount повертає масив автомобілів властивість 
onSale яких true.
*/

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

/** Example 5 - Метод filter
Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається 
зі значенням параметра type.
*/

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// // const getCarsWithType = (cars, type) =>
// //   cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

/** Example 6 - Метод find*/

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// const getCarByModel = (cars, model) =>
//   cars.find(({ model: carModel }) => carModel === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/** Example 7 - Метод sort
Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований 
за зростанням значення якості amount.
*/

// const sortByDescendingPrice = (cars) => {
//   return [...cars].sort((a, b) => a.amount - b.amount);
// };
// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByDescendingPrice(cars));

/** Example 8 - Метод sort
Нехай функція sortByDescendingPrice повертає новий масив автомобілів 
відсортований за зменшенням значення властивості price.
*/

// const sortByDescendingPrice = (cars) => {
//   return cars.sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));

/** Example 9 - Метод sort
Нехай функція sortByModel повертає новий масив автомобілів відсортований 
за назвою моделі в алфавітному та зворотному алфавітному порядку, 
в залежності від значення параметра order.
*/

// const sortByModel = (cars, order) => {
//   let carsInOrder = [];
//   switch (order) {
//     case 'asc':
//       carsInOrder = cars.sort((a, b) => a.model.localeCompare(b.model));
//       break;
//     case 'desc':
//       carsInOrder = cars.sort((a, b) => b.model.localeCompare(a.model));
//       break;
//   }
//   return carsInOrder;
// };
// const sortByModel = (cars, order) => {
//   if (order === 'asc')
//     return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   if (order === 'desc')
//     return [...cars].sort((a, b) => b.model.localeCompare(a.model));
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

/** Example 10 - Метод reduce
Нехай функція getTotalAmount повертає загальну кількість автомобілів 
(значення властивостей amount).
*/

// const getTotalAmount = (cars) =>
//   cars.reduce((total, { amount }) => total + amount, 0);

// const getTotalAmount = (cars) =>
//   cars.reduce((total, car) => total + car.amount, 0);

// console.log(getTotalAmount(cars));

/** Example 11 - Ланцюжки методів
Нехай функція getAvailableCarNames повертає масив моделей автомобілів, 
але тільки тих, які зараз на розпродажі.
*/

// const getModelsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).map((car) => car.model);

// console.table(getModelsOnSale(cars));
