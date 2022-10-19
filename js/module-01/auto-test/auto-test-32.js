function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

// -----------------------------------
console.log(getSubstring('Hello world', 3));
console.log(getSubstring('Hello world', 5));
console.log(getSubstring('Hello world', 8));
console.log(getSubstring('Hello world', 11));
