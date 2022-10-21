/** Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number)
 * і повертає суму всіх цілих чисел від одиниці і до цього числа.
 * Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
 */

function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum;
  // Change code above this line
}

// ------------------------------------------
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
