// Given an array of characters, compress it in-place.

// The length after compression must always be smaller than or equal to the original array.

// Every element of the array should be a character (not int) of length 1.

// After you are done modifying the input array in-place, return the new length of the array.

 
// Follow up:
// Could you solve it using only O(1) extra space?

 
// Example 1:

// Input:
// ["a","a","b","b","c","c","c"]

// Output:
// Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// Explanation:
// "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 

// Example 2:

// Input:
// ["a"]

// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]

// Explanation:
// Nothing is replaced.
 

// Example 3:

// Input:
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

// Output:
// Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

// Explanation:
// Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
// Notice each digit has it's own entry in the array.

// * Trial 4 - MAKES SENSE!!
var compress = function(chars) {
    // .splice() removes the items and returns the removed items
    // .slice() doesn't remove the array, but returns selected items in a NEW ARRAY
    let startingIndex = 0
    let length = 1
    
    for(let i = 0; i<chars.length; i++){
        if(chars[i] === chars[i+1]){
            length++
        } else {
            if(length > 1){
                let counter = length.toString().split('')
                
                // MISTAKE - startingIndex + 1 NOT i + 1 (because i is ahead )
                chars.splice(startingIndex+1, length-1, ...counter)
                
                // update i in case the array shifted around 
                    // the number of reoccurrances minus the number's length minus 1 (to account for the letter you are saving )
                i -= (length - counter.length - 1)
                
                // now that i is updated, update the starting point 
                startingIndex = i+1
                length = 1
                
            } else {
             startingIndex++   
            }
        }
    }
    return chars.length 
};


// * Trial 3 - Notes included 
var compress = function(chars) {
    // .splice() removes the items and returns the removed items
    // .slice() doesn't remove the array, but returns selected items in a NEW ARRAY
    let length = 1
    let startingIndex = 0
    
    for(let i = 0; i<chars.length; i++){
        if(chars[i] === chars[i+1]){
            // increment the 'length' of repeating character if the one ahead is the same 
            length++
        } else {
            // we hit this once we hit first non-repeating character
            if(length >1){
                // if length is greater than 1.. replace the characters and add digits
                let count = length.toString().split('')
                
                // .splice(starting at one letter ahead, delete # of repeats not including initial character, ...add array containing occurance)
                chars.splice(startingIndex + 1, length-1, ...count)
                
                console.log('after splice', chars)
                // move starting index 
                    // length of repeating characters minus length of number (representing length) 
                startingIndex = (i+1) - (length - count.length-1)
                
    
                i -= (length - count.length-1)
                
                // restart length 
                length = 1
            } else {
                startingIndex++
            }
        }
        
        
        
    }
    
    
};



//  let length = 1
//    let startingIndex = 0
   
//    for(let i = 0; i<chars.length; i++){
//        if(chars[i] === chars[i+1]){
//            length++
//        } else {
//             if(length > 1){
//                 let arr = length.toString().split('')
//                 chars.splice(startingIndex+1, length-1, ...arr)
//                 startingIndex = (i+1) - (length - arr.length - 1)
//                 i -= (length - arr.length - 1)
//                 length = 1
//             } else {
//                 startingIndex++
//             } 
//        }
//    }
    
//     return chars.length


//* trial 2 - optimized answer */
var compress = function(chars) {
   let j = 0
   let currentChar = chars[0]
   let counter = 0
   
   
   for(let i = 0; i<=chars.length; i++){
       if(chars[i] === currentChar){
           counter++
       } else {
           chars[j] = currentChar
           
           if(counter > 1){
               const s = counter.toString()
               for(let k = 0; k<s.length; k++){
                   chars[++j] = s[k]
               }
           }
           j++
           currentChar = chars[i]
           counter = 1
       }
   }
    return j
};

// difference between ++j vs. j++
    // ++j will increment the value if J - then return incremented value
    // j++ will first return the value, then increment j
/*
++i will increment the value of i, and then return the incremented value.

 i = 1;
 j = ++i;
 (i is 2, j is 2)
i++ will increment the value of i, but return the original value that i held before being incremented.

 i = 1;
 j = i++;
 (i is 2, j is 1)


*/


// * trial 1 - must modify the array in place 
var compress = function(chars) {
    // two pointers 
    // one at the first letter and the other traversing through
    // if j pointer - i pointer =< 1 - keep the letter
    let i = 0
    let j = 0
    let results = []
    
    for(let i = 0; i<chars.length; i++){
        let counter = 1
        let character = chars[i] // letter 
        results.push(character)
        
        let j = i
        while(chars[j] === character){
            j++
            counter++
        }

        results.push(`${counter}`)        
        i = j
    }
    
    return results
};