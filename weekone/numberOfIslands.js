// Given a 2d grid map of '1's(land) and '0's(water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

//      Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

var numIslands = function (grid) {

     let counter = 0

     let dfstraversal = (grid, row, column) => {
          // define constraints 
          if (row < 0 || column < 0 || row > grid.length - 1 || column > grid[0].length - 1) {
               return
          }
          // MISTAKE RIGHT HERE - FORGOT OTHER CONSTRAINTS 
          if (grid[row][column] === '0') {
               return
          }


          // process grid 
          grid[row][column] = '0'
          // counter++ 

          // dfs - white out all 1's that it is adjacent to 
          dfstraversal(grid, row - 1, column)
          dfstraversal(grid, row + 1, column)
          dfstraversal(grid, row, column - 1)
          dfstraversal(grid, row, column + 1)
     }

     for (let i = 0; i < grid.length; i++) {
          for (let j = 0; j < grid[0].length; j++) {
               if (grid[i][j] === '1') {
                    dfstraversal(grid, i, j)
                    counter++
               }
          }
     }
     return counter

};


/*
Gameplan
1. create grid
2. create


*/