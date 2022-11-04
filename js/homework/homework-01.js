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

const countrieTours = [
  { countrie: 'Ukraine', price: 100 },
  { countrie: 'Poland', price: 200 },
  { countrie: 'Croatia', price: 300 },
  { countrie: 'Montenegro', price: 400 },
  { countrie: 'France', price: 500 },
  { countrie: 'USA', price: 600 },
];
const users = [
  { username: 'Alex', userpassword: '111', deposit: 200 },
  { username: 'Ihor', userpassword: '1q32', deposit: 1200 },
  { username: 'Bob', userpassword: '9!9', deposit: 0 },
  { username: 'Leo', userpassword: '2431', deposit: 730 },
];

let isUserActive = true;
let isUserSigned = false;
let userInput = '';
let userName = '';
let userPass = '';
let usersList = [];
let activeUser = {};
const strUserCanceled = 'Session is canceled by user.';
const strUserInfo = 'must contain at least one symbol';
const priceList = [];
const countriesAvialable = [];

// --------------------------------------------------------------------------------------

// while (isUserActive && !isUserSigned) {
//   activeUser = signInUser(users);
// }

while (isUserActive) {
  activeUser = { username: 'Alex', userpassword: '111', deposit: 20 };
  myLog(activeUser);

  for (const tour of countrieTours) {
    priceList.push(tour.price);
  }
  myLog('priceList: ' + priceList);

  for (let i = 0; i < priceList.length; i += 1) {
    if (activeUser.deposit >= priceList[i]) {
      countriesAvialable.push(countrieTours[i].countrie);
    }
  }
  myLog('countries: ' + countriesAvialable);

  if (countriesAvialable.length === 0) {
    myLog('no tours avialable');
  }
  isUserActive = false;
}

myLog('THE END');

// ----- FUNCTIONS -----------------------------------------------------------------------

function createAccount(username, userpassword) {
  users.push({ username, userpassword, deposit: 0 });
}

function checkUserInput(str) {
  let isInputValid = false;
  while (!isInputValid) {
    userInput = prompt(`Enter your ${str}`);

    if (userInput === null) {
      myLog(strUserCanceled);
      alert(strUserCanceled);
      isUserActive = false;
      return userInput;
    }

    if (userInput === '') {
      alert(`${str} ${strUserInfo}`);
      continue;
    }

    isInputValid = true;
  }
  return userInput;
}

function signInUser(usersDB) {
  while (!isUserSigned) {
    for (const user of usersDB) {
      usersList.push(user.username);
    }
    myTable(users);

    userName = checkUserInput('username to sign in');
    if (userName === null) return;

    if (!usersList.includes(userName)) {
      const willSignUp = confirm(
        `User ${userName} is not registered.\nWould you like to sign up?`
      );

      if (willSignUp) {
        signUpUser();
        continue;
      } else {
        isUserActive = false;
        myLog(strUserCanceled);
        return;
      }
    }

    userPass = checkUserInput('userpass to sign in');
    if (userPass === null) return;

    myLog(`userName: ${userName}`);
    myLog(`userPass: ${userPass}`);

    if (userPass !== users[usersList.indexOf(userName)].userpassword) {
      alert('Password is not valid. Try again...');
      myLog('Password is not valid. Try again...');
      continue;
    }

    myLog('Login success');

    isUserSigned = true;
    return users[usersList.indexOf(userName)];
  }
}

function signUpUser() {
  userName = checkUserInput('username to sign up');
  if (userName === null) return;
  userPass = checkUserInput('userpass to sign up');
  if (userPass === null) return;

  myLog(`userName: ${userName}`);
  myLog(`userPass: ${userPass}`);

  createAccount(userName, userPass);
  myLog('Signup success');
}

// ---------------------------------------------------------------------------------------

function myLog(myMessage) {
  console.log(myMessage);
}
function myTable(myObject) {
  console.table(myObject);
}

// =======================================================================================
/** Замовлення турів
 Пишемо реєстрацію користувача за допомогою prompt. Окремо логін та пароль.
 Логінізація: запитуємо логін та пароль, порівнюємо їх 
 (виводимо Try again, або Login success.)
 Запитуємо максимальну суму, яку ви готові витратити на тур.
 Виводимо список всіх країн в alert. які доступні для користувача по їого сумі.
 Вказуємо країну через prompt і купляємо тур.
 Виводимо повідомлення, що тур оплачено і залишок на рахунку користувача.
*/

// const countries = [
//   'Ukraine',
//   'Poland',
//   'Croatia',
//   'Montenegro',
//   'France',
//   'USA',
// ];
// const countriesPrice = [100, 200, 300, 400, 500, 600];
//
// let userInput;
// let userName;
// let userPass;
// let usersList;
