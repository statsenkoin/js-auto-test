/** Метод slice(begin, end) повертає новий масив, що містить копію частини
 * вихідного масиву, не змінюючи його. Копія робиться від begin і до,
 * але не включно, end - індекси елементів вихідного масиву.
 *
 * Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
 * Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
 * Якщо значення start від'ємне, а end не вказане,
 * то будуть скопійовані останні N елементів.
 *
 * const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
 * console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
 * console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
 * console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
 * console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
 * console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
 *
 * Доповни код таким чином, щоб змінні містили часткові копії
 * вихідного масиву fruits.
 * firstTwoEls - масив із перших двох елементів
 * nonExtremeEls - масив з усіх елементів, крім першого та останнього
 * lastThreeEls - масив із трьох останніх елементів
 * */

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

// -------------------------------------------------
console.log(fruits);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
