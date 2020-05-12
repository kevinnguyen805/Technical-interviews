// Given an array of A in N integers, return the smallest positive integer that does not occur in A
// A = [1,3,6,4,1,2]
// function returns 5 
let missingNumber = (nums) => {

     let smallest = 0
     let largest = 0
}
// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1

// TODO - ATTEMPT #3 - SORTING AND THEN LOOPING USING A SMALL(COUNTER) TO TRACK SEQUENTIAL NUMBERS - and finding the missing one
var firstMissingPositive = function(nums){
     if(nums.length === 0){
          if(nums[0] !== 1){
               return 1
          } else {
               return 2
          }
     }

     nums.sort((a,b) => a-b)

     let smallest = 1
     for(let i = 0; i<nums.length; i++){
          if(nums[i] === 0) continue;
          if(smallest === nums[i]){
               smallest++
          }
     }

     return smallest
}




// TODO - 3 PARTS TO THIS PROBLEM
     // TODO - part 1: base case - if the length is one, either the number is less than 1 (=== 1), number is 1 (===2) or number is greater than 1(===1)
     // TODO - part 2: sort the array -----> get the largest number and the STARTING POSITIVE NUMBER 
     // TODO - part 3: loop through array starting at FIRST POSITIVE NUMBER - compare index values starting at 1 (because smallest)
          // TODO --> if there is a number in the array that starts with 1.. increment (because now you're expecting subsequence starting at 1)
var firstMissingPositive = function(nums) {
    if(nums.length === 1){
        if(nums[0] <= 0){
            return 1
        } else if(nums[0] === 1){
            return 2
        } else {
            return 1
        }
    } 
   
    nums.sort((a,b) => a-b)
    // [-1, 1, 3, 4]
    // [7,8,9,11,12]
    
    let starting = 0
    let largest = 0
    for(let num of nums){
        if(num <= 0){
            starting++
        } else if (num > largest){
            largest = num
        }
    }
    
    let smallest = 1
    for(let i = starting; i<nums.length; i++){
        if(smallest === nums[i]){
            smallest++
        }
    }

    return smallest
};



var firstMissingPositive = function(nums) {
  
    if(nums.length === 1){
        if(nums[0] <= 0){
            return 1
        } else if(nums[0] === 1){
            return 2
        } else {
            return 1
        }
    } 
    
    let negate = 0
    let smallest = 1      // smallest positive integer
    let biggest = 0       // largest positive integer
    for(let num of nums){
        if(num <= 0){
            negate++
        } else if(num < smallest){
            smallest = num
        } else if (num > biggest){
            biggest = num
        }
    }
    
    
    nums.sort((a,b) => a-b)
    let counter = smallest

    for(let i = negate; i<nums.length; i++){
        if(nums[i] === counter){
            counter++
        }
    }
    
    return counter === biggest ? counter+1 : counter
};