/** Метод includes(value) перевіряє, чи присутній в масиві елемент
 * зі значенням value, і повертає true або false відповідно.
 * Сфера застосування цього методу зводиться до ситуацій,
 * коли необхідно перевірити, чи присутній елемент в масиві,
 * і не важлива його позиція (індекс).
 *
 * const planets = ["Earth", "Mars", "Venus"];
 *
 * console.log(planets.includes("Earth")); // true
 * console.log(planets.includes("Mars")); // true
 * console.log(planets.includes("Venus")); // true
 * console.log(planets.includes("Jupiter")); // false
 *
 * Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit),
 * і перевіряє, чи присутній такий фрукт в масиві fruits.
 *
 * Доповни код функції таким чином, що якщо:
 *
 * фрукт присутній в масиві, то функція повертає true;
 * фрукт відсутній в масиві, то функція повертає false.
 */

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  return fruits.includes(fruit); // Change this line
}

// -------------------------------------
console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));
console.log(checkFruit('pear'));
console.log(checkFruit('Pear'));
console.log(checkFruit('apple'));
