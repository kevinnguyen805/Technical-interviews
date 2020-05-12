// Given a matrix of m x n elements(m rows, n columns), return all elements of the matrix in spiral order.

//      Example 1:

// Input:
// [
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]
// ]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Example 2:

// Input:
// [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12]
// ]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

var spiralOrder = function(matrix) {

    let nums = []
    
    if(matrix === null || matrix.length === 0) return nums
    
    let top = 0
    let bottom = matrix.length-1 
    let left = 0
    let right = matrix[0].length-1
    
    let size = matrix.length * matrix[0].length
    
    //TODO - NOTE THAT YOU START AT LEFT AND GO RIGHT 
        // TODO - OR YOU'RE GOING TOP TO BOTTOM / BOTTOM TO TOP
    while(nums.length < size){
        // first traverse the top row STARTING at left 
        for(let i = left; i<=right && nums.length < size; i++){
            nums.push(matrix[top][i])
        }
        top++
        
        // traverse right column starting at 2nd row 
        for(let i = top; i<=bottom && nums.length < size; i++){
            nums.push(matrix[i][right])
        }
        right--
        
        // traverse bottom row starting at 2nd column from the right 
        for(let i = right; i>=left && nums.length < size; i--){
            nums.push(matrix[bottom][i])
        } // TODO - MISTAKE - IF YOu'RE TRAVERSING LEFT(BACKWARDS) i--
        bottom--
        
        // traverse upwards starting at bottom row
        for(let i = bottom; i>=top && nums.length < size; i--){
            nums.push(matrix[i][left])
        } // TODO - GOING UPWARDS (BACKWARDS) MEANS GOING i--
        left++
    }
    
    return nums
};


// TODO - Pretty much this is about identifying your starting point (i) and what you are traversing 
     // this will tell you what to put for matrix[row][columns]
     // rows = TOP OR BOTTOM 
     // columns = LEFT OR RIGHT 




// TODO - TRIAL 2 WITH MOVEMENT NOTES 
var spiralOrder = function(matrix) {

    let nums = []
    if(matrix === null || matrix.length === 0) return nums
    
    // the goal of this problem is to traverse using UPDATING BOUNDARIES 
    let top = 0
    let bottom = matrix.length-1
    let left = 0
    let right = matrix[0].length-1
    
    // define the expect size we want for nums
    let size = matrix[0].length * matrix.length 
    
    while(nums.length < size){
        // first traverse top - START AT LEFT AND GO THROUGH TOP ROW 
        for(let i = left; i<=right && nums.length < size; i++){
            nums.push(matrix[top][i])
        }
        
        top++
        
        // traverse down right column  - START AT TOP - GO THROUGH RIGHT COLUMN
        for(let i = top; i<=bottom && nums.length < size; i++){
            nums.push(matrix[i][right])
        }
        right--
        
        // START AT RIGHT END - GO THROUGH BOTTOM ROW 
        for(let i=right; i>=left && nums.length < size; i--){
            nums.push(matrix[bottom][i])
        }
        bottom--
        
        // START AT BOTTOM COLUMN - TRAVERSE UPWARDS LEFT 
        for(let i=bottom; i>=top && nums.length < size; i--){
            nums.push(matrix[i][left])
        }
        left++
    }
    
    
    return nums
};







// TODO - TRIAL 1
var spiralOrder = function(matrix) {
    
    let nums = []
    
    if(matrix === null || matrix.length === 0) return nums 
    
    // take care of bounds 
    let top = 0  
    let bottom = matrix.length - 1     
    let left = 0
    let right = matrix[0].length-1
    
    // another check if we have all the numbers 
    // if nums is equal to (( matrix.length x matrix[0].length ))
    let size = matrix.length * matrix[0].length // rows x column = total elements 
    
    while(nums.length < size){
        // traverse top column first 
        for(let i = left; i<=right && nums.length < size; i++){
            nums.push(matrix[top][i])
        }
        
        // now we're at 3 - traverse downwards while NOT DOUBLE COUNTING 3
        top++ 
        for(let i = top; i<=bottom && nums.length < size; i++){
            nums.push(matrix[i][right])
            // mistake right here - matrix[top][right] instead of matrix[i][right]
            // because we need to traverse DOWNWARDS COLUMNS (+1)
        }
        
        // now we got the 6 and the 9 - scoot right pointer over one
        right--
        for(let i = right; i>= left && nums.length < size; i--){
            nums.push(matrix[bottom][i])
        }
        
        // now we got 8 and 7 - move bottom up and traverse upwards
        bottom--
        for(let i = bottom; i>= top && nums.length < size; i-- ){
            nums.push(matrix[i][left])
        }     
        
        // NOW WE NEED TO MOVE ONE COLUMN UPWARDS 
        left++
    }
  
    return nums
};

/*
[1,2,3], [4,5,6], [7,8,9]
- 3 rows
- 3 columns 
[1,2,3,6,9,8,7,4,5]



- 3 rows
- 4 columns 

1. traverse top row
2. go down in last column
3. traverse bottom row backwards (minus 1)
4. traverse first column (minus 1)
*/