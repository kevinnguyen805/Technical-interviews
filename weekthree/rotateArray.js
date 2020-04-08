// Given an array, rotate the array to the right by k steps, where k is non - negative.

//      Example 1:

// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
// Explanation:
// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
// Example 2:

// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]
// Explanation:
// rotate 1 steps to the right: [99, -1, -100, 3]
// rotate 2 steps to the right: [3, 99, -1, -100]

/*
* LEARNED SOMETHING NEW - k %= 'bigger-number'  returns back k
ex:      3%2  is remainder 1
         3%7  is remainder 3 because 7 does not fit into 3




*/

function rotateArray(arr, k){
     
}



var rotate = function (nums, k) {
     let stack = []
     k %= nums.length
     // so if k = 5 - 5%7 returns 5
     // for 5 times...
     while (k) {
          stack.push(nums.pop())
          k--
     }
     // then push everything back in
     for (let i = 0; i < stack.length; i++) {
          nums.unshift(stack[i])
     }
};

var rotate = function (nums, k) {
     k %= nums.length

     nums.unshift(...nums.splice(nums.length - k))
};

// nums.splice(nums.length - k) = 7 - 3 = 4
// nums.splice(3) = splice(4,5,6) - ALTERS THE ORIGINAL ARRAY where splice (please lose it) returns the items cut out and returns that cut item 
// we add it back via unshift 



// nums is now [1,2,3,4] 
// nums.unshift(5,6,7) adds on 