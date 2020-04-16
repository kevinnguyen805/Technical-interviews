// Write a square root function without using built in methods


// method one - using ** exponent operator 
function squareRoot(num){

     return (num**0.5)
}



// method two - binary search 
// square root of each X must happen within [1, x/2 + 1]

function squareRoot(x){
     let left = 1
     let right = Math.floor(x/2) + 1
     let mid 

     while(left <= right){
          mid = Math.floor((left+right) / 2)
          
          if(mid * mid > x){
               right = mid-1 
          } else if (mid * mid < x){
               left = mid+1
          } else {
               return mid // because mid*mid === x
          }
     }
     return right 
}