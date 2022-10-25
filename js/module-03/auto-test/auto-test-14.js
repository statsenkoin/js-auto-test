/**
ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0
Виконай рефакторинг функції countProps(object), використовуючи метод 
Object.keys() і, можливо, але не обов'язково, цикл for...of.
 */

function countProps(object) {
  // Change code below this line

  //   let propCount = 0;
  //   for (const key in object) {
  //     if (object.hasOwnProperty(key)) {
  //       propCount += 1;
  //     }
  //   }
  //   return propCount;

  //   let propCount = 0;
  //   const keys = Object.keys(object);
  //   for (const key of keys) propCount += 1;
  // return propCount;

  let propCount = 0;
  for (const key of Object.keys(object)) propCount += 1;
  return propCount;

  // Change code above this line
}

// ------------------------------------------------
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
