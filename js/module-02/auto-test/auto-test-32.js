/** Напиши функцію includes(array, value), яка робить те саме,
 * що і метод масиву масив.includes(значення) - перевіряє,
 * чи присутнє в масиві array значення value, повертаючи true,
 * якщо присутнє, і false в іншому випадку.
 *
 * При виконанні цього завдання в тілі функції includes()
 * не можна використовувати метод масив.includes(значення).
 *
 * У функції includes використовується for, return,
 * але не метод масиву includes.
 */

function includes(array, value) {
  // Change code below this line

  for (const arrayEl of array) {
    if (arrayEl === value) return true;
  }
  return false;

  // Change code above this line
}

// ----------------------------------
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
