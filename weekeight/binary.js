// Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

// Here's a sample binary tree node class:

//   class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insertLeft(value) {
//     this.left = new BinaryTreeNode(value);
//     return this.left;
//   }

//   insertRight(value) {
//     this.right = new BinaryTreeNode(value);
//     return this.right;
//   }
// }



// One way to break the problem down is to come up with a way to confirm that a single node is in a valid place relative to its ancestors. Then if every node passes this test, our whole tree is a valid BST.

// What makes a given node "correct" relative to its ancestors in a BST? Two things:

// if a node is in the ancestor's left subtree, then it must be less than the ancestor, and
// if a node is in the ancestor's right subtree, then it must be greater than the ancestor.
// So we could do a walk through our binary tree, keeping track of the ancestors for each node and whether the node should be greater than or less than each of them. If each of these greater-than or less-than relationships holds true for each node, our BST is valid.

// The simplest ways to traverse the tree are depth-first ↴ and breadth-first. ↴ They have the same time cost (they each visit each node once). Depth-first traversal of a tree uses memory proportional to the depth of the tree, while breadth-first traversal uses memory proportional to the breadth of the tree (how many nodes there are on the "level" that has the most nodes).

// Because the tree's breadth can as much as double each time it gets one level deeper, depth-first traversal is likely to be more space-efficient than breadth-first traversal, though they are strictly both O(n)O(n) additional space in the worst case. The space savings are obvious if we know our binary tree is balanced—its depth will be O(\lg{n})O(lgn) and its breadth will be O(n)O(n).

// But we're not just storing the nodes themselves in memory, we're also storing the value from each ancestor and whether it should be less than or greater than the given node. Each node has O(n)O(n) ancestors (O(\lg{n})O(lgn) for a balanced binary tree), so that gives us O(n^2)O(n 
// 2
//  ) additional memory cost (O(n\lg{n})O(nlgn) for a balanced binary tree). We can do better.


  function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;

  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value)
    && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}


  function isBinarySearchTree(treeRoot) {

  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {

      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {

      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}