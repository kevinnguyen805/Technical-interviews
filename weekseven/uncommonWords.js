// 884. Uncommon Words from Two Sentences
// Easy

// 371

// 82

// Add to List

// Share
// We are given two sentences A and B.  (A sentence is a string of space separated words.Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words.

// You may return the list in any order.



//      Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet", "sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]

//TODO - gameplan: add all the words into a hash map and count its occurance / convert hash to array using Object.values(hash) and check for its key value - if it is 1, add it to a resulting array
     // TODO - 

var uncommonFromSentences = function (A, B) {
     let hash = {}

     let arrA = A.split(' ')
     let arrB = B.split(' ')

     for (let i = 0; i < arrA.length; i++) {
          if (arrA[i] === ' ') continue
          if (!(arrA[i] in hash)) {
               hash[arrA[i]] = 1
          } else {
               hash[arrA[i]]++
          }
     }

     for (let i = 0; i < arrB.length; i++) {
          if (arrB[i] === ' ') continue
          if (!(arrB[i] in hash)) {
               hash[arrB[i]] = 1
          } else {
               hash[arrB[i]]++
          }
     }

     let results = []
     let result = Object.keys(hash)

     for (let i = 0; i < result.length; i++) {
          if (hash[result[i]] === 1) {
               results.push(result[i])
          }
     }

     return results
};