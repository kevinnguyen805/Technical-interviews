// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted


var sortArrayByParity = function(A) {
    // objective is to get all the even numbers then odd 
    
    let evens = []
    let odds = []
    
    for(let i = 0; i<A.length; i++){
        if(A[i] % 2 === 0){
            evens.push(A[i])
        } else {
            odds.push(A[i])
        }
    }
    
    return [...evens,...odds]
};


// TODO ; METHOD 2 - using push and splice 
var sortArrayByParity = function(A) {
   // using splice 
    
    let evenNums = []
    
    for(let i = 0; i<A.length; i++){
        if(A[i] % 2 === 0){
            evenNums.push(A[i])
            A.splice(i, 1)
            i--       // REMEMBER TO DECREMENT I BECAUSE YOU TOOK OUT AN ITEM
        }
    }

    return evenNums.concat(A)
};
