// Reverse a singly linked list.

//      Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both ?


var reverseList = function (head) {
     let previous = null
     let current = head
     let nextNode = null

     while (current !== null) {
          nextNode = current.next
          current.next = previous
          previous = current
          current = nextNode
     }

     return previous
};



