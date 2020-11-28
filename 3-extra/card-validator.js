// Function to check if a credit card number is valid
function checkCardValidity(num) {
	// Convert to string if input type is a number
	if (typeof(num) === "number") {
		num = num.toString();
	}

	// Check there are exactly 16 digits
	let is16 = num.length === 16;

	// Check all characters are numbers
	let isNumeric = /^\d+$/.test(num);

	// Check if last number is even
	let isEven = parseInt(num[num.length - 1]) % 2 === 0;

	// Check if digit sum is > 16
	let isLarge = num.split('').map(Number).reduce(function(a,b) { return a + b; }) > 16;

	// Check if all digits are the same
	let hasDifferentDigits = !num.split("").every(el => el === num[0]);
	
	return is16 && isNumeric && isEven && isLarge && hasDifferentDigits;
}

console.log(checkCardValidity(9999777788880000)); // true
console.log(checkCardValidity(6666666666661666)); // true
console.log(checkCardValidity("a92332119c011112")); // false - invalid characters
console.log(checkCardValidity(4444444444444444)); // false - only one type of number
console.log(checkCardValidity(1111111111111110)); // false - sum less than 16
console.log(checkCardValidity(6666666666666661)); // false - odd final number

