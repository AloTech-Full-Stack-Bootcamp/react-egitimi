// Synchronous callback functions

// kaynak: https://www.javascripttutorial.net/javascript-callback/

function isOddNumber(number) {
  return number % 2;
}

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]
/* 
let oddNumbers = numbers.filter(function (number) {
  return number % 2;
});

console.log(oddNumbers); // [ 1, 7, 3, 5 ]

let oddNumbers = numbers.filter((number) => number % 2);
 */
