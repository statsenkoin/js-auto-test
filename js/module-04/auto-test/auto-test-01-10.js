/** ФУНКЦІЯ ЯК ЗНАЧЕННЯ
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

/** КОЛБЕК-ФУНКЦІЇ
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

/** ІНЛАЙН-КОЛБЕКИ
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

// ----------------------------------------------------------------------

/** ДЕКІЛЬКА КОЛБЕКІВ
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

/** */
