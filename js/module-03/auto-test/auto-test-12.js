/**
 Напиши функцію countProps(object), яка рахує і повертає кількість 
 власних властивостей об'єкта в параметрі object. Використовуй змінну 
 propCount для зберігання кількості властивостей об'єкта.
 */

function countProps(object) {
  let propCount = 0;
  // Change code below this line

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}

//  --------------------------------------
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
