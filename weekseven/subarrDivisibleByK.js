// Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

 

// Example 1:

// Input: A = [4,5,0,-2,-3,1], K = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by K = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

var subarraysDivByK = function(A, K) {

    let hash = {}
    hash[0] = 1
    
    let count = 0
    let sum = 0
    
    for(let i = 0; i<A.length; i++){
        sum += A[i]
        
        let remainder = sum % K
        
        if(remainder < 0){
            // because -1 % 5 = -1 (remainder)
            // we need the positive MOD 4!!!! 
            remainder += K
        }
        
        if(remainder in hash){
            count += hash[remainder]
            hash[remainder]++
        } else {
            hash[remainder] = 1
        }
    }
    return count
};



var subarraysDivByK = function(A, K) {
    // holds the remainders (ex. 5 can only have remainders 1-5)    
    let frequency = new Array(K).fill(0)
    
    // explain - 
    frequency[0] = 1
    
    let counter = 0
    let sum = 0
    
    for(let i = 0; i<A.length; i++){
        sum += A[i]
        
        let remainder = sum % K
        
        // ALWAYS CHOOSE THE POSITIVE NUMBERS
            // explain
        if(remainder < 0){
            remainder += K
        }
        
        counter += frequency[remainder]
        
        frequency[remainder]++
    }
    
    return count
};

/*
Key point === PREFIX SUM --> the accumulative sum of the elements from the beginning of the array 

- if the remainders of i and j are equal 
    - the subarray from i to j has a remainder of 0

OBJECTIVE
- traverse from left to right
- LOOKING FOR REMAINDERS I'VE ALREADY SEEN IN THE PAST 
- If I've come across a remainder I've already seen --> that means that the subarray inbetweens is needed - so count it



INFO WE NEED TO KEEP TRACK OF 
- store the remainders we've seen
- store the FREQUENCY of the remainders in the past 






Why keep track of frequencies?
- The number I need to increment my counter with is the 
    FREQUENCY OF THE REMAINDER AT ITS PREVIOUS STEP 

TLDR : The division of a negative number by a positive can yield positive and negative remainders. Some languages allow negative remainders, that's no bueno. 

In order for me to ensure I m taking the correct remainder, I'm adding K to the negative one, which always yields me the appropriate positive remainder. ( Read up on Euclidean division for more info/ proof)



*/