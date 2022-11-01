/** Замовлення турів
 Пишемо реєстрацію користувача за допомогою prompt. Окремо логін та пароль.
 Логінізація: запитуємо логін та пароль, порівнюємо їх => Try again, Login success.
 Запитуємо максимальну суму, яку ви готові витратити на тур.
 Виводимо список всіх країн в alert. які доступні для користувача по їого сумі.
 Вказуємо країну через prompt і купляємо тур.
 Виводимо повідомлення, що тур оплачено і залишок на рахунку користувача.
*/

// =========================================================================================
// =====     Version 1     =================================================================
// =========================================================================================

// const countries = [
//   'Ukraine',
//   'Poland',
//   'Croatia',
//   'Montenegro',
//   'France',
//   'USA',
// ];
// const countriesPrice = [100, 200, 300, 400, 500, 600];

// let userName = prompt('Enter your username');
// let userPass = prompt('Enter your userpass');

// console.log(`Your username is ${userName}`);
// console.log(`Your userpass is ${userPass}`);

// let isUserValid = false;
// while (!isUserValid) {
//   let newUserName = prompt('Enter your username to login');
//   if (newUserName !== userName) {
//     console.log('Try again');
//     continue;
//   }
//   let newUserPass = prompt('Enter your userpass to login');
//   if (newUserPass !== userPass) {
//     console.log('Try again');
//     continue;
//   }
//   isUserValid = true;
//   console.log('Login success');
// }

// let maxPrice = prompt('Enter max price');
// // console.log(maxPrice);
// let userCountries = [];
// for (const price of countriesPrice) {
//   if (maxPrice >= price) {
//     // console.log(countriesPrice.indexOf(price));
//     // console.log(countries[countriesPrice.indexOf(price)]);
//     userCountries.push(countries[countriesPrice.indexOf(price)]);
//   }
// }
// // console.log(userCountries);
// alert(` Avialable countries are:\n ${userCountries.join(', ')}`);
// const choosedCountry = prompt(
//   ` Avialable countries are:\n ${userCountries.join(', ')}.\n Choose country...`
// );

// let userCredits = maxPrice - countriesPrice[countries.indexOf(choosedCountry)];
// alert(
//   ` ${choosedCountry} is a good choice.\n You have successfully bought tour to ${choosedCountry}.\n You have ${userCredits} credits left.`
// );
// console.log('Operation completed.');

// =========================================================================================
// =====     Version 2     =================================================================
// =========================================================================================

const countrieTour = [
  { countrie: 'Ukraine', price: 100 },
  { countrie: 'Poland', price: 200 },
  { countrie: 'Croatia', price: 300 },
  { countrie: 'Montenegro', price: 400 },
  { countrie: 'France', price: 500 },
  { countrie: 'USA', price: 600 },
];
const users = [
  { userName: 'Alex', password: 111 },
  { userName: 'Ihor', password: 1432 },
  { userName: 'Vitalii', password: 999 },
  { userName: 'Leo', password: 2431 },
];

let isUserActive = true;
let isUserSigned = false;
let userName = '';
let userPass = '';
let usersList = [];

while (isUserActive) {
  myLog('in while');
  myTable(countrieTour);

  // ---------------------

  signInUser(users);

  isUserActive = false;
}

myLog('after while');

// ----- FUNCTIONS -----------------------------------------------------------------------

function signInUser(usersDataBase) {
  for (const user of usersDataBase) {
    usersList.push(user.userName);
    myLog(usersList);
  }
  checkUserCredentials(usersList);
}
function checkUserCredentials(usersArr) {}

// ---------------------------------------------------------------------------------------

function myLog(myMessage) {
  console.log(myMessage);
}
function myTable(myObject) {
  console.table(myObject);
}

// =======================================================================================

// let userName = '';
// let userPass = '';
// let userCredits = '';
// let userCountries = [];
// let maxPrice = 0;
// let isUserSined = false;
// // let isUserActive = true;
// const strUserCanceled = 'has been canceled by user.';
// const strUserInfo = 'User name must contain\n at least one symbol';

// // ===== REGISTRATION =====================================

// while (!isUserSined) {
//   userName = prompt('Enter your\n user name');
//   if (userName === null) {
//     console.log(`Registration ${strUserCanceled}`);
//     alert(`Registration ${strUserCanceled}`);
//     break;
//   }
//   if (userName === '') {
//     console.log(strUserInfo);
//     alert(strUserInfo);
//     continue;
//   }

//   userPass = prompt('Enter your password');
//   if (userPass === null) {
//     console.log(`Registration ${strUserCanceled}`);
//     alert(`Registration ${strUserCanceled}`);
//     break;
//   }
//   if (userPass === '') {
//     console.log(strUserInfo);
//     alert(strUserInfo);
//     continue;
//   }
//   isUserSined = true;
// }

// // isUserSined = false;
// // while (isUserActive && !isUserSined) {
// //   isUserSined = true;
// // }

// console.log(`Your user name: ${userName}`);
// console.log(`Your password: ${userPass}`);

// // ---------------------------------------------------------

// function checkUserName(userName) {}
