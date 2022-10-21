function splitMessage(message, delimiter) {
  let words;
  // Change code below this line

  words = message.split(delimiter);

  // Change code above this line
  return words;
}

// -------------------------------------
console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango', ''));
console.log(splitMessage('best_for_week', '_'));
