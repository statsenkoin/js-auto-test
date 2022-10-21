/** Цикл for можна використовувати для ітерації по масиву,
 * тобто «перебрати» його поелементно.
 *
 * const planets = ["Earth", "Mars", "Venus"];
 * for (let i = 0; i < planets.length; i += 1) {
 * console.log(planets[i]);
 * }
 *
 * Для доступу до елементів використовується синтаксис квадратних дужок
 * масив[індекс], де індекс - це значення лічильника циклу
 * від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.
 * Доповни код циклу for таким чином, щоб він послідовно логував усі
 * елементи масиву fruits.
 */

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
