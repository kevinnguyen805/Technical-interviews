// Given an m x n matrix of non - negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions(up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

//      Note:

// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.


// Example:

// Given the following 5x5 matrix:

// Pacific ~   ~   ~   ~   ~
//      ~1   2   2   3(5) *
//           ~3   2   3(4)(4) *
//                ~2   4(5)  3   1 *
//                     ~(6)(7)  1   4   5 *
//                          ~(5)  1   1   2   4 *
//           *   *   *   *   * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]](positions with parentheses in above matrix).

var pacificAtlantic = function (matrix) {
     if (matrix.length === 0) {
          return []
     }

     // build your matrices for both oceans 
     // let pacific = [...new Array(matrix.length)].forEach(q => new Array(matrix[0].length))
     // let atlantic = [...new Array(matrix.length)].forEach(q => new Array(matrix[0].length))


     // CORRECT WAY TO MAKE MATRIX GRID 
     let pacific = new Array(matrix.length)
     let atlantic = new Array(matrix.length)

     for (let k = 0; k < matrix.length; k++) {
          pacific[k] = new Array(matrix[0].length).fill(0)
          atlantic[k] = new Array(matrix[0].length).fill(0)
     }




     // dfs traversal 
     let dfsTraversal = (matrix, row, column, previousValue, ocean) => {
          if (row < 0 || column < 0 || row > matrix.length - 1 || column > matrix[0].length - 1) {
               return
          }
          if (matrix[row][column] < previousValue) {
               return
          }
          // one more constraint here  - GO OVER THIS!!!! - make sure we don't go over the same cell multiple times 
          // once we reach a cell, we mark it as "reachable" - CHANGING TO === 1
          if (ocean[row][column] === 1) {
               return
          }

          // process the cell - CHANGING IT FROM matrix[row][column] to 1
          ocean[row][column] = 1



          // dfs traversal 
          // let previous = matrix[row][column]
          dfsTraversal(matrix, row - 1, column, matrix[row][column], ocean)
          dfsTraversal(matrix, row + 1, column, matrix[row][column], ocean)
          dfsTraversal(matrix, row, column - 1, matrix[row][column], ocean)
          dfsTraversal(matrix, row, column + 1, matrix[row][column], ocean)
     }





     // iteration 
     // iterate the top and bottom
     for (let column = 0; column < matrix[0].length; column++) {
          dfsTraversal(matrix, 0, column, Number.MIN_VALUE, pacific)
          dfsTraversal(matrix, matrix.length - 1, column, Number.MIN_VALUE, atlantic)
     }


     // iterate the right and left
     for (let row = 0; row < matrix.length; row++) {
          dfsTraversal(matrix, row, 0, Number.MIN_VALUE, pacific)
          dfsTraversal(matrix, row, matrix[0].length - 1, Number.MIN_VALUE, atlantic)
     }

     console.log(pacific)
     console.log(atlantic)

     let results = []

     for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[0].length; j++) {
               if (pacific[i][j] === 1 && atlantic[i][j] === 1 && pacific[i][j] === atlantic[i][j]) {
                    results.push([i, j])
               }
          }
     }

     return results
};