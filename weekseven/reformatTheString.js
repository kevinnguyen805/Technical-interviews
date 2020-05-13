// Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

// Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
// Example 2:

// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.
// Example 3:

// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.
// Example 4:

// Input: s = "covid2019"
// Output: "c2o0v1i9d"
// Example 5:

// Input: s = "ab123"
// Output: "1a2b3"

//TODO - (1) group all the letters in 1 array and group all the numbers in another
// TODO (2) check if the lengths are more different than 1
// TODO - (3) label the longest array (so it can go first) 
// TODO - 3 while loops - add characters to the RESULT STRING in respective order - longer first, then shorter array

var reformat = function(s) {
    
    let word = s.split('')
    let letterStack = []
    let numStack = []
    
    for(let i = 0; i<word.length; i++){
        if(word[i] >= 0){
            numStack.push(word[i])
        } else {
            letterStack.push(word[i])
        }
    }
    
     if(Math.abs(letterStack.length - numStack.length) > 1){
        return ''
    }
    
    let result = ''
    let pointer = 0
    let longer = letterStack.length > numStack.length ? letterStack : numStack
    let shorter = letterStack === longer ? numStack : letterStack
    
    while(pointer < longer.length && pointer < shorter.length){
        result += longer[pointer]
        result += shorter[pointer]
        pointer++ 
    }   
    while(pointer < longer.length){
        result += longer[pointer]
        pointer++
    }
    while(pointer < shorter.length){
        result += shorter[pointer]
        pointer++
    }    
    
    
    return result
};