// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Alex Le
//  2. Patrick Menzel


// 0. "YOU SIGNED... WHO?!"
// 1. Angelina Jolie
// var angelina = {
// 		name: "Angelina Jolie",
// 		age: 39,
// 		quote: "You're not going to take my baby!"
// };
// 2. Olivia Wilde
// var olivia = {
// 		name: "Olivia Wilde",
// 		age: 30,
// 		quote: "I'm the miracle."
// };


// 1. "Here they Come!"
// var adam = {
// 		name: "Adam Sandler",
// 		age: 47,
// 		quote: "That's your home! Are you too good for your home?!"
// };
// var kristen = {
// 		name: "Kristen Bell",
// 		age: 33,
// 		quote: "Do you wanna build a snowman?"
// };
// var jim = {
// 		name: "Jim Carrey",
// 		age: 52,
// 		quote: "...So you're telling me there's a chance? YEAH!"
// };


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client (name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function () {return this.quote;};
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var angelina = new Client("Angelina Jolie", 39, "You're not going to take my baby!");

var olivia = new Client("Olivia Wild", 30, "I'm the miracle.");

var adam = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");

var kristen = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");

var jim = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");



// 3. "SHOW 'EM OFF!"

stars = [angelina, olivia, adam, kristen, jim];

for (var i = 0; i < stars.length; i++) {
  console.log("Our client's name is " + stars[i].name + " and they are " + stars[i].age +" and their most famous quote is " + "'" + stars[i].quote + "'" + ".");
} 


// 4. "But wait, there's more!"

function Client (name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function () {return this.quote;};
}

console.log(adam.showQuote());

// 5.  ** BONUS **


//  6.  Your Reflection:
// I started off as the navigator and Patrick was the driver. It helped that I had completed some of the prior challenges
// involving JavaScript. I pasted some code from challenge 4 as a guideline to reference for creating objects with
// properties. I noticed that one thing that worked well for us was to have this sort of guideline to reference commented
// out so that we both could work with the concepts and proof-reading without fussing over the syntax. The biggest issue we
// faced came in Release 4 when we had difficulty displaying the actual quote when the showQuote() function was called. The
// issue was that we kept getting the console to display the object's class or '[Function: showQuote]'. We had several
// questions during the challenge; for instance: we didn't know what a constructor was, we didn't know exactly how or what
// was meant to have the properties and values to display nicely, and of course how exactly to include the 'showQuote'
// function into our properties. W3Schools JavaScript documentation on constructors helped clear up the first question, but
// the greatest resources were our instructor Neal Peters and the JS script from our prior challenges. After receiving some
// help I'm not really having any trouble with the Learning Competencies of this challenge. I learned a lot about
// refactoring, constructors, and the capabilities of variables. I enjoyed the whole challenge - the mock scenario and the
// actual coding. It feels like we're really getting into some very essential and applicable skills. I didn't find any parts
// of the challenge to be tedious.