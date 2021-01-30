"use strict";

const firstLetterUpper = function (str) {
  const [first, ...remaining] = str.split(" ");
  return [first.toUpperCase(), ...remaining].join(" ");
};

// function accepting callback
const transform = function (str, fn) {
  console.log(`Given string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
};

transform("hello", firstLetterUpper);

// function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const x = greet("hey");
x("samanth");

// rewrite in arrow functions
const greetTwo = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

// or

const greetThree = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetTwo("Hey")("samanth");
greetThree("Hey")("samanth");

const lufthansa = {
  airline: "Lufthansa",
  code: "LH",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} code: ${this.code} number: ${flightNum}`
    );
    this.bookings.push({
      bookingDetails: `${this.airline}, ${this.code}, ${name}`,
    });
  },
};
const indianAirlines = {
  airline: "Indian Airlines",
  code: "IA",
  bookings: [],
};

lufthansa.book(201, "samanth");

console.log(lufthansa);

const book = lufthansa.book;

// book(201, "said");

book.call(indianAirlines, 202, "sid");
console.log(indianAirlines);

book.apply(indianAirlines, [203, "samsid"]);
console.log(indianAirlines);

// bind will not call the functions directly
const britishAirways = {
  airline: "British Airlines",
  code: "BA",
  bookings: [],
};
const bookAirIndia = book.bind(indianAirlines);
const bookBritishAirways = book.bind(britishAirways);

bookAirIndia(203, "ss");
bookBritishAirways(204, "sxsx");
console.log(indianAirlines);
console.log(britishAirways);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
};
// if we click this we will get this as a button tag with class buy
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
// so we use bind for above problem 93 line
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
console.log(lufthansa);
const addTax = (rate, value) => {
  return value + rate * value;
};
console.log(addTax(0.2, 100));
const addVat = addTax.bind(null, 0.4);
console.log(addVat(100));

// const addVatTwo = function (value) {
//   return addTax(0.4, value);
// };
// console.log(addVatTwo(100));

const addVatTwo = function (value) {
  return function (rate) {
    return value + value * 0.4;
  };
};
console.log(addVatTwo(100)(0.4));
