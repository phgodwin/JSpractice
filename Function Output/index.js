//Add a return statement to your functions
//Test by assigning the output of those functions to some variables and printing them (in the console)

function divide(num, num1) {

    return num / num1
}

const answer = divide(15, 5)

console.log(answer)



// Convert Fizz Buzz to return "Fizz", "Buzz" or the number


function FizzBuzz(numb) {
    if (numb % 3 == 0 && numb % 5 == 0) { return "FizzBuzz" }

    else if (numb % 3 == 0) { return "Fizz" }

    else if (numb % 5 == 0) { return "Buzz" }

    else { return numb }
}

