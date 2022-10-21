/** Напиши функцію calculateTotalPrice(order), яка приймає один параметр
 * order - масив чисел, і обчислює загальну суму його елементів.
 * Загальна сума елементів повинна зберігатися у змінній total,
 * яка повертається як результат роботи функції.
 */

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (i = 0; i < order.length; i += 1) {
    total += order[i];
    // console.log(total);
    // console.log(order[i]);
  }
  // Change code above this line
  return total;
}

// --------------------------------------------
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
