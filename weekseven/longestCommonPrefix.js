// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// TODO - is the first character the same for all of our strings... then is the second character the same?
var longestCommonPrefix = function(strs) {
    if(strs === null || strs.length === 0){
        return ''
    }
    
   let word = strs[0]
   let results = ''
   
   for(let i = 0; i<word.length; i++){
       
       let character = word[i]
       
       for(let k = 1; k<strs.length; k++){
           let otherChar = strs[k][i]
           
           if(otherChar !== character){
               return results
           }
       }
       
       results += character
   }
    
    return results   
};



//TODO - TRIAL #1
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ''
    }
    
   let word = strs[0]
   let results = ''
   
   for(let i = 0; i<word.length; i++){
       
       let character = word[i]
       let common = true
       
       for(let k = 1; k<strs.length; k++){
           let otherChar = strs[k].charAt(i)
           
           if(otherChar === character){
               continue
           } else {
               common = false
               break
           }    
       }
       
       if(common === true){
           results += character
       } else{
           return results
       }
   }
    
    return results
            
};