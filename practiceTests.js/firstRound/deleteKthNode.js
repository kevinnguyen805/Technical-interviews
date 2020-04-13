// Given a linked list, remove the n - th node from the end of list and return its head.

//      Example:

// Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.

// After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass ?


var removeNthFromEnd = function (head, n) {
     // * TAKE AWAY FROM THIS PROBLEM IS USING TWO POINTERS TO SET YOURSELF N-NODES APART 

     // using two pointers
     let current = head
     let result = head

     // first we traverse until we are n-nodes part 
     for (let i = 0; i < n; i++) {
          current = current.next
     }

     if (current === null) return head.next // crucial check - if n is longer than nodes, just return next node

     // now we can traverse the resulting head until the 'current' node hits the end
     // mistake: current.next !== null so CURRENT ends at the last node, rather than at NULL
     while (current !== null && current.next !== null) {
          current = current.next
          result = result.next
     }

     // now current will be at the end (after tail) and result will be n spaces behind 
     // so we skip
     result.next = result.next.next

     return head
};



var removeNthFromEnd = function (head, n) {
     let current = head
     let dummy = new ListNode(null)
     dummy.next = head
     let count = 0

     while (current !== null) {
          current = current.next
          count++
     }
     count -= n

     let result = dummy

     while (count > 0) {
          count--
          result = result.next
     }

     result.next = result.next.next

     return dummy.next

};