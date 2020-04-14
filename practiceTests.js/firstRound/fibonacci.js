// calculate fibonacci sequence and return an array of all the numbers leading up to n

function fibonacci(n){
     let memo = {}

     let helper = (num) => {
          if(num in memo){
               return memo[num]
          } else if (num <= 0){
               memo[num] = 0
          } else if (num <= 1){
               memo[num] = 1
          } else {
               let result = helper(num-1) + helper(num-2)
               memo[num] = result 
               return result 
          }
     } 
     helper(n-1)      // 0th index 
     // memo is now filled with memo values 
     let results = Object.values(memo).sort((a,b) => a-b)
     return results 
}