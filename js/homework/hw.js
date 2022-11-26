// // Реалізуйте result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;

// const result = [...a, c, b[0], ...b[1]];

// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// -------------------------------------------------

// // Реалізуйте result
// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// const b = a.slice(0, 3);
// const d = a.splice(3, 3);
// // console.log(a);
// // console.log(b);
// // console.log(c);
// const result = [...b, ...a];

// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// ---------------------------------------------------

// // Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];

// const foo = (arr) => {
//   const res = [];
//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       res.push(...el);
//     } else {
//       res.push(el);
//     }
//   }
//   return res;
// };

// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

// -------------------------------------------------------

// Напиши функцію, яка повертає останній символ стрічки
// const getLastCharacter = (arg) => arg[arg.length - 1];

// console.log(getLastCharacter('321433530')); // 0

// ----------------------------------------------------------------------------

// // Створи функцію, яка проводить пошук обєкта в масиві по id та виводить
// його в консоль.
//
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// // const foo = (idIn) => users.find(({ id }) => idIn === id);
// // console.log(foo(2));

// const foo = (idIn) => {
//   const userById = users.find(({ id }) => idIn === id);
//   console.log(userById);
// };
// foo(1);

// ----------------------------------------------------------------------------
// // Виведи в консоль стрічку для кожного єлемента масива слідуючого типу:
// "Имя - позиция в массиве Х и сам массив"
//
// const robots = ['Bender', 'Awesom-O', 'Johnny 5'];

// // robots.forEach((el, index, array) => {
// //   console.log(`Name: ${el}, index: ${index}, array: `, array);
// // });

// const findElById = (el, index, array) => {
//   console.log(`Name: ${el}, index: ${index}, array: `, array);
// };
// robots.forEach(findElById);
// ----------------------------------------------------------------------------

// // Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // Але рахуватись мають лише позитивні числа!!!

// const positiveSum = (arr) => {
//   let sum = arr.reduce((acc, arrEl) => {
//     if (arrEl > 0) return acc + arrEl;
//     return acc;
//   }, 0);
//   console.log(sum);
// };

// const positiveSum = (arr) => {
//   //   let sum = arr.reduce((acc, arrEl) => (arrEl > 0 ? acc + arrEl : acc), 0);
//   //   console.log(sum);

//   console.log(arr.reduce((acc, arrEl) => (arrEl > 0 ? acc + arrEl : acc), 0));
// };

// positiveSum([2, 4, 6, 8]); // 20
// positiveSum([0, -3, 5, 7]); // 12
// ----------------------------------------------------------------------------
