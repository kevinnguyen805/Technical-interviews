
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.



//TODO: USE A HASH MAP TO KEEP TRACK OF THE CHARACTER / INDEX - IF YOU'VE SEEN THE CHAR, CHANGE INDEX TO -1
     // TODO: Convert the hash into an (KEYS) array and iterate through the keys to find lowest index (not -1)


var firstUniqChar = function(s) {
// keep track of the index and the character frequency
    if(s.length === 0){
        return -1
    }
    
    let hash = {}
    
    for(let i = 0; i<s.length; i++){
        let word = s.charAt(i)  
        if(!(word in hash)){
            hash[word] = i
        } else {
            hash[word] = -1
        }
    }
    
    let minIndex = Number.MAX_VALUE
    let indexArr = Object.keys(hash)

    for(let j=0; j<indexArr.length; j++){
        let item = indexArr[j]
        
        if(hash[item] >= 0){
            minIndex = Math.min(minIndex, hash[item])
        }
    }
    
    return minIndex === Number.MAX_VALUE ? -1 : minIndex
};
