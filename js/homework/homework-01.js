/** Замовлення турів
 Пишемо реєстрацію користувача за допомогою prompt. Окремо логін та пароль.
 Логінізація: запитуємо логін та пароль, порівнюємо їх => Try again, Login success.
 Запитуємо максимальну суму, яку ви готові витратити на тур.
 Виводимо список всіх країн в alert. які доступні для користувача по їого сумі.
 Вказуємо країну через prompt і купляємо тур.
 Виводимо повідомлення, що тур оплачено і залишок на рахунку користувача.
*/

const countries = [
  'Ukraine',
  'Poland',
  'Croatia',
  'Montenegro',
  'France',
  'USA',
];
const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName = '';
let userPass = '';
let userCredits = '';
let userCountries = [];
let maxPrice = 0;
let isUserSined = false;
// let isUserActive = true;
const strUserCanceled = 'has been canceled by user.';
const strUserInfo = 'User name must contain\n at least one symbol';

// ===== REGISTRATION =====================================

while (!isUserSined) {
  userName = prompt('Enter your\n user name');
  if (userName === null) {
    console.log(`Registration ${strUserCanceled}`);
    alert(`Registration ${strUserCanceled}`);
    break;
  }
  if (userName === '') {
    console.log(strUserInfo);
    alert(strUserInfo);
    continue;
  }

  userPass = prompt('Enter your password');
  if (userPass === null) {
    console.log(`Registration ${strUserCanceled}`);
    alert(`Registration ${strUserCanceled}`);
    break;
  }
  if (userPass === '') {
    console.log(strUserInfo);
    alert(strUserInfo);
    continue;
  }
  isUserSined = true;
}

// isUserSined = false;
// while (isUserActive && !isUserSined) {
//   isUserSined = true;
// }

console.log(`Your user name: ${userName}`);
console.log(`Your password: ${userPass}`);

// ---------------------------------------------------------

function checkUserName(userName) {}
