// I paired [by myself, with:] By Myself on this challenge.

<<<<<<< HEAD



// Pseudocode
// assign a integer value for variable 'secretNumber'
// reassign integer value of 7 to variable 'secretNumber'
// assign a string value for variable 'password'
// assign a string value of "just open the door" for variable 'password'
// assign a boolean value for variable 'allowedIn'
// reassign a boolean value of false for variable 'allowedIn'
// create an empty array for variable 'members'
// push string element "John" into array variable 'members'
// push 3 more string elements with the last string element === "Mary" into array variable 'members'

=======
>>>>>>> upstream/master
// __________________________________________
// Write your code below.
var secretNumber = 5;
var secretNumber = 7;
var password = "golden";
var password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = [];
members.push("John");
members.push("Chris");
members.push("Shelly");
members.push("Mary");

<<<<<<< HEAD
// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//There were several approaches that I came up with to solve this challenge (especially for problem #9). My first attempt 
//was to method chaining which was not successful as I was ignorant to the fact that Javascript does not modify the 
//original object. My next and probably best solution for a simple problem like this was to push each item individually 
//into the array to achieve the required outcome. Afterward, I thought of another solution to use a loop to push items 
//into the array until the point of the problem's objective. This would have been effective for more exhaustive array 
//lengths, but with this problem; I think my solution is less complicated and concise.  

=======
>>>>>>> upstream/master

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Javascript is relatively unfamiliar to me. It helped to have documentation accessible in browser tabs as I worked. 
// The only issue I ran into was that I had forgotten that Javascript does not modify the original object and instead 
// creates a brand new object after a method is passed through it. At this point, I don't feel comfortable with the 
// syntax for looping in Javascript. I think with more review and practice of the reading material offered in this 
// exercise as well as the reading offered in phase 0 unit 1 week 3 will be beneficial to solidifying my foundation. 
// This challenge helped to introduce me to some basic Javascript syntax. I am moderately confident with the Learning 
// Competencies, but I will definitely have to work with documentation and resources for reference. I've worked with 
// Test-Driven Development before and I enjoyed returning to that type of development environment. This challenge was 
// a learning experience in Javascript for me so I didn't really find any of it too tedious.

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

