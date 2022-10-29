/** ЗАДАЧА. МАСИВ ЗБІГІВ
Функція findMatches() приймає довільну кількість аргументів. Першим аргументом 
завжди буде масив чисел, а решта аргументів будуть просто числами.

Доповни код функції таким чином, щоб вона повертала новий масив matches, 
в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві 
першого аргументу.

Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути 
масив [1, 2], тому що тільки вони є в масиві першого аргументу.
*/

// Change code below this line
function findMatches(numArr, ...args) {
  const matches = []; // Don't change this line

  //   console.log(numArr);
  //   console.log(args);
  for (const arg of args) {
    if (numArr.includes(arg)) {
      matches.push(arg);
    }
  }

  // Change code above this line
  return matches;
}

// -------------------------------------------------------------
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //[24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //[]
