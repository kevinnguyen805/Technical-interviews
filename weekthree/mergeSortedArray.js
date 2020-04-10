
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//      Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.
//      Example:

// Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3

// Output: [1, 2, 2, 3, 5, 6]


var merge = function (nums1, m, nums2, n) {
     let posOne = m - 1
     let posTwo = n - 1
     let pointer = nums1.length - 1

     while (posOne >= 0 && posTwo >= 0) {
          if (nums1[posOne] < nums2[posTwo]) {
               nums1[pointer] = nums2[posTwo]
               pointer--
               posTwo--
          } else {
               nums1[pointer] = nums1[posOne]
               pointer--
               posOne--
          }
     }

     while (posTwo >= 0) {
          nums1[pointer] = nums2[posTwo]
          posTwo--
          pointer--
     }

     return nums1
};