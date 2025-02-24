const { nums, words } = require("./data/data.js");

// Every

// 1. Determine if every number is greater than or equal to 2
const isEveryNumGreaterThan2 = () => {
    return nums.every((num) => num > 2)
};

// 1. determine if every word shorter than 7 characters
const isEveryWordShorterThan7 = () => {
    return words.every((word) => word.length < 7)
};

// Filter

// 1. filter the array for numbers less than 5
const arrayLessThan5 = () => {
  return nums.filter((num) => num < 5)
};

// 1. filter words that have an odd length
const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 === 1)

};

// Find

// 1. find the index of the first number that is divisible by 3
const firstValDivisibleBy4 = () => {
    return nums.find((num) => num % 4 === 0)
};

// 1. console.log each word with an exclamation point at the end of it
const firstWordLongerThan4Char = () => {
    return(words.find((word) => word.length > 4))
};

// For Each

// 1. console.log each value of the nums array multiplied by 3
const logValuesTimes3 = () => {
    return nums.forEach((num) => num * 3)

};

// 1. console.log each word with an exclamation point at the end of it
const logWordsWithExclamation = () => {
    console.log(words.forEach((word) => word + '!'))
};

// Map

// A new array of values that are squared, 
// then multiplied by their index number
const arrayValuesSquaredTimesIndex = () => {
  return nums.map((num, index) =>  num * num * index)
};

// 1.  make a new array of all the words in all uppercase
const arrayWordsUpcased = () => {
    return words.map((word) => word.toUpperCase())
};

// Some

// - Find out if some numbers are divisible by 7
const areSomeNumsDivisibleBy7 = () => {
    return nums.some((num) => num / 7)
};

// - Find out if some words have the letter `a` in them
const doSomeWordsHaveAnA = () => {
    return words.some((word) => word.includes('a'))
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
