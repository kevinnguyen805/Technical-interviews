// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// TODO - Keep a dictionary of all the SORTED ANAGRAMS - value is an array of the words [] 

var groupAnagrams = function(strs) {
    let hash = {}
    
    for(let i = 0; i<strs.length; i++){
        let word = strs[i].split('').sort().join('')
        
        if(!(word in hash)){
            hash[word] = [strs[i]]
        } else {
            hash[word].push(strs[i])
        }
    }
    
    let results = Object.values(hash)
    return results
};