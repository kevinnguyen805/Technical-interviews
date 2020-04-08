// Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters(just like on the telephone buttons) is given below.Note that 1 does not map to any letters.



//      Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

var letterCombinations = function (digits) {
     let hash = {
          2: ['a', 'b', 'c'],
          3: ['d', 'e', 'f'],
          4: ['g', 'h', 'i'],
          5: ['j', 'k', 'l'],
          6: ['m', 'n', 'o'],
          7: ['p', 'q', 'r', 's'],
          8: ['t', 'u', 'v'],
          9: ['w', 'x', 'y', 'z']
     }

     let numCombos = []
     for (let i = 0; i < digits.length; i++) {
          numCombos.push(hash[digits[i]])
     }
     // numCombos now holds an array of all the letters we must swap/permutate

     // now we permutate it
     let results = []
     let helper = (index, prefix) => {
          // we're iterating through numCombos so once we surpass the index, we push to results and stop
          if (index > numCombos.length - 1) {
               results.push(prefix)
               return
          }

          // now we do recursion 
          // for each each letter in each array.. we add it to the next letter in next array
          for (let letter of numCombos[index]) {
               helper(index + 1, prefix + letter)
          }
     }
     if (digits.length > 0) {
          helper(0, '')
     }

     return results
};


// let result = []
// const walk = (i, prefix) => {
//      if (i > digits.length - 1) {
//           result.push(prefix)
//           return
//      }

//      const digit = digits[i]
//      for (let char of hash[digit]) {
//           walk(i + 1, prefix + char)
//      }
// }
// if (digits.length > 0) {
//      walk(0, '')
// }
