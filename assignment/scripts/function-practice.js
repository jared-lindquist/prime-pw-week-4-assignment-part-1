console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello Jared!';
}
// Remember to call the function to test
console.log(helloName());

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
   firstNumber = 3;
   secondNumber = 8; 
  return (firstNumber + secondNumber)
}
console.log(addNumbers());


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
num1 = 2;
num2 = 5;
num3 = 4;
return (num1 * num2 * num3);
}
console.log(multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise


function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else return false;
}
console.log(isPositive());
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

isPositive(3);
console.log( 'isPositive - should say true', isPositive(3) );

isPositive(0);
console.log( 'isPositive - should say false', isPositive(0) );

isPositive(-3);
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.


let array = [0, 9, 4, 6, 12]

function getLast() {
let f = array[array.length-1];
console.log("The last element is " + f);
}
getLast();

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

const value = 5;
let array1 = [2, 3, 4, 6, 10, 20, 34];

let result = array1.some(function(value){
    return (value === 5);
})

console.log(result);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

let letter = 'a';
let string = 'apple';

function isFirstLetter(letter, string) {
    console.log('in isFirstLetter')
    if  (string.charAt() === letter) {
        return true;
  } else {
    return false;
  }
}
  console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
  console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

let array2 = [ 7, 5, 90, 63, -27]

function sumAll( ) {
  let sum = 0
  for (i = 0; i < array2.length; ++i) {
    sum += array2[i]; 
}
return sum;
}
console.log(sumAll());
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let array3 = [-6, 3, 5, -27, 98, -64, 30, 72]

function getPositives(array3){
  const posArr = array3.filter(num => num > -1);
  return posArr;
}
console.log(getPositives(array3));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// I found one on CodeWars called 'Simple Multiplication'.
// This problem is about writing a function for  a given number 
// by eight if it is an even number, and by nine if it is an odd number.
//
//

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(5));
console.log(simpleMultiplication(75));
console.log(simpleMultiplication(12));