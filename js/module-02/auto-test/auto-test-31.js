/** Якщо цикл знаходиться в тілі функції, то оператор break не припиняє
 * виконання функції, а тільки перерве цикл. Для того щоб переривати
 * виконання відразу циклу і функції, є оператор return.
 *
 * У прикладі шукаємо число 3. Щойно виконається умова if,
 * робимо повернення, яке перерве виконання циклу і функції.
 *
 * function fn() {
 *   for (let i = 0; i <= 5; i += 1) {
 *     console.log(i);
 *
 *     if (i === 3) {
 *       console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
 *       return i;
 *     }
 *   }
 *
 *   // Цей console.log не виконається
 *   console.log("Лог після циклу в тілі функції");
 * }
 *
 * const result = fn();
 * console.log("Лог після виходу з функції");
 * console.log(`Результат виконання функції ${result}`);
 *
 * Виконай рефакторинг функції findNumber(start, end, divisor) таким чином,
 * щоб вона:
 * повертала перше число від start до end, яке ділиться на divisor без остачі
 * не використала оператор break
 * не використала змінну number
 */

function findNumber(start, end, divisor) {
  // Change code below this line

  //   let number;

  //   for (let i = start; i < end; i += 1) {
  //     if (i % divisor === 0) {
  //       number = i;
  //       break;
  //     }
  //   }
  // return number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  // Change code above this line
}

// --------------------------------------
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));
