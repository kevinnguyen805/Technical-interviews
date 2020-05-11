// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

var intersect = function(nums1, nums2) {
    
    let hash = {}
    
    for(let i = 0; i<nums1.length; i++){
        if(!(nums1[i] in hash)){
            hash[nums1[i]] = 1
        } else {
            hash[nums1[i]]++
        }
    }
    
    let results = []
    for(let j=0; j<nums2.length; j++){
        if(hash[nums2[j]] > 0){
            results.push(nums2[j])
            hash[nums2[j]]--
        }
    }
    return results
};