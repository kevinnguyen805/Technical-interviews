function makeAnagrams(a, b) {
     // // Write your code here
     let hashA = {}
     let hash = {}

     for (let i = 0; i < a.length; i++) {
          if (!(a[i] in hashA)) {
               hashA[a[i]] = 1
               hash[a[i]] = 1
          } else {
               hashA[a[i]]++
               hash[a[i]]++
          }
     }

     // check each character in string B to see if there is a match in A
     // if there is a match, decrease the frequency
     // if there isn't increase frequency
     for (let j = 0; j < b.length; j++) {
          if (b[j] in hashA && b[j] in hash) {
               hash[b[j]]--
          } else if (!(b[j] in hash)) {
               hash[b[j]] = 1
          } else {
               hash[b[j]]++
          }
     }
     console.log(hash)


     let resultValues = Object.values(hash)
     console.log('hashValues', resultValues)
     let result = resultValues.reduce((acc, item) => Math.abs(acc + Math.abs(item)), 0)

     return result
}