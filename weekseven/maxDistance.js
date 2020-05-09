// Given m arrays, and each array is sorted in ascending order.Now you can pick up two integers from two different arrays(each array picks one) and calculate the distance.We define the distance between two integers a and b to be their absolute difference | a - b |.Your task is to find the maximum distance.

//      Example 1:
// Input:
// [[1, 2, 3],
// [4, 5],
// [1, 2, 3]]
// Output: 4
// Explanation:
// One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.


var maxDistance = function (arrays) {
     // EVERYTHING IS IN ASCENDING ORDER 
     // first should be the smallest
     // last should be the biggest
     let max = []
     let min = []
     let distance = 0

     for (let arr of arrays) {
          max.push(arr[arr.length - 1])
          min.push(arr[0])
     }


     // way to solve it - correspond the indices to its respective array where you got the max and min 
     for (let i = 0; i < max.length; i++) {
          for (let j = 0; j < min.length; j++) {
               if (j === i) continue

               let tempDistance = Math.abs(max[i] - min[j])
               if (tempDistance > distance) {
                    distance = tempDistance
               }
          }
     }
     return distance
};