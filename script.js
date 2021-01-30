// "use strict";

// const firstLetterUpper = function (str) {
//   const [first, ...remaining] = str.split(" ");
//   return [first.toUpperCase(), ...remaining].join(" ");
// };

// // function accepting callback
// const transform = function (str, fn) {
//   console.log(`Given string ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
// };

// transform("hello", firstLetterUpper);

// // function returning function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const x = greet("hey");
// x("samanth");

// // rewrite in arrow functions
// const greetTwo = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // or

// const greetThree = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetTwo("Hey")("samanth");
// greetThree("Hey")("samanth");

// const lufthansa = {
//   airline: "Lufthansa",
//   code: "LH",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} code: ${this.code} number: ${flightNum}`
//     );
//     this.bookings.push({
//       bookingDetails: `${this.airline}, ${this.code}, ${name}`,
//     });
//   },
// };
// const indianAirlines = {
//   airline: "Indian Airlines",
//   code: "IA",
//   bookings: [],
// };

// lufthansa.book(201, "samanth");

// console.log(lufthansa);

// const book = lufthansa.book;

// // book(201, "said");

// book.call(indianAirlines, 202, "sid");
// console.log(indianAirlines);

// book.apply(indianAirlines, [203, "samsid"]);
// console.log(indianAirlines);

// // bind will not call the functions directly
// const britishAirways = {
//   airline: "British Airlines",
//   code: "BA",
//   bookings: [],
// };
// const bookAirIndia = book.bind(indianAirlines);
// const bookBritishAirways = book.bind(britishAirways);

// bookAirIndia(203, "ss");
// bookBritishAirways(204, "sxsx");
// console.log(indianAirlines);
// console.log(britishAirways);

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this);
// };
// // if we click this we will get this as a button tag with class buy
// // document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
// // so we use bind for above problem 93 line
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// console.log(lufthansa);
// const addTax = (rate, value) => {
//   return value + rate * value;
// };
// console.log(addTax(0.2, 100));
// const addVat = addTax.bind(null, 0.4);
// console.log(addVat(100));

// // const addVatTwo = function (value) {
// //   return addTax(0.4, value);
// // };
// // console.log(addVatTwo(100));

// const addVatTwo = function (value) {
//   return function (rate) {
//     return value + value * 0.4;
//   };
// };
// console.log(addVatTwo(100)(0.4));

// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data 
is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 
  1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be 
either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default 
option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put 
the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//   question: "what is your favourite programming language ?",
//   options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     // shortcircuiting
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // displayResults();
//     // console.log(this.answers)
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults: function (type = "array") {
//     if (type == "array") {
//       console.log(this.answers);
//     } else if (type == "string") {
//       console.log(`Ploll results are ${this.answers.join(",")}`);
//     }
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // call method is used to manually set the this method
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') 
to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly 
the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
