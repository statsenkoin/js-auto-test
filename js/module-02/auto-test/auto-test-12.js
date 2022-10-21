/** Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок.
 * У рядку елементи будуть розділені символом або групою символів, зазначених
 * у delimiter. Тобто це зворотна операція методу рядків split(delimiter).
 *  Доповни код функції makeStringFromArray(array, delimiter) таким чином,
 * щоб вона повертала у змінній string результат з'єднання елементів
 * масиву array з роздільником delimiter - рядок.
 */

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
  string = array.join(delimiter);
  // Change code above this line
  return string;
}

// --------------------------------------------------------
console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
);
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));
