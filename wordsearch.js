// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once.

//      Example:

// board =
//      [
//           ['A', 'B', 'C', 'E'],
//           ['S', 'F', 'C', 'S'],
//           ['A', 'D', 'E', 'E']
//      ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

var exist = function (board, word) {
     // how do we return true or false? 
     // default = false 
     // if we find a match = true


     let dfs = (board, row, column, word, count = 0) => {
          // if we found the word, return true
          if (count === word.length) {
               return true
          }
          // if we crossed the boundaries - return false so we break conditions in for loop
          if (row < 0 || column < 0 || row > board.length - 1 || column > board[0].length - 1) {
               return false
          }
          // if the current letter in grid doesn't match the letter we're looking for - return false 
          if (board[row][column] !== word[count]) {
               return false
          }

          // now we grab the letter 
          let temp = board[row][column]
          board[row][column] = null
          let nextLetter = dfs(board, row + 1, column, word, count + 1) || dfs(board, row - 1, column, word, count + 1) || dfs(board, row, column + 1, word, count + 1) || dfs(board, row, column - 1, word, count + 1)
          board[row][column] = temp

          return nextLetter
     }

     for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[0].length; j++) {
               if (board[i][j] === word[0] && dfs(board, i, j, word)) {
                    return true
               }
          }
     }
     return false
};