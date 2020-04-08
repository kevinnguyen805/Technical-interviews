// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//      Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.



/* 
* the takeaway is to use the stack + conditional statements to set work aside to do later
* we also use a hash table for fast lookups to look for the matching parentheses


*/
function valid(arr){
     let brackets = {
          '(':')',
          '{':'}',
          '[':']'
     }
     let stack = []
     // we look through each item and see if it is either the beginning or if it's an end, if it is the right order
     for(let char in arr){
          if(char in brackets){
               stack.push(brackets[char])
          } else {
               if(stack.pop() !== char){
                    return false 
               }
          }
     }
     return !stack.length 
}

