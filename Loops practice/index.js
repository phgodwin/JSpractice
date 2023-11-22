// 1. Loop from 1-10 producing the sum
console.log("1-10 producing the sum")
let sum = 0
for (let num = 1; num <= 10; num++) { console.log(sum += num) }

// 2. Loop through an array of numbers and add them together
console.log("Loop through array adding them together (2,4,6 etc)")
let sumTot = 0
let arr = [2, 4, 6, 8, 10, 12, 14, 16]

for ( let i = 0; i < arr.length; i++) { console.log(sumTot += arr[i]) }


// 3. Repeat 2 using a for of loop
console.log("same as above but using for-of loop")
let Tot = 0
let shelf = [2, 4, 6, 8, 10, 12, 14, 16]

for (let char of shelf) {
    console.log("Char:", Tot+=char)};