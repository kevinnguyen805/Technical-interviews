// Given a binary tree and a sum, determine if the tree has a root - to - leaf path such that adding up all the values along the path equals the given sum.

//      Note: A leaf is a node with no children.

//           Example:

// Given the below binary tree and sum = 22,

//      5
//      / \
// 4   8
//      / / \
// 11  13  4
//      /  \      \
// 7    2      1
// return true, as there exist a root - to - leaf path 5 -> 4 -> 11 -> 2 which sum is 22.


var hasPathSum = function (root, sum) {
     if (root === null) return false
     let sumPath = false

     let helper = (node, currentSum) => {
          if (node === null) return

          if (node.left === null && node.right === null && currentSum - node.val === 0) {
               sumPath = true
               return
          }

          if (node.left) {
               helper(node.left, currentSum - node.val)
          }
          if (node.right) {
               helper(node.right, currentSum - node.val)
          }
     }
     helper(root, sum)
     // helper(root.left, sum-root.val)
     // helper(root.right, sum-root.val)
     return sumPath
     // if(root === null){
     //     return false 
     // } else if (root.left === null && root.right === null && sum - root.val === 0){
     //     return true 
     // } else {
     //     return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val)
     // }
};