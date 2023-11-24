// Create a button that prints something to the console when clicked

// function

function helloWorld(text) {

    console.log(text)
}










// Create an input called count starting at 0 with a button next to it where you can increase the value by 1.
// The input should be read only

function addOne() { document.getElementById("count").value++ };


// Create the same as above with a -5, -1, reset, +1 and +5

let counter = document.getElementById("maths");

function minusFive() {
    counter.value -= 5
}

function minusOne() {
    counter.value--
}

function reset() {
    counter.value =0
};

function plusOne() {
    counter.value++ };


function plusFive() {
    counter.value -= -5
}





