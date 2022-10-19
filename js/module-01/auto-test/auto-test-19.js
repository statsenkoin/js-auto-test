function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Change this line
    message = 'Canceled by user!';
  } else if (ADMIN_PASSWORD === password) {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

// -------------------------------------
console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));
