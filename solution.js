const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
    return nums.every((num) => num > 2)
};

const isEveryWordShorterThan7 = () => {
    return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  //
};

const arrayOddLengthWords = () => {
//
};

// Find

const firstValDivisibleBy4 = () => {
//
};

const firstWordLongerThan4Char = () => {
//
};

// For Each

const logValuesTimes3 = () => {
//
};

const logWordsWithExclamation = () => {
//
};

// Map

const arrayValuesSquaredTimesIndex = () => {
//
};

const arrayWordsUpcased = () => {
//
};

// Some

const areSomeNumsDivisibleBy7 = () => {
//
};

const doSomeWordsHaveAnA = () => {
//
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
