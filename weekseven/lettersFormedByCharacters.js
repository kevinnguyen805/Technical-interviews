// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.



var countCharacters = function(words, chars) {
    
    let results = 0
    
// if something has to do with letter frequency.. use an array of alphabet size to keep track of frequency
    let charFrequency = new Array(26).fill(0)
    for(let char of chars){
        charFrequency[char.charCodeAt(0) - 97]++
    }
    
    for(let word of words){
        let wordFrequency = new Array(26).fill(0)
        
        let wordArr = word.split('')
        for(let i = 0; i<wordArr.length; i++){
            wordFrequency[wordArr[i].charCodeAt(0) - 97]++
        }
        
        // now iterate through ALPHABET ARRAY!!!
        let good = true
        for(let k = 0; k<26; k++){
           if(wordFrequency[k] !== 0){
               if(wordFrequency[k] > charFrequency[k]){
                   good = false
               }  
           }
        }
        
        if(good === true) results += word.length
    }
    return results
};