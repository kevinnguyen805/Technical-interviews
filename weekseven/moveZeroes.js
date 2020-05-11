// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


function moveZeroes(nums){

     for(let i = 0; i<nums.length; i++){
          if(nums[i] === 0){
               nums.splice(i,1)
               nums.push(0)
          }
     }

     return nums 
}


//TODO - instead of shifting 0's - we are shifting the non-zero's first 
function moveZeroes(nums){
     let index = 0 //index holds the current index for shifting all non-zero's

     for(let i = 0; i<nums.length; i++){
          if(nums[i] !== 0){
               // if current number is not equal to zero - replace the item at (INDEX) with current number
               nums[index] = nums[i]
               index++ //increment because the next spot is where our "relative order" will take place
          }
     }

     for(let i = index; i<nums.length; i++){
          //TODO - i = INDEX          - start at INDEX because THAT IS WHERE THE LAST NON-ZERO STOPPED
          nums[i] = 0
     }

     return nums
}