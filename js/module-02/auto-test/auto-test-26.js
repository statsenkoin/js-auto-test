/** Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти,
 * такі як масиви та рядки. Тіло циклу буде виконуватися для значення
 * кожного елемента. Це хороша заміна циклу for, якщо не потрібен
 * доступ до лічильника ітерації.
 *
 * for (const variable of iterable) {
 * // тіло цикла
 * }
 * variable - змінна, яка буде зберігати значення елемента на кожній ітерації
 * iterable - колекція, яка містить ітерабельні елементи, наприклад масив
 * const planets = ["Earth", "Mars", "Venus"];
 *
 * for (const planet of planets) {
 *  console.log(planet);
 * }
 *
 * Виконай рефакторинг коду функції calculateTotalPrice(order),
 * замінивши цикл for на for...of.
 */

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  //   for (let i = 0; i < order.length; i += 1) {
  //     total += order[i];
  //   }
  for (const orderEl of order) {
    total += orderEl;
  }

  // Change code above this line
  return total;
}

// --------------------------------------------
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));
