/** 
 Напиши функцію getAllPropValues(propName), яка приймає один параметр 
 propName - ім'я (ключ) властивості. Функція повинна повернути масив 
 всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
 Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна 
 повернути порожній масив.
 */

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line

  const result = [];

  for (const product of products) {
    // console.log(Object.keys(product));
    if (Object.keys(product).includes(propName)) {
      result.push(product[propName]);
    }
  }

  return result;

  // Change code above this line
}

// -------------------------------------------------------
console.log(getAllPropValues('name')); //["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
console.log(getAllPropValues('price')); //[1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // []
