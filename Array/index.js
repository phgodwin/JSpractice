const array = ["Paige", "Jade", "Abbie", "Ellis", "Evie"];
console.log(array);

// Should print Abbie
console.log(array[2]);

// Should print Evie
console.log(array[4]);

console.log(array);
// should add mum (sue) to the end
array.push ("Sue")
console.log(array);
// Should add Dad (Nick) to the start
array.unshift ("Nick")
console.log(array)

// Removing both mum and dad
array.pop()
array.shift()
console.log(array)

// splicing practice, adding partners in

array.splice(1,0,"Matthew")
console.log(array)
array.splice(1,2,"Jade","Matthew")
console.log(array)

array.splice(4,0,"Iwan")
console.log(array)

array.splice(1,0,"Eloise")
console.log(array)


