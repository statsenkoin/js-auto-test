/**  Сервісу гравірування прикрас потрібна функція,
 *  яка б автоматично рахувала ціну гравірування,
 *  залежно від кількості слів і ціни за слово.
 *   Оголошена функція
 *  calculateEngravingPrice(message, pricePerWord).
 *  Ця функція приймає рядок, що складається зі слів,
 *  розділених лише пробілами (параметр message) та
 *  ціну гравірування одного слова (параметр pricePerWord).
 *   Напиши тіло функції, щоб вона повертала загальну вартість
 *  гравірування усіх слів в рядку.
 * */

function calculateEngravingPrice(message, pricePerWord) {
  //   const messageToArray = message.split(' ');
  //   console.log(messageToArray);
  //   const messageToArrayLength = messageToArray.length;
  //   console.log(messageToArrayLength);
  //   return messageToArray.length * pricePerWord;

  // Change code below this line

  return message.split(' ').length * pricePerWord;

  // Change code above this line
}

// ----------------------------------------
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
console.log(calculateEngravingPrice('Web-development is creative work', 20));
