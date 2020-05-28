// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:



var isPalindrome = function(x) {
    if(x < 0){
        return false 
    }

    // TODO gameplan is to divide by 10 and reverse the integer to compare after
    // MISTAKES - you need to capture the original X because you're mutating the input 
    // Math.floor division for reversing integers or else you'll get decimals 
    
    let originalX = x
    let reversed = 0
    
    while(x >= 1){
        reversed = reversed * 10 + x%10
        x = Math.floor(x/10)
    }
    
    if(reversed === originalX){
        return true
    } else {
        return false
    }
    
};




//TODO - method 1: convert to string, split, and iterate from beginning/ending to check each character
var isPalindrome = function(x) {
    if(x.length === 1){
        return true
    }
        
    let newStr = x + ''
    newStr = newStr.split('')
    
    let beginning = 0
    let end = newStr.length-1 
    
    while(beginning < end){
        if(newStr[beginning] !== newStr[end]){
            return false 
        } else {
            beginning++
            end--
        }
    }
    return true
};