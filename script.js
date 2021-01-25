"use strict";

const firstLetterUpper = function (str) {
  const [first, ...remaining] = str.split(" ");
  return [first.toUpperCase(), ...remaining].join(" ");
};

const transform = function (str, fn) {
  console.log(`Given string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
};

transform("hello", firstLetterUpper);
