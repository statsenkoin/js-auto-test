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
const getLastCharacter = (arg) => arg[arg.length - 1];

console.log(getLastCharacter('321433530')); // 0
