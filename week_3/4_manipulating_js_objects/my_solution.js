
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown",
};



// __________________________________________
// Write your code below.

var adam = {
  name: "Adam",
  spouse: terah,
};

terah = {
  spouse: adam,
  weight: 125,
  eyeColor: undefined,
};

terah.spouse.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines
// I like to work through each problem one at a time rather than look at the assert-test code. The problem that gave me
// the most issues was problem #6. I tried several different lines of code; for instance, nesting - which did not work.
// It was object literal notation that eventually worked. I understood the concepts of this challenge, but really feel
// that I need much more reinforcement of the syntax (especially when it comes to helping me differentiate my knowledge
// of Ruby vs. Javascript syntax and limitations). This challenge helped benefit my understanding of variables, properties,
// and values in Javascript. It was helpful to work with both forms of property/value assignment notations. I'm glad that
// we are starting to get into "real" coding; and I, again, enjoyed the interactiveness of TDD. I don't find any of this
// to be tedious as it all seems like good practice to develop my skills.
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)