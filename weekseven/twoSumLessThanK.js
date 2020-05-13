// Given an array A of integers and integer K, return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.

 

// Example 1:

// Input: A = [34,23,1,24,75,33,54,8], K = 60
// Output: 58
// Explanation: 
// We can use 34 and 24 to sum 58 which is less than 60.
// Example 2:

// Input: A = [10,20,30], K = 15
// Output: -1
// Explanation: 
// In this case it's not possible to get a pair sum less that 15.



var twoSumLessThanK = function(A, K) {
    if(A.length < 2){
        return -1
    }
    
    // given an array - find 2 numbers (MUST BE DIFFERENT)
    // 2 numbers must add up to highest S
    // 2 numbers must add up and be LOWER than k
    
    A.sort((a,b) => a-b)
    
    let left = 0
    let right = A.length - 1
    
    let result = -1
    
    while(left < right){
        let sum = A[left] + A[right]
        
        
        // if the current sum is less than K, shift left index --> 
        if(sum < K){
            left++
            
            // TODO - MISTAKE RIGHT HERE - YOU ONLY UPDATE SUM IF IT IS LESS THAN K
            result = Math.max(sum, result)
        } else {
            right--
        }
        
    }
    
    return result
};