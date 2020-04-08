// You are given two arrays(without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.If it does not exist, output - 1 for this number.

//      Example 1:
//      Input: nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2].
//           Output: [-1, 3, -1]
// Explanation:
// For number 4 in the first array, you cannot find the next greater number for it in the second array, so output - 1.
// For number 1 in the first array, the next greater number for it in the second array is 3.
// For number 2 in the first array, there is no next greater number for it in the second array, so output - 1.
// Example 2:
// Input: nums1 = [2, 4], nums2 = [1, 2, 3, 4].
//      Output: [3, -1]
// Explanation:
// For number 2 in the first array, the next greater number for it in the second array is 3.
// For number 4 in the first array, there is no next greater number for it in the second array, so output - 1.


// *TAKEAWAY - backtracking by creating an array preset with -1 .... then use indexOf() to 'binary search' through second array 

function nextElement(arr1, arr2){
     let solution = new Array(arr1.length).fill(-1)

     for(let i = 0; i<arr1.length; i++){
          let index = arr2.indexOf(arr1[i])

          for(let j=index; j<arr2.length; j++){
               if(arr2[j] > arr1[i]){
                    solution[i] = arr2[j]
                    break
               }
          }
     }

     return solution
}


// * ATTEMPT 2
var nextGreaterElement = function (nums1, nums2) {
     // we need a while loop to pop all the items off the stack
     // we aren't focusing on the first DIRECTLY right item... just the first item in general 

     // so we're going to use a stack and hash table 
     // hash table is to keep track of there is a number to the right that is larger than that number 
     // stack is to keep track of PREVIOUS numbers to compare to the current ones (right)

     let hash = {}
     let stack = []
     for (let num of nums2) {
          // if there are still items in the stack AND the current item is larger than the last item in the stack (because the last item is the one directly before it)
          // we need a while loop to ensure we're not looking at direct neighbors and continue looping through nums 2
          while (stack.length && stack[stack.length - 1] < num) {
               // if true, we take off the last item and map to larger number
               hash[stack.pop()] = num
          }

          stack.push(num)
     }

     // now change the items in place
     for (let i = 0; i < nums1.length; i++) {
          if (nums1[i] in hash) {
               nums1[i] = hash[nums1[i]]
          } else {
               nums1[i] = -1
          }
     }

     return nums1
};




// * ATTEMPT 3

var nextGreaterElement = function (nums1, nums2) {

     let hash = {}
     let stack = []     // THE STACK HOLDS THE GREATEST ELEMENT

     // 1. in this for-loop you are checking each # in nums2 if THE FIRST NUMBER TO ITS RIGHT IS GREATER 
     // 2. if it is -- map it to the hash map 
     for (let num of nums2) {
          while (stack.length && stack[stack.length - 1] < num) {
               let item = stack.pop()
               hash[item] = num
          }
          stack.push(num)
     }
     console.log(hash)

     // now you have a hashmap of all the numbers (keys) with numbers to the right that are greater (values)
     // loop through nums1 - instead of making a new array, just modify

     for (let i = 0; i < nums1.length; i++) {
          if (nums1[i] in hash) {
               nums1[i] = hash[nums1[i]]
          } else {
               nums1[i] = -1
          }
     }

     return nums1
};
