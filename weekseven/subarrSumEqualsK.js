// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2

var subarraySum = function(nums, k) {
    
    // TODO - so the technique for this problem uses the hash map from two sum 
    // TODO - the hashmap is used to store sums we've seen + frequency 
        // TODO - all keys represent CONTIGUOUS SUBARRAYS WHOSE SUM HAS BEEN SEEN
    // TODO - for each iteration:
        // * get collective sum
        // * check if current sum - K has been seen 
        // * add the current sum (itself) into the hash or 
    let results = 0
    let hash = {}
    hash[0] = 1
    
    let sum = 0
    for(let i = 0; i<nums.length; i++){
        sum += nums[i]
        
        // ex. 106 + (-6) = 100 - 100 = 0 (which we've seen before)
        if(hash[sum-k]){
            results += hash[sum-k]
        }
        
        // record sum and frequency to hashmap
        if(!(sum in hash)){
            hash[sum] = 1
        } else {
            hash[sum]++
        }
    }
    
    return results
};



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