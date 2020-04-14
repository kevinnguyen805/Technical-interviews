// // * NEE TO DO THIS ALL THE WAY FOR TEST CASES
// You are given a string s that consists of lower case English letters and brackets.

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.



//      Example 1:

// Input: s = "(abcd)"
// Output: "dcba"
// Example 2:

// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.
//      Example 3:

// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
//      Example 4:

// Input: s = "a(bcdefghijkl(mno)p)q"
// Output: "apmnolkjihgfedcbq"

// * notes: https://www.geeksforgeeks.org/javascript-spread-operator/

// * Attempt 3 
var reverseParentheses = function (s) {
     // strategy - to use a stack 
     // where the first index is the solution
     // proceeding indices are arrays of each () 
     // nested () means more indices added

     // * REMEMBER - IT IS A NESTED STACK - THE INNER ARRAY IS THE SOLUTION
     let stack = [[]]

     for (let i = 0; i < s.length; i++) {
          // keep the pointer moving until you hit the beginning of () 
          if (s[i] === '(') {
               stack.push([])
               continue
          } else if (s[i] !== ')') {
               // if the pointer isn't a ( or ), add it to the last array in stack
               stack[stack.length - 1].push(s[i])
          } else {
               // if the pointer is a ) - pop out the last array and merge to 1st
               stack[stack.length - 1].reverse()

               if (stack[stack.length - 2]) {
                    // * big mistake here was understanding that if you pop off an item in a stack and capture it in a variable, remember to account that the stack's length has already been decreased 

                    let item = stack.pop() // pop the last item in stack (array)

                    // the last index in stack is now the solution array
                    // merge the popped array to solution array 
                    stack[stack.length - 1] = stack[stack.length - 1].concat(item)
               }
          }
     }
     return stack[0].join('')
};



// * Attempt 2 - WITH NOTES
var reverseParentheses = function (s) {
     let stack = [[]]
     for (let i = 0; i < s.length; i++) {
          if (s[i] === '(') {
               // if the character is an opening ( 
               stack.push([])
          } else if (s[i] !== ')') {
               // if it is a character, push the items into the last stack array
               stack[stack.length - 1].push(s[i])
          } else {
               // if the character is a closing ) - reverse the array
               stack[stack.length - 1].reverse()

               // pop out the last item in the stack and add it to the 1st 0 INDEX
               // conditional statement for characters outside of ( 
               if (stack[stack.length - 2]) {
                    // WILL NOT WORK IF YOU CAPTURE LAST ARRAY IN A VARIABLE 
                    // * this is because you already did stack.pop() 
                    // therefore.. the length is now 1 (where length-2 is undefined)


                    // now replace the 0th array with a merged array
                    stack[stack.length - 2] = stack[stack.length - 2].concat(stack.pop())
                    // stack[stack.length-2] = [...stack[stack.length-2], ...stack.pop()]
               }
          }
     }
     return stack[0].join('')
};


// * ATTEMPT 1 - Nested for loop usecase failed 
function reverseInParentheses(s) {
     let stack = []
     let arr = []

     for (let i = 0; i < s.length; i++) {
          if (s[i] === '(') {
               stack.push(s[i])
               let newStr = []
               let j = i + 1
               while (stack.length !== 0) {
                    if (s[j] === '(') {
                         stack.push(s[j])
                    } else if (s[j] !== ')') {
                         newStr.push(s[j])
                    } else {
                         stack.pop()
                    }
                    j++
               }
               let reverseStr = newStr.reverse().join('')
               arr.push(reverseStr)
               i = j - 1
          } else {
               arr.push(s[i])
          }
     }

     let results = arr.join('')
     return results
}

