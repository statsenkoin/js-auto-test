function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result =
    message.length <= maxLength ? message : message.slice(0, maxLength) + '...';

  // Change code above this line
  return result;
}

// --------------------------------
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
