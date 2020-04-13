// * NEE TO DO THIS ALL THE WAY FOR TEST CASES



function reverseInParentheses(s) {
     let stack = []
     let arr = []

     for (let i = 0; i < s.length; i++) {
          if (s[i] === '(') {
               stack.push(s[i])
               let newStr = []
               let j = i + 1
               while (stack.length !== 0) {
                    if (s[j] === '(') {
                         stack.push(s[j])
                    } else if (s[j] !== ')') {
                         newStr.push(s[j])
                    } else {
                         stack.pop()
                    }
                    j++
               }
               let reverseStr = newStr.reverse().join('')
               arr.push(reverseStr)
               i = j - 1
          } else {
               arr.push(s[i])
          }
     }

     let results = arr.join('')
     return results
}

