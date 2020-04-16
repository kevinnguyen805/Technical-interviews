// Verify a prime number?
// Find all prime factors of a number?
// Get nth Fibonacci number?
// Find the greatest common divisor of two numbers?
// Remove duplicate members from an array?
// Merge two sorted array?
// Swap two numbers without using a temp variable?
// Reverse a string in JavaScript?
// Reverse words in a sentence?
// Reverse words in place?
// Find the first non repeating char in a string?
// Remove duplicate characters from a sting?
// Verify a word as palindrome?
// Generate random between 5 to 7 by using defined function.
// Find missing number from unsorted array of integers.
// Check whether any two numbers in an array sums to a given number?
// Find the largest sum of any two elements?
// Total number of zeros from 1 upto n?
// Match substring of a sting?
// Create all permutation of a string?


// Verify a prime number
function isPrime(n){
     let divisor = 2

     while(n > divisor){
          if(n % divisor === 0){
               return false // meaning a number is divisible, therefore not prime 
          } else {
               divisor++
          }
     }
     return true 
}

// Find all prime factors of a number
     // * UNOPTIMIZE WAY
function primeFactors(n){
     let factors = []
     for(let i = 2; i<n; i++) {
          if(n % i === 0){
               factors.push(i)
          } 
     }
}

     // * OPTIMIZED WAY - divide n by the divisor after each successful iteration 
function primeFactors(n){
     let factors = []
     let divisor = 2

     while(n > divisor){
          if(n % divisor === 0){
               factors.push(divisor)
               n = n / divisor 
          } else {
               divisor++
          }
     }
     return factors 
}


// Fibonacci - how to get the nth Fibonacci number?
function fibonacci(n){
     let memo = {}

     let helper = (num) => {
          if(num in memo){
               return memo[num]
          } else if (num <= 0){
               return memo[num] = 0
          } else if(num <= 1){
               return memo[num] = 1
          } else {
               return memo[num] = helper(num-1) + helper(num-2)
          }
     }
     let results = helper(num-1)
     return results 
}


// Greatest common divisor - how would you find the greatest common divisor of two numbers?
function greatestCommonDivisor(a,b){
     let divisor = 2 
     let greatestDivisor = 1

     while(divisor < a && divisor < b){
          if(a % divisor === 0 && b % divisor === 0){
               greatestDivisor = divisor 
          } else {
               divisor++
          }
     }
     return greatestDivisor 
}


// Remove duplicate from an array
function remove(arr){
     let hash = {}
     let results = []

     for(let i = 0; i<arr.length; i++){
          if(!(arr[i] in hash)){
               hash[arr[i]] = true 
               results.push(arr[i])
          } else {
               continue 
          }
     }
     return results 
}

// merge two sorted arrays
// * USE TWO POINTERS 
function merge(arrA, arrB){
     let j = 0 
     let i = 0

     let results = []

     while(i < arrA.length-1 && j < arrB.length-1){
          if(arrA[i] > arrB[j]){
               results.push(arrB[j])
               j++ 
          } else if ( arrA[i] < arrB[j]){
               results.push(arrA[i])
               i++
          } else {
               results.push(arrA[i])
               results.push(arrB[j])
               i++
               j++
          }
     }
     while(i < arrA.length-1){
          results.push(arrA[i])
     }
     while(j < arrB.length-1){
          results.push(arrB[j])
     }

     return results 
}


// swap 2 numbers without using a temporary variable? - NOT VIA ARRAY
function swap(numOne, numTwo){
     numTwo = numTwo -NumOne        // add the negative of numOne 
     numOne = numOne + numTwo      // add the positive of numTwo 
     numTwo = numOne-numTwo         // subtract 
}


// reverse string 
// easy way using methods
function reverseString(str){
     let newStr = str.split('').reverse().join('')
     return newStr 
}

// * using two pointers in a split array
function reverseString(str){
     let newStr = str.split('')
     let i = 0
     let j = newStr.length-1

     while(i < j){
          let temp = newStr[i]
          newStr[i] = newStr[j]
          newStr[j] = temp  
     }
     return newStr.join('')
}



// reverse words - how would you reverse words in a sentence?
// * solution with built in methods
function reverseWords(str){
     return str.split(' ').reverse().join(' ')
}

function reverseWords(str){
     let results = []
     let wordLength = 0

     for(let i = str.length-1; i >= 0; i--){
          if(str[i] === ' ' || i === 0){
               results.push(str.substr(i, wordLength + 1))
               wordLength = 0 
          } else {
               wordLength++ 
          }
     }
     // cat is small
     // keep track of how long each word is 
     // keep iterating until you hit the beginning of a word 
     // now slice the word (i, wordLength + 1) (so you add the white space )
     return results.join(' ')
}




// first non-repeating character
// * REMEMBER ABOUT 
function nonrepeat(str){
     let hash = {}

     for(let i = 0; i<str.length; i++){
          if(str[i] in hash){
               return str[i]
          } else {
               hash[str[i]] = str[i]
          }
     }
     return false 
}


// remove duplicate character
function removeDuplicate(str){
     let hash = {}
     let strArr = str.split('')
     let results = []

     for(let i = 0; i<strArr.length; i++){
          if(!(strArr[i] in hash)){
               results.push(strArr[i])
               hash[strArr[i]] = strArr[i]
          }
     }
     return results.join('')
}


// check palindrome - verify that a word is a palindrome
     // * answer: if you reverse a word and it becomes the same as the previous word... === palindrome 
function isPalindrome(str){
     // * OPTIMZE BY CHECKING THE FIRST HALF AGAINST THE SECOND HALF

     let midpoint = Math.floor(str.length/2)
     for(let i = 0; i< midpoint; i++){
          if(str[i] !== str[str.length-1 - i]){
               return false 
          }
     }
     return true 
}


// random between 5 to 7 
     // * TRY THIS 
// * if you have a function that generate random number between 1 to 5... how could you generate random mnumber 1 to 7?
function random5(){
     return 1 + Math.random() * 4
}
function random7(){
     return 5 + random5() / 5 * 2 
}

// random5 - 1 + 1/2/3/4/5  = 6 * 4 = 24 max 
// random7 - 5 + 5 (max) / 5 * 2



// missing number 
// * from an unsorted array of numbers 1 to 100 excluding one number, how will you find that number
// * explanation: you have an array of numbers 1 to 100 in an array. Only one number is missing. The array is unsorted. Find the missing number.
     // * MAJOR BREAKTHROUGH
          // * THE SUM OF A LINEAR SERIES OF N NUMBERS = n * (n+1)/2
function missingNumber(arr){
     // use the length of the array to find the EXPECTED sum
     // find the sum of the GIVEN array
     // subtract to find the missing number 
     let length = arr.length 
     let expectedSum = length * (length+1)/2
     let givenSum = 0

     for(let i = 0; i<arr.length; i++){
          givenSum += arr[i]
     }

     return expectedSum - givenSum
}


// sum of two 
// * from an unsorted array check whether any two numbers that will sum up to a given number
function sumOfTwo(arrOne, arrTwo, sum){
     let hash = {}
     for(let i = 0; i<arrOne.length; i++){
          if(!(arrOne[i] in hash)){
               hash[arrOne[i]] = arrOne[i]
          }
     }
     for(let j = 0; j<arrTwo.length; j++){
          let difference = sum - arrTwo[i]

          if(difference in hash){
               return true 
          }
     }
     return false 
}

// counting zeros 
// * count total number of zeros from 1 up to n 
// * example - if n = 50 - the number of zeros would be 11 (0, 10, 20, 30.... 90, 100)
function countZero(n){
     let count = 0;
     while(n > 0){
          count += Math.floor(n/10)     // so each 10 is a +1 0 --> 
          n /= 10
     }
     return count 
}






// subString 
//* How can you match substring of a string? */
//* Answer: will use one pointer for the string, and another for the substring -- while iterating the string */
     //* Have another variable hold the stsarting index of the initial match */

     // * RETURN THE INDEX OF THE BEGINNING OF MATCHED SUBSTRING 
function subString(str, subStr){

     let j = 0
     let i = 0
     let newsubStr = subStr.split('')
     let newStr = str.split('')

     let matchIndex = 0

     while(i < newStr.length){
          if(newStr[i] === newsubStr[j]){
               j++
          } else {
               j = 0 
          }
          
          // the trick is the matchIndex must be defined before you start traversing into potential match
          if(j === 0){
               matchIndex = i
          } else if(j === newsubStr.length){
               return matchIndex 
          }
     }

     return -1 
}

function matchSubString(str, subStr){
     let j = 0
     let startingIndex = 0

     for (let i = 0; i < str.length; i++) {
          if (str[i] === subStr[j]) {
               j++
          } else {
               j = 0
          }

          if (j === 0) {
               startingIndex = i
          } else if (j === subStr.length) {
               return startingIndex
          }
     }
     return -1 
}






// Permutations
//* How would you create all permutations of a string?  */

