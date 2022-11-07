// ============================================================================
// function getCount(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   return [...str].filter((char) => vowels.includes(char)).length;
// }
// console.log(getCount('abracadabra'));
// ============================================================================

/** In this simple assignment you are given a number and have to make it 
negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. 
Negative zeros make no mathematical sense.
*/

// function makeNegative(num) {
//   return num > 0 ? -num : num;
// }

// console.log(makeNegative(1)); // return -1
// console.log(makeNegative(-5)); // return -5
// console.log(makeNegative(0)); // return 0
// console.log(makeNegative(0.12)); // return -0.12
// ============================================================================

/** Make a program that filters a list of strings and returns a list with only 
your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a 
friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

// function friend(friends) {
//   return friends.filter((friend) => friend.length === 4);
// }
// const friend = (friends) =>
//   friends.filter((friend) => isNaN(friend) && friend.length === 4);

// console.log(friend(['Ryan', 'Kieran', 'Mark']));
// console.log(friend(['Ryan', 'Jimmy', '1234', '4', 'Cool Man']));
// console.log(
//   friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
// );
// console.log(friend(['Love', 'Your', 'Face', '1']));

// ============================================================================

/** Given a non-empty array of integers, return the result of multiplying 
the values together in order. 
Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
*/
// const grow = (x) => x.reduce((a, b) => a * b);

// console.log(grow([1, 2, 3])); //6
// console.log(grow([4, 1, 1, 1, 4])); //16
// console.log(grow([2, 2, 2, 2, 2, 2])); //64

// ============================================================================

/** Given a set of numbers, return the additive inverse of each. Each positive 
becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

// const invert = (array) => array.map((el) => -el);

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([1, -2, 3, -4, 5]));
// console.log([]);
// console.log([0]);

// ============================================================================

/** The Western Suburbs Croquet Club has two categories of membership, Senior
and Open. They would like your help with an application form that will 
tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap 
greater than 7. In this croquet club, handicaps range from -2 to +26; the 
better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for 
a single potential member. Information consists of an integer for 
the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values 
(in Haskell and C: Open or Senior) stating whether the respective member 
is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// const openOrSenior = (data) =>
//   data.map((num) => (num[0] >= 55 && num[1] > 7 ? 'Senior' : 'Open'));

// // ------------------
// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );
// console.log(
//   openOrSenior([
//     [3, 12],
//     [55, 1],
//     [91, -2],
//     [53, 23],
//   ])
// );
// console.log(
//   openOrSenior([
//     [59, 12],
//     [55, -1],
//     [12, -2],
//     [12, 12],
//   ])
// );

// ============================================================================

/** Implement a function that adds two numbers together and returns their 
sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// const addBinary = (a, b) => (a + b).toString(2);

// // ---------------------------
// console.log(addBinary(1, 1)); //'10'
// console.log(addBinary(5, 9)); //'1110'

// ============================================================================

/** Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
and carries the "instructions" for the development and functioning of 
living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". Your function receives one side of the DNA 
(string, except for Haskell); you need to return the other complementary side.
 DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ 
(source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// function DNAStrand(dna) {
//   const revDNA = [];
//   dna.split('').forEach((element) => {
//     if (element === 'A') revDNA.push('T');
//     if (element === 'T') revDNA.push('A');
//     if (element === 'C') revDNA.push('G');
//     if (element === 'G') revDNA.push('C');
//   });
//   return revDNA.join('');
// }
// // -------------------------
// console.log(DNAStrand('ATTGC')); //"TAACG"
// console.log(DNAStrand('GTAT')); //"CATA"

// ============================================================================

/** You might know some pretty large perfect squares. 
But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square 
after the one passed as a parameter. Recall that an integral perfect square 
is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.

Examples:(Input --> Output)
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// function findNextSquare(sq) {
// Return the next square if sq is a perfect square, -1 otherwise
//   let num = Math.sqrt(sq);
//   if (num % 1 !== 0) return -1;
//   return Math.pow(num + 1, 2);
// }

// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

const findNextSquare = (sq) =>
  Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);

// -------------------------
console.log(findNextSquare(121)); //144
console.log(findNextSquare(625)); //676
console.log(findNextSquare(114)); //-1
console.log(findNextSquare(319225)); //320356
console.log(findNextSquare(15241383936)); //15241630849
