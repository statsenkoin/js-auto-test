/** Напиши функцію findLongestWord(string), яка приймає довільний рядок,
 * що складається тільки зі слів, розділених пробілом (параметр string),
 * і повертає найдовше слово в цьому рядку.
 */

function findLongestWord(string) {
  // Change code below this line
  const newString = string.split(' ');
  //   console.log(newString);

  let wordLength = 0;
  for (const word of newString) {
    if (word.length > wordLength) {
      wordLength = word.length;
      wordLongest = word;
    }
    // console.log(wordLongest);
  }
  return wordLongest;

  // Change code above this line
}

// ----------------------------------------
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
