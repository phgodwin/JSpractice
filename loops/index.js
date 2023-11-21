// 1. Print hello 10 times
for (let i = 1; i <= 10; i++) { console.log("Hello") };

// 2. for numbers 1-100 run them through fizz buzz

for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) { console.log("Fizz Buzz") }

    else if (num % 3 == 0) { console.log("Fizz") }

    else if (num % 5 == 0) { console.log("Buzz") }

    else (console.log(num))
};

// 3. create an array of #'s and loop through fizz buzz

let numBox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numBox);

for (let flower = 0; flower < numBox.length; flower++) {
    if (flower % 3 == 0 && flower % 5 == 0) { console.log("Fizz Buzz") }

    else if (flower % 3 == 0) { console.log("Fizz") }

    else if (flower % 5 == 0) { console.log("Buzz") }

    else (console.log("Not Fizz or Buzz or Fizz Buzz"))
};
console.log("===========");
// 4. Do 3 backwards

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let statue = arr.length-1; statue >= 0; statue--) {
    if (statue % 3 == 0 && statue % 5 == 0) { console.log("Fizz Buzz") }

    else if (statue % 3 == 0) { console.log("Fizz") }

    else if (statue % 5 == 0) { console.log("Buzz") }

    else (console.log("Not Fizz or Buzz or Fizz Buzz"))
};


// 5. research an enhanced for loop (for-each) and use that for step 3 (hint: of)


