// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Create a function that determines if a numbers is below, at, or above boiling point
// Boiling point is 212 degrees farenheit
// Input: [35, 350, 212]
// Expected Output : "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// if(temp1 < 212){
//     console.log("35 is below boiling point")
// } else if(temp2 > 212){
//     console.log("350 is above boiling point");
// } else if(temp 3 === 212){
//     console.log("212 is at boiling point");
// }
// I was not sure how to begin this function, so I attempted to create conditionals for it.
// However I was not able to get this code to work

   





// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]
// Create a function that takes in an array of numbers
// Use the test variables provided below
// Input: [[3, 7, 0, 6, -9]]
// Expected output: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]
// //input

// const mult5 = (array) => {
//     let newNumbers = []
//     for(let i=0; i<array.length; i++){
//         newNumbers.push(array[i] * 5)
//     }
//     //begin increments at index "0" and multiple entire array by to return "newNumbers"
//     return newNumbers
// }
//     console.log(mult5(myNumbers1))




// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

//Create a function that takes an array of numbers which 
// Have the function return only the odd numbers of the array
// Input: [8, -7, 0, 6, 2, 9, 13]
// Expected output: [-7, 9, 13]

// var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]

// const onlyOdd = (array) => {
//     let newArr = []
//     // newArr will be odd only
//     for(let i=0; i<array.length; i++){
//         if(array[i] % 2 == 1){
//         newArr.push(array[i])    
//         }
//      divide all numbers by 2 using modulo to determing if odd or even
//     }
//     return newArr
// } 
//     console.log(onlyOdd(myNumbers2))
//code was able to run by I did not know how to return "-7" into the array.  ONly was able to return "[9,13]"




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// Create a function that removes all vowels from the strings below
// Inputs : "HeyThereLearnStudents" , "IloveJavaScript"
// Expected Output: [HeyThereLearnStudents" , "IloveJavaScript"]

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"

// var stringWithVowels1 = ["HeyThereLearnStudent"]

// for(let i=0; i<stringWithVowels1.length; i++){
//     if(stringWithVowels1[i] !== (a, e, i, o, u) {
//         console.log(arr[i])
//     }
// }
    //Here I attempted to remove vowels but did not know how to get expected return






// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

// var refactorTester1 = true
// var refactorTester2 = 42
// var refactorTester3 = "IAmACodingMaster"
// Could not write working code for question 4 to move on to this question.

// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Bravo 2021"
// console.log(cohort.length)

// a) Your answer: It will log the index numbers of the string
// b) Verify and explain: "10" was logged as there are 10 total indexes corresponding to each letter and number


// --------------------2) What will this log?

// var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: This will log the letter "l" as the console will log the third index which belongs to "l"
// b) Verify and explain: 'l' was logged as it was in the third index


// --------------------3) What will this log?

// var languages = ["JavaScript", "Ruby", "Python", "C++"]
// var index = 1
// console.log(languages[index])

// a) Your answer: This will log "Ruby" as its in the first index of the string
// b) Verify and explain: "Ruby" was logged as its in the first index of the string above


// --------------------4) What will this log?

// var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will convert the above days in the string into all upper case letters
// b) Verify and explain: Nothing logged as terminal indicates that (weekendDays.toUpperCase()) is not a function


// --------------------5) What will this log?

// var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: This will log the index length of each variable
// b) Verify and explain: This logged "number."  COuld not determine why it returned this.

// # ASSESSMENT 1: Tech Interview Practice Questions
// Answer the following questions.

// First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

// Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

// 1. What is a function? Why would you use one?

//   Your answer: A function is used to provide a formula and parameters to provide an expected output from a probvided input

//   Researched answer: Reusable pieces of code that only execute when invoked and always return an output.



// 2. What is the difference between console.log() and return?

//   Your answer: console.log displays the result of line(s) of code and return displays the output of a function

//   Researched answer: console.log outputs a message ot the web console.  Return ends function execution and specifies a value to be returned to the function caller.



// 3. In regards to functions, what is the difference between an argument and a parameter?

//   Your answer: An argument is a result and a parameter limits what the result can be.

//   Researched answer: An argument is a value passed as input to a function.  A parameter is a named variable passed into a function.



// 4. What is a built-in method?

//   Your answer: A built in method is a feature of a text editor that performs a function in lines of code.

//   Researched answer: A method is a function which is a property of an Object.



// 5. Give a brief description of proper pair programming techniques. What are the roles of each person?

//   Your answer: Driver: This person types out the lines of code.  Navigator: This person tells the driver what to type

//   Researched answer: The driver is the one with their hands on the keyboard and typing out the code.  The navigator is the one giving verbal direction to the driver.



// 6. What is something we did in class this week you found helpful?  

//   Your answer: Pair programming, asking questions, lectures and geust speakers.



// ## Looking Ahead: Terms for Next Week

// Research and define the following terms to the best of your ability.

// 1. Higher Order Functions: Functions that take in another function as an argument OR returns a function as an output.

// 2. Jest: A JS testing framework designed to ensure correctness of any JS codebase.

// 3. Classes: Blueprints for object.  Resusable and customizable.

// 4. Constructor: Special method for creating an initializing objects.

// 5. React: Javascript library for building user interfaces.

