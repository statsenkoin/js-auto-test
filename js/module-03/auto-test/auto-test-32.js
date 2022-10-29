/** ОПЕРАЦІЯ REST ДЛЯ ЗБИРАННЯ ЧАСТИНИ АРГУМЕНТІВ ФУНКЦІЇ
Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, 
яка необхідна, оголосивши параметри до «збирання».

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Всі агументи, для яких будуть оголошені параметри, передадуть їм свої значення, 
інші аргументи будуть поміщені в масив. Операція rest збирає решту усіх 
аргументів, а тому повинна бути останньою у підписі функції, 
інакше виникне помилка.

// -----------------------------------------------------------
Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і 
тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки 
тих аргументів, які більші за задане число. Це число повинно бути першим 
параметром функції.
*/

// Change code below this line
function addOverNum(edgeNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > edgeNumber) total += arg;
  }

  return total;
  // Change code above this line
}

// -----------------------------------------------------------------------
console.log(addOverNum(50, 15, 27)); //0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218