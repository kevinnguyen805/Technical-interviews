// We are given two arrays A and B of words.  Each word is a string of lowercase letters.

// Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

// Now say a word a from A is universal if for every b in B, b is a subset of a. 

// Return a list of all universal words in A.  You can return the words in any order.

 

// Example 1:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
// Output: ["apple","google","leetcode"]
// Example 3:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
// Output: ["facebook","google"]
// Example 4:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
// Output: ["google","leetcode"]
// Example 5:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
// Output: ["facebook","leetcode"]



var wordSubsets = function(A, B) {
    let companies = A
    let words = B 
    
    let letterFrequency = new Array(26).fill(0)
    for(let i = 0; i<words.length; i++){
        let wordFrequency = new Array(26).fill(0)
        
        for(let letter of words[i]){
            let item = letter.charCodeAt(0) - 97
            wordFrequency[item]++
        }
        for(let j = 0; j<26; j++){
            letterFrequency[j] = Math.max(wordFrequency[j], letterFrequency[j])
        }
    }
    
    
    // get character frequency for all the words
    let results = []
    for(let company of companies){
        let companyFrequency = new Array(26).fill(0)
        
        for(let companyLetter of company){
            let item = companyLetter.charCodeAt(0) - 97
            companyFrequency[item]++
        }
        
        let universal = true
        for(let i = 0; i<26; i++){
            if(companyFrequency[i] < letterFrequency[i]){
                universal = false 
            }
        }
        
        if(universal === true){
            results.push(company)
        }
    }
    
    return results
};