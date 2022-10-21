function checkStorage(available, ordered) {
  // Change code below this line
  //   let message;

  //   if (ordered === 0) {
  //     message = 'Your order is empty!';
  //   } else if (ordered > available) {
  //     message = 'Your order is too large, not enough goods in stock!';
  //   } else {
  //     message = 'The order is accepted, our manager will contact you';
  //   }

  //   return message;
  // Change code above this line

  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }

  return 'The order is accepted, our manager will contact you';
}

// ----------------------------------------
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
