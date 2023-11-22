// Create an object representing you
let me = {
    Name: 'Paige Godwin',
    Age: 29,
    Job: 'Trainee Software Engineer',
    Hobbies: ['Books', 'Films', 'F1'],
    Pet: [],
}
// Print out each value in your object seperately
console.log(me.Name)
console.log(me.Age)
console.log(me.Job)
console.log(me.Hobbies)
console.log(me.Pet)

// Create other objects to represent other people in your room

let Craig = {
    Name: 'Craig Morris',
Age: 39,
Job: 'Trainee Software Engineer',
Hobbies: ['Football', 'Golf', 'Gaming'],
Pet: ["Stanley"],
}

let Andrew = {
    Name: 'Andrew Clarke',
Age: 30,
Job: 'Trainee Software Engineer',
Hobbies: ['Racing', 'Gaming', 'Food'],
Pet: [],
}

// Put those objects into an array
let array = [me, Craig, Andrew]

// loop through the array and print each object
for (const trainee of array) { console.log(trainee)
    
}

// loop through and find the oldest
console.log('Find Max Age of Student')

let oldest = {Age:0};
for (const student of array) { console.log(student.Age)
    if (student.Age>oldest.Age) oldest=student
    
}
console.log(oldest.Name)


// loop through and and increase everyones age by 1

for (const learner of array) { 

    if(learner.Age<learner.Age+1) learner.Age=learner.Age+1
    console.log(learner
    )  
}

