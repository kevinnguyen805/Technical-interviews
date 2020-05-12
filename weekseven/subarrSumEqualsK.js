// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2



var subarraySum = function(nums, k) {
    
    let sum = 0
    let result = 0
    
    let hash = {} // key = first integer is current cumulative sum, second one is number of times we've seen that sum 
    
    
    hash[0] = 1 // because we HAVE seen 0 once    
    
    
    for(let i = 0; i<nums.length; i++){
        // use a hash map to keep track of the sum between distances of arrays
        // if two points have a sum up to k ... that means all items inclusive add up to k
        sum += nums[i]
    
        if((sum - k) in hash){
            // TWO SUM PROBLEM!!!
            result += hash[sum-k]
        }
        
        
        // WE CAN SEE THE SAME SUM TWICE
        // getting frequency of the sum 
        if(!(sum in hash)){
            hash[sum] = 1
        } else {
            hash[sum]++
        }
    }
    
    return result
};