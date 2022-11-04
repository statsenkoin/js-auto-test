/** 1 ФУНКЦІЯ ЯК ЗНАЧЕННЯ
Функції не відрізняються від чисел, рядків або масивів - це просто 
спеціальний тип даних (об'єкт вищого порядку), значення, яке можна 
зберігати у змінній або передавати у якості аргументу в іншу функцію.

function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet
// і виводимо результат у консоль
console.log(greet("Mango"));
// Ласкаво просимо Манго.

// Виводимо функцію greet
// у консоль, не викликаючи її
console.log(greet);
// ---------------------------
// ƒ greet() {
//      return `Ласкаво просимо ${name}.`;
// }
// 
У першому лозі ми викликаємо функцію greet за допомогою круглих дужок,
і в консоль виводиться результат її виконання.У другому лозі передається 
посилання на функцію, а не результат її виклику(відсутні круглі дужки),
тому в консоль виводиться її тіло.Це означає, що функцію можна присвоїти 
у змінну або передати як аругмент іншої функції. 

// ------------------------------------------------------------------------
Доповни код таким чином, щоб у змінній result був результат виконання 
функції makePizza, а у змінній pointer було посилання на функцію makePizza.
*/

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// // -----------------------------------------------------------------
// console.log(result);
// console.log(pointer);

// =========================================================================

/** 2 КОЛБЕК-ФУНКЦІЇ
Функція зворотного виклику (callback, колбек) - це функція, яка передається 
іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

Функція вищого порядку (higher order function) - функція, яка приймає у 
якості параметрів інші функції або повертає функцію у якості результату.

// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Mango", greet);
Ми передали посилання на функцію greet як аргумент, тому вона буде 
присвоєна в параметр callback і викликана всередині функції registerGuest 
за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, 
головне пам'ятати, що значенням буде функція.

// -----------------------------------------------------------------------
Доповни функцію makeMessage таким чином, щоб вона очікувала другим 
параметром (параметр callback) колбек-функцію і повертала її виклик. 
Функція deliverPizza або makePizza буде передаватися як колбек і очікувати 
аргументом ім'я готової піци, що доставляється.
*/

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// // ----------------------------------------------------------------
// console.log(makeMessage('Royal Grand', makePizza));
// // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza));
// // "Delivering Ultracheese pizza."

// =======================================================================

/** 3 ІНЛАЙН-КОЛБЕКИ
Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом, 
її можна оголосити безпосередньо на момент виклику функції, в яку 
передаємо колбек. Така функція буде доступна тільки у якості значення 
параметра і більше ніде в коді.

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

// -----------------------------------------------------------------------
Доповни другий виклик функції makePizza(pizzaName, callback), передавши 
другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує 
рядок "Eating pizza <назва піци>".
*/

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// =========================================================================

/** 4 ДЕКІЛЬКА КОЛБЕКІВ
Функція може приймати довільну кількість колбеків. Наприклад, уявімо, 
що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна 
увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати 
дзвінок в іншому випадку. Доступність абонента будемо імітувати 
генератором випадкового числа, щоб між різними викликами функції можна 
було отримати різні результати.

function processCall(recipient) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, очікуйте...`);
    // Логіка прийняття дзвінка
  }
}

processCall("Mango");
Проблема такого підходу полягає у тому, що функція processCall робить 
занадто багато і прив'язує перевірку доступності абонента до двох 
заздалегідь визначених дій. Що буде, якщо в майбутньому, замість 
автовідповідача, потрібно буде залишати голограму?

Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, 
і потім за результатом її виконання, робити перевірки і виконувати 
потрібний код. Але перевірки не стосуються зовнішнього коду і будуть 
його засмічувати.

Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки 
onAvailable і onNotAvailable, і викликала їх за умовою.

function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);

Колбеки застосовуються для обробки дій користувача на сторінці, 
на момент обробки запитів на сервер, виконання заздалегідь невідомих 
функцій тощо. У цьому і полягає їх суть - це функції, призначені для 
відкладеного виконання.

// ---------------------------------------------------------------------
Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг 
методу order таким чином, щоб він приймав другим і третім параметром 
два колбеки onSuccess і onError.

Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, 
метод order повинен повертати результат виклику колбека onError, 
передаючи йому аргументом рядок 
"There is no pizza with a name <имя пиццы> in the assortment."
Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, 
метод order повинен повертати результат виклику колбека onSuccess, 
передаючи йому аргументом назву замовленої піци.
Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. 
Будь ласка, нічого там не міняй.
*/

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// // ----------------------------------------------------------------------
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// =======================================================================

/** 5 МЕТОД FOREACH(CALLBACK)
Метод перебирання масиву, який використовується для заміни циклів for і 
for...of в роботі з колекцією.

массив.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});

Поелементо перебирає масив.
Викликає колбек-функцію для кожного елемента масиву.
Нічого не повертає.
Аргументи колбек-функції - це значення поточного елемента element, 
його індекс index і власне вихідний масив array. Можна оголошувати 
тільки необхідні параметри, найчастіше - це елемент, головне не забувати 
про їх порядок.

const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

Єдиним випадком, коли варто використовувати цикли for або for...of для 
перебирання масиву, - це задачі з перериванням виконання циклу. Перервати 
виконання методу forEach не можна, він завжди перебирає масив до кінця.

// --------------------------------------------------------------------------
Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - 
масив чисел, і розраховує загальну суму його елементів, яка зберігається у 
змінній totalPrice і повертається як результат роботи функції.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона 
використовувала метод forEach.
*/

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach((item) => (totalPrice += item));

//   // Change code above this line
//   return totalPrice;
// }

// // --------------------------------------------------------------------------
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// ============================================================================

/** 6 ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
Функція filterArray(numbers, value) приймає масив чисел numbers і повертає 
новий масив, в якому будуть тільки ті елементи оригінального масиву, які 
більші за значення параметра value.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона 
використовувала метод forEach.
*/

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// // -----------------------------------------------------------------------
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

// ============================================================================

/** 7ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ
Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної 
довжини в параметри firstArray і secondArray, і повертає новий масив їхніх 
спільних елементів, тобто тих, які присутні в обох масивах.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона 
використовувала метод forEach.
*/

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   // return commonElements;
//   // ------------------------------------

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// // ------------------------------------------------------------------------

// myLog(getCommonElements([1, 2, 3], [2, 4])); //[2]
// myLog(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// myLog(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// myLog(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// myLog(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

// ============================================================================

/** 8 СТРІЛОЧНІ ФУНКЦІЇ.
Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг 
коду, особливо коли функція маленька або якщо вона використовується як колбек.

Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, 
її необхідно присвоювати змінній.

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

Ключове слово function не використовується, замість цього відразу зазначається 
оголошення параметрів, після нього - символ => і тіло функції.

Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, 
між знаками рівності = і стрілкою =>.

const add = (a, b, c) => {
  return a + b + c;
};

Якщо параметр один, його можна оголошувати без круглих дужок.

const add = a => {
  return a + 5;
};

Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

const greet = () => {
  console.log("Привіт!");
};

// ----------------------------------------------------------------------------
Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була 
оголошена як стрілочна.
*/

// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// // Change code above this line
// // return quantity * pricePerItem;
// // }

// // ---------------------------------------------------------------------------
// myLog(calculateTotalPrice(5, 100)); //500
// myLog(calculateTotalPrice(8, 60)); //480
// myLog(calculateTotalPrice(3, 400)); //1200

// ============================================================================

/** 9 НЕЯВНЕ ПОВЕРНЕННЯ
У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: 
з фігурними дужками і без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно 
явно поставити return. Це називається явне повернення (explicit return). 
Такий синтаксис використовується у разі, якщо в тілі функції потрібно 
виконати ще якісь інструкції, крім повернення значення.

const add = (a, b, c) => a + b + c;

Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть 
після =>. Це називається неявне повернення (implicit return). У прикладі 
повернеться результат виразу додавання параметрів a, b і c.

Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з 
тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі 
функції не потрібно виконувати жодних додаткових інструкцій, крім 
повернення значення.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;

// --------------------------------------------------------------------------
Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона 
використовувала неявне повернення.
*/

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// // ---------------------------------------------------------------------------
// myLog(calculateTotalPrice(5, 100)); //500
// myLog(calculateTotalPrice(8, 60)); //480
// myLog(calculateTotalPrice(3, 400)); //1200

// ============================================================================

/** 10 СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ
Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих 
методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не 
потрібне тіло функції.

const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});

Стрілочну колбек-функцію також можна оголошувати окремо і передавати 
на неї посилання. Це варто робити, якщо одна функція використовується у 
декількох місцях програми або якщо вона громіздка.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);

// ---------------------------------------------------------------------------
Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши 
її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод 
forEach(), на стрілочну функцію.
*/

// Change code below this line
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line

// ============================================================================

function myLog(data) {
  console.log(data);
}
