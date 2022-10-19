function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

// -------------------------
console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));
