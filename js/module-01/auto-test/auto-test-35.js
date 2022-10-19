function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line

  return result;
}

// -----------------------------
console.log(checkForName('Egor Kolbasov', 'Egor'));
console.log(checkForName('Egor Kolbasov', 'egor'));
console.log(checkForName('Egor Kolbasov', 'egOr'));
console.log(checkForName('Egor Kolbasov', 'Zhenya'));
console.log(checkForName('Vadim Nekrasov', 'Vadim'));
console.log(checkForName('Vadim Nekrasov', 'vadim'));
console.log(checkForName('Vadim Nekrasov', 'Dima'));
