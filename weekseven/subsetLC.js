// Given a set of distinct integers, nums, return all possible subsets(the power set).

//      Note: The solution set must not contain duplicate subsets.

//           Example:

// Input: nums = [1, 2, 3]
// Output:
// [
//      [3],
//      [1],
//      [2],
//      [1, 2, 3],
//      [1, 3],
//      [2, 3],
//      [1, 2],
//      []
// ]

var subsets = function(nums) {

    let results = []
    
    let helper = (index, nums, currentArr, results) => {
        if(index > nums.length) return 
        
        results.push(currentArr)
        
        for(let i = index; i<nums.length; i++){
            // currentArr.push(nums[i]) - incorrect - generates permutations for ALL []
            let newArr = [...currentArr] 
            // COPY THE ARRAY NOT BY REFERENCE BUT ENTIRELY NEW STRUCTURE
            newArr.push(nums[i])
            helper(i+1, nums, newArr, results)
        }
    }
    
    helper(0, nums, [], results)
  
    return results 
};

// error - [[1,2,3,3,2,3,3],[1,2,3,3,2,3,3],[1,2,3,3,2,3,3],[1,2,3,3,2,3,3],[1,2,3,3,2,3,3],[1,2,3,3,2,3,3],[1,2,3,3,2,3,3],[1,2,3,3,2,3,3]]




var subsets = function (nums) {
     let subsets = []

     let generateSubsets = (index, nums, arr, subsets) => {
          if (index > nums.length) {
               return
          }
          subsets.push(arr)
          for (let i = index; i < nums.length; i++) {
               // instead of pushing arr.push(nums[i]) - we used spread operator
               generateSubsets(i + 1, nums, [...arr, nums[i]], subsets)  // moving forward 
          }
          return subsets
     }
     generateSubsets(0, nums, [], subsets)

     return subsets
};


