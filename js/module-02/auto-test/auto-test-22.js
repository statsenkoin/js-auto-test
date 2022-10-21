/** Метод push() дозволяє додати один або кілька елементів в кінець масиву,
 * без необхідності вказувати індекси елементів, що додаються.
 *
 * const planets = ["Earth", "Mars", "Venus"];
 * planets.push("Jupiter");
 * planets.push("Saturn", "Uranus", "Neptune");
 *
 * console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter',
 * 'Saturn', 'Uranus', 'Neptune']
 *
 * Доповни код функції createArrayOfNumbers(min, max) таким чином,
 * щоб вона повертала масив усіх цілих чисел від значення min до max.
 * */

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Change code above this line
  return numbers;
}

// ---------------------------------------------------
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
