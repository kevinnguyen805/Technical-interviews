// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


var singleNumber = function(nums) {
    let hash = {}
    
    for(let i = 0; i<nums.length; i++){
        if(!(nums[i] in hash)){
            hash[nums[i]] = true
        } else {
            hash[nums[i]] = false 
        }
    }
    
    for(let item in hash){
        if(hash[item] === true){
            return item
        }
    }
};