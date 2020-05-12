// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

//TODO - method 2 - optimize by doing ONE for loop - by adding index + 1, you'll add one extra index
var missingNumber = function(nums){
     let sum1 = 0
     let sum2 = 0

     for(let i = 0; i<nums.length; i++){
          sum1 += nums[i]
          sum2 += i+1
     }

     return sum2-sum1
}



//TODO - method 1 - find the sum of the array and then find the sum that you're SUPPOSE TO GET (by adding length + 1)
var missingNumber = function(nums) {
    
   let sum = 0
   for(let num of nums){
       sum += num
   } []
    
    let predictedSum = 0
    for(let i = 0; i<nums.length+1; i++){
        predictedSum += i 
    } 
  
    return predictedSum - sum
};