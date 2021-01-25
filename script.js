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
