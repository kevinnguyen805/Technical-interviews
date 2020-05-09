
// I am using HackerRank to improve programming
// am HackerRank to improve 
// output: ["I", "using", 'Programming']


function missWords(word, subset){
     // split both strings
     // put each word in subset into a hash 
     // go though each word in sentence and check against hash

     let hash = {}
     let results = []
     let wordArr = word.split(' ')
     let subsetArr = subset.split(' ')

     for(let i = 0; i<subsetArr.length; i++){
          if(!(subsetArr[i] in hash)){
               hash[subsetArr[i]] = subsetArr[i]
          }
     }

     for(let i = 0; i<wordArr.length; i++){
          if(!(wordArr[i] in hash)){
               results.push(wordArr[i])
          }
     }

     return results 
}

// test case - "programmer programmer programmer" !== 'programmer programmer`


function missWords(word, subset){
     // use two pointers to keep track of where the word is 
     // programmer programmer programer 
          // programmer programmer 

     let results = []
     let wordArr = word.split(' ')
     let subsetArr = subset.split(' ')
     let j = 0;

     for(let i = 0; i<wordArr.length; i++){
          let currentSub = subsetArr[j]
          let currentWord = wordArr[i]

          if(currentSub === currentWord){
               j++ 
          } else {
               results.push(currentWord)
          }
     }
     return results 
}


