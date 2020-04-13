// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

//      Note:

// The solution set must not contain duplicate triplets.

//      Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

//      A solution set is:
// [
//      [-1, 0, 1],
//      [-1, -1, 2]
// ]


var threeSum = function (nums) {
     // treat it like a two sum problem 
     let result = []

     // sort the array
     nums = nums.sort((a, b) => a - b)

     // use i as our anchor and stop at 3rd to last to prevent undefined k
     for (let i = 0; i < nums.length - 2; i++) {

          // b/c we have a sorted array - we can stop here if the current iterator is greater than the target value 
          if (nums[i] > 0) {
               break;      // stops the entire forloop 
          }

          // if our iterator is the same as the previous value.. skip it to prevent duplicate results
          if (i > 0 && nums[i] === nums[i - 1]) {
               continue;         // stops only this iteration of i!!!
          }

          // so current index + one index over + last index
          let j = i + 1
          let k = nums.length - 1


          // walk j and k towards each other to find all values
          while (j < k) {
               let sum = nums[i] + nums[j] + nums[k]

               if (sum === 0) {
                    result.push([nums[i], nums[j], nums[k]])

                    // moved this iteration in?????? 
                    // skip dplicate values of j and k
                    while (nums[j] === nums[j + 1]) j++
                    while (nums[k] === nums[k + 1]) k++

                    // move j and k inward after checking its sum with i
                    j++
                    k--
                    continue
               }
               // OPTIMIZING... 
               // if the sum is less than 0... move j upwards 
               if (sum < 0) {
                    j++
                    continue
               }
               // if the sum is greater than 0... move k downwards
               if (sum > 0) {
                    k--
                    continue
               }
          }
     }
     return result
};