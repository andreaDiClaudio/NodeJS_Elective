// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(
  "Mi first name is " + firstName + " and my last name is " + lastName
);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2

const result = Number(year) + number;
const resultTwo = parseInt(year) + number;
const resultThree = +year + number;

console.log(result);
console.log(resultTwo);
console.log(resultThree);

//Number, in case of not number, will return NaN
console.log(Number("2222sdsdsdsdss"));
//parseInt, in case of not number, will return only the numbers inside the string
console.log(parseInt("222222sdsdsdsdss"));

// --------------------------------------
