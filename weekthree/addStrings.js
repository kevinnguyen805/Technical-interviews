// Given two non - negative integers num1 and num2 represented as string, return the sum of num1 and num2.

//      Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0 - 9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built -in BigInteger library or convert the inputs to integer directly.

var addStrings = function (num1, num2) {
     // result specified as string 
     let result = ''

     // using length to iterate through each number 
     let lengthOne = num1.length
     let lengthTwo = num2.length

     // carry variable to add to next num
     let carry = 0

     while (lengthOne > 0 || lengthTwo > 0 || carry !== 0) {
          // grab the number in each string USING UNARY
          let valueOne = +num1.charAt(lengthOne - 1)
          let valueTwo = +num2.charAt(lengthTwo - 1)

          // DECREMENT THE LENGTH POINTERS
          lengthOne--
          lengthTwo--

          // grab the sum 
          let total = valueOne + valueTwo + carry

          // update carry and total if total is greater than 10
          carry = total > 9 ? 1 : 0
          total = total > 9 ? total % 10 : total


          // you must add the strings from left to right
          result = total + result
     }
     return result

};




var addStrings = function (num1, num2) {
     let sum = ''
     let len1 = num1.length
     let len2 = num2.length
     let carry = 0

     while (len1 > 0 || len2 > 0 || carry !== 0) {
          let numOne = +num1.charAt(len1 - 1)
          let numTwo = +num2.charAt(len2 - 1)

          len1--
          len2--

          let total = numOne + numTwo + carry
          carry = total > 9 ? 1 : 0
          total = total > 9 ? total % 10 : total
          sum = total + sum
     }
     return sum
};