// Given a non - empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent - child connections.The path must contain at least one node and does not need to go through the root.

//      Example 1:

// Input: [1, 2, 3]

// 1
//      / \
// 2   3

// Output: 6
// Example 2:

// Input: [-10, 9, 20, null, null, 15, 7]

//      - 10
//      / \
// 9  20
//      /  \
// 15   7

// Output: 42

var maxPathSum = function (root) {
     if (!root) return 0

     let helper = (node) => {
          if (!node) return 0

          // returns the path sum of the particular node down left/right
          let leftPath = Math.max(helper(node.left), 0)
          let rightPath = Math.max(helper(node.right), 0)

          let sumPath = node.val + leftPath + rightPath
          maxSum = Math.max(sumPath, maxSum)

          return node.val + Math.max(leftPath, rightPath)
     }

     let maxSum = -Number.MAX_VALUE
     helper(root)
     return maxSum

};