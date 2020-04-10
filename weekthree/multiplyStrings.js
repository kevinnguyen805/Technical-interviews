//* DISCLAIMER: only got 150 / 300 tests working */
https://leetcode.com/problems/multiply-strings/discuss/402664/JavaScript-with-description
// Given two non - negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

//      Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0 - 9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built -in BigInteger library or convert the inputs to integer directly.



var multiply = function (num1, num2) {
     let result = []
     let indent = 1

     for (let i = 1; i <= num2.length; i++) {
          let lengthOne = num1.length
          let lengthTwo = num2.length
          let carry = 0
          let currentResult = ''

          let digit = +num2.charAt(lengthTwo - i)
          while (lengthOne > 0 || carry !== 0) {
               let numOne = +num1.charAt(lengthOne - 1)

               lengthOne--

               let total = (digit * numOne) + carry

               carry = total > 9 ? Math.floor(total / 10) : 0
               total = total > 9 ? total % 10 : total

               currentResult = total + currentResult
          }

          currentResult *= indent
          indent *= 10

          result.push(Number.parseInt(currentResult))
     }

     let sum = 0

     for (let i = 0; i < result.length; i++) {
          sum += result[i]
     }
     return `${sum}`

};