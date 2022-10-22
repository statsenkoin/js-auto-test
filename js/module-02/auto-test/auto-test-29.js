/** Напиши функцію getEvenNumbers(start, end), яка повертає масив
 * усіх парних чисел від start до end. Парним вважається число,
 * яке ділиться на 2 без остачі (10 % 2 === 0).
 */

function getEvenNumbers(start, end) {
  // Change code below this line

  const evenNumbers = [];
  for (i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;

  // Change code above this line
}

// --------------------------------
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
