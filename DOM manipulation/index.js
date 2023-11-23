// 1. Remember to 'defer' your script
// 2. Create a heading and add it to the body

const newHeading = document.createElement ("h1");

newHeading.textContent = "Fancy Shmancy Heading";

document.body.appendChild(newHeading);

// 3. Apply some styling to the heading

newHeading.style.color = "green" ;

// // 4. Use a loop to add 10 different paragraphs with different text to the body


for (let i=1; i<=10; i++) {
const newParagraph = document.createElement ("p")
newParagraph.textContent = 'Paragraph ' +i
document.body.appendChild(newParagraph)
// newParagraph.style.color = 'red'
if ( i % 2 == 0 ) {newParagraph.style.color = 'blue'}
    else {newParagraph.style.color = 'red'}
}


// 5. Create a function that takes in a type and some text and adds an element of that type with the provided text to the body


function renderElement(tag, text){
    const newElement = document.createElement (tag)
    newElement.textContent = text
    document.body.appendChild(newElement)

}




// Extentions
// 6. Go back to step 3 and style all the paragraphs to have red text

// see above in 4!
    

// 7. Style the paragraphs so that every other <p> is blue instead of red

// see above in 4!
// 