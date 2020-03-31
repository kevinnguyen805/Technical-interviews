// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once in a word.



//      Example:

// Input:
// board = [
//      ['o', 'a', 'a', 'n'],
//      ['e', 't', 'a', 'e'],
//      ['i', 'h', 'k', 'r'],
//      ['i', 'f', 'l', 'v']
// ]
// words = ["oath", "pea", "eat", "rain"]

// Output: ["eat", "oath"]

var findWords = function (board, words) {
     let results = {}

     let dfs = (board, row, column, word, count = 0) => {
          if (count === word.length) {
               return true
          }

          if (row < 0 || column < 0 || row > board.length - 1 || column > board[0].length - 1) {
               return false
          }
          if (board[row][column] !== word[count]) {
               return false
          }

          let temp = board[row][column]
          board[row][column] = ''

          let nextLetter = dfs(board, row + 1, column, word, count + 1) || dfs(board, row - 1, column, word, count + 1) || dfs(board, row, column + 1, word, count + 1) || dfs(board, row, column - 1, word, count + 1)

          board[row][column] = temp
          return nextLetter
     }


     for (let k = 0; k < words.length; k++) {
          for (let i = 0; i < board.length; i++) {
               for (let j = 0; j < board[0].length; j++) {
                    if (board[i][j] === words[k][0] && dfs(board, i, j, words[k])) {
                         results[words[k]] = words[k]
                    }
               }
          }
     }

     let result = Object.values(results)


     return result
};