// Predict what each line will print, then uncomment it and check you were right
let x = 1;
// Aritmetic Operators
console.log(5 + 5); 
// 10
console.log(5 * 10); 
// 50
console.log(10 % 3); 
// 1
console.log(5 + 10 / 2 * 5 - 10);
// 20
console.log((6 + 10) / 2 * 5 - 10);
// 30

// Assignment Operators
console.log(x = x + 1);
//2
console.log(x+= 1);
// 3
// Try and figure out the difference
console.log(x)
console.log(x++);
// 4
console.log(x)
console.log(++x);
// 8

// Relational Operators
console.log(5 > 3);
// true
console.log(3 != 3);
// false
console.log(!5>3);
// false

// Mismatched Types
console.log(5 + "5");
// 55
console.log(5 + true);
// 6
console.log(5 * "5");
// NaN nope 25
console.log(1 == true);
// True
console.log(1 === true);
// false

console.log(2 <= 2 && 5 >2);