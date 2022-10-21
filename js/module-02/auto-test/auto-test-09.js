/**  Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив ..елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array
 */

function getExtremeElements(array) {
  // Change code below this line

  array.splice(1, array.length - 2);
  return array;

  // Change code above this line
}

// ---------------------------------
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
