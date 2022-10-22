/** Спільними елементами масивів називають ті елементи,
 * які присутні у всіх масивах.
 *
 * Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними
 * будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах.
 * А числа 0, 1 і 8 присутні тільки в одному з масивів.
 *
 * Напиши функцію getCommonElements(array1, array2), яка отримує
 * два масиви довільної довжини в параметри array1 і array2,
 * і повертає новий масив, що складається з тих елементів,
 * які присутні в обох вихідних масивах.
 */

function getCommonElements(array1, array2) {
  // Change code below this line

  const resultArray = [];

  //   for (i = 0; i < array1.length; i += 1) {
  //     // console.log(array1[i]);
  //     if (array2.includes(array1[i])) {
  //       resultArray.push(array1[i]);
  //     }
  for (const array1El of array1) {
    if (array2.includes(array1El)) {
      resultArray.push(array1El);
    }
  }
  return resultArray;

  // Change code above this line
}

// ------------------------------------------
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
