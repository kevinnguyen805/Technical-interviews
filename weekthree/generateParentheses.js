// Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.

// For example, given n = 3, a solution set is:

// [
//      "((()))",
//      "(()())",
//      "(())()",
//      "()(())",
//      "()()()"
// ]


// * TAKEAWAYS: 
     // * this problem uses the stack to create combinations of parentheses 
     // * similar to DFS recursion - will keep using left (  until exhausted, then go back and use right )  
          // * ex. we have 3 items on the stack for n = 3
          // * ( 
          // * ((
          // * (((
               // * which will proceed to right and THEN BACK TO LEFT!


// 1. choice - place a '(' or ')'
// 2. constraints - we cannot close until we open. My count of left opens matter
// 3. goal - n*2 placements where n is how many opening brackets we have (also the parameter we pass in)



function generateParentheses(n){
     // method - to keep count of left and right () during recursion stack

     // output is strings in an array
     let solution = []

     // create recursion helper function
     let helper = (leftCount, rightCount, partial) => {
          // exit conditions
          if(leftCount > rightCount){
               // ex ())    - there cannot be more ) than ( 
               return 
          }
          if(leftCount === 0 && rightCount === 0){
               // if we used all parentheses, we can push the string into array
               solution.push(partial)
          }

          // recursion calls - think of it like depth first search for left parentheses
          if(leftCount > 0){
               // keep using lefts until we've exhausted 
               helper(leftCount-1, rightCount, partial+'(')
          }
          if(rightCount >0){
               helper(leftCount, rightCount-1, partial+')')
          }
     }

     helper(n, n, '')   // pass in the number of parentheses as left and right count + empty string

     return solution
}