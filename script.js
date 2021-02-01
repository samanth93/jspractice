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
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (movement, i, movements) {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML("beforeend", html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice();
  dogsJuliaCopy.splice(-2);
  dogsJuliaCopy.splice(0, 1);
  const arr = dogsJuliaCopy.concat(dogsKate);
  arr.forEach(function (x, i) {
    if (x > 3) {
      console.log(`Dog number ${i} is an adult, and is ${x} years old`);
    } else {
      console.log(`Dog number ${i} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const rate = 1.75;
// const newMovements = movements.map(function (mov) {
//   return mov * rate;
// });

//or

const newMovements = movements.map((mov) => mov * rate);
console.log(newMovements);

const movementDescription;
