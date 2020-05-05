// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// TODO: TAKE AWAY IS USING A HASH MAP TO KEEP TRACK OF INFINITE LOOPS
     // IF YOU'VE ENCOUNTERED A KEY, THEN YOU ARE IN A LOOP!!
     
var isHappy = function(n) {
    let results = false
    let hash = {}
        
    let helper = (numString, hash) => {
        let numArray = numString.split('')
        let sum = 0
        
        for(let num of numArray){
            sum += Math.pow(Number.parseInt(num), 2)
        }
        
        if(sum in hash){
            return false 
        } else {
            hash[sum] = true
            if(sum === 1){
                results = true
                return
            } else {
                return helper(sum.toString(),hash)   
            }
        }
    }
    
    helper(n.toString(), hash)
    return results
};