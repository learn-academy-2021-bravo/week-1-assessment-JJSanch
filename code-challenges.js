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