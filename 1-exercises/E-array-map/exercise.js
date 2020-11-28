// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//Using function name
var numbersBy100 = numbers.map(function multiplyBy100(number) {
  return number * 100;
});
console.log(numbersBy100);

// Using anonymous functions
var numbersBy100 = numbers.map(function (number) {
  return number * 100;
});
console.log(numbersBy100);

// Using arrow function
var numbersBy100 = numbers.map(number => {
  return number * 100
});
console.log(numbersBy100);

// Using shortened arrow function
var numbersBy100 = numbers.map(number => number * 100);
console.log(numbersBy100);
