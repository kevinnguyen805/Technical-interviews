
// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0
   
    // TODO - use window sliding method while keeping track of product and count
    // TODO 
    let count = 0
    let product = 1
    
    // TODO use LEFT as anchor/minimize window and RIGHT to expand window
    let left = 0
    let right = 0
    
    // moving right --> 
    while(right < nums.length){
        // get the total product 
        product *= nums[right]
        
        // while product is GREATER or EQUAL to k!!
        while(product >= k){
            product /= nums[left] // minimize the window and move LEFT -> by divide
            left++
        }
        
        // right index minus left index = length of window (+1)
            // [10,5,2] - product = 1 * 10 = 10 --> count += (0 - 0) + 1 === 1
            // TODO right - left ALLOWS YOU TO CONSIDER THE INDEX BY ITSELF!!!!!
        count += (right-left)+1
        
        // console.log(count)
        right++
    } 
    
    return count
};





var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0
    // LOOK AT THIS BASECASE
    
    // TODO - USING HASH TABLES TO STOP INFINITE LOOPS
    
    let product = 1 // collective product
    let result = 0; // number of contiguous subarrays
    // the first number you're looking at, you're going to multiply by 1
    
    //TODO - SLIDING WINDOW TECHNIQUE
    // you have a left and right boundary and move it along the array 
    let left = 0
    let right = 0 
    
    while(right < nums.length){
        product *= nums[right]
        
        // shrinking the window 
        while(product >= k){
            product /= nums[left] // pop the numbers on the left
            left++
        }
        
        // how do we calculate the number of contiguous sub arrays? 
        result += right - left + 1
        // the right is the ending boundary - the length of subarray is right - left 
        // when we start at the beginning.... we're adding 1
        
        right++
    }
    return result
};