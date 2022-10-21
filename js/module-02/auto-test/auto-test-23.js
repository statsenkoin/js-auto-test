/** Напиши функцію filterArray(numbers, value), яка приймає масив чисел
 * (параметр numbers) і повертає новий масив, в якому будуть тільки ті
 * елементи масиву numbers, які більші за значення параметра value (число).
 */
function filterArray(numbers, value) {
  // Change code below this line
  let newNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      newNumbers.push(number);
    }
  }
  return newNumbers;

  // Change code above this line
}

// ------------------------------------------
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
