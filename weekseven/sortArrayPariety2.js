// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


var sortArrayByParityII = function(A) {  
    let evens = []
    let odds = []
    
    for(let i = 0; i<A.length; i++){
        if(A[i] % 2 === 0){
            evens.push(A[i])
        } else {
            odds.push(A[i])
        }
    }
    
    let counter = 0
    for(let k = 0; k<A.length; k++){
        if(k === 0 || k % 2 === 0) continue;
        
        evens.splice(k,0, odds[counter])
        counter++
    }

    return evens
};

var sortArrayByParityII = function(A){
     let odds = []
     let evens = []
     
     for(let i = 0; i<A.length; i++){
          if(A[i] % 2 === 0){
               evens.push(A[i])
          } else {
               odds.push(A[i])
          }
     }

     let counter = evens.length % 2 === 0 ? 1 : 0 

     for(let k = 0; k<evens.length; k++){
          if(k === 0 || k % 2 === 0) continue; 

          let temp = evens[k]
          evens[k] = odds[k-counter]
          odds[k-counter] = temp
     }
     
     return evens.concat(odds)
}