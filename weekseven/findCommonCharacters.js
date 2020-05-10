// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

 

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]


//TODO - method 1 - FILTER() TO FIND INTERSECTIONS BETWEEN 2 ARRAYS
     //* use 0th index word as the base array and use filter to iterate through the other words  */
     // * compare them using indexOf() and filter - if there exists an index, you splice out the word 
     // * think of it as a nested for-loop - once you splice the word out, if there are repeats - they will try and match the next one
     // TODOthe returning arrays are THE INTERSECTION BETWEEN THE 2 ARRAYS - CAPTURED IN THE SAME BASE ARRAY VARIABLE

function commonChars(A){
     // A = ["bella","label","roller"]

     let results = A.split('')

     let getIntersections = (result, currentWord) => {
          return result.filter((letter) => {
               let index = currentWord.indexOf(letter)

               if(index !== -1){
                    currentWord.splice(index, 1)  // *splice changes the original array 
                    return true                   // *return true = item passes the filter 
                                                  // * = returning the letter that is the same 
               } else {
                    return false 
               }
          })
     }

     for(let i = 1; i<A.length; i++){
          results = getIntersections(results, A[i].split(''))
     }
     return results 
}


// TODO - METHOD 2 - Using a hashmap + results string 
//* Focus on the helper function that HASHMAPS the first array (results) and cross checks against SECOND ARRAY */
//* return the results (updating same variable) - and loop through the rest of the array */
// TODO - YOU DON'T HAVE TO SPLIT EVERYTIME - YOU CAN ITERATE THROUGH AN ARRAY (but not change anything)

function commonChars(A){
     if(A.length === 1) return [] 

     let helper = (result, currentWord) => {
          let hash = {}
          let results = []

          for(let letter of result){
               if(!(letter in hash)){
                    hash[letter] = 1
               } else {
                    hash[letter]++  // *counting frequency
               }
          }

          for(let letter of currentWord){
               if(hash[letter]){
                    results += letter
                    hash[letter]--
               }
          }
          return results 
     }

     let commonChars = helper(A[0], A[1])

     for(let i = 2; i<A.length; i++){
          commonChars = helper(commonChars, A[i])
     }

     return commonChars.split('')
}