// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//      Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {

     // create a dummy node
     let result = new ListNode(null)
     // put a pointer on the last node to add the next node
     let last = result
     // variable to hold the carry-over-number
     let carry = 0

     while (l1 || l2 || carry !== 0) {
          // check if the nodes are null because some may be longer than others 
          let valueOne = l1 ? l1.val : 0
          let valueTwo = l2 ? l2.val : 0

          // get the sum with the carry
          let sum = carry + valueOne + valueTwo

          // check if sum is over 10
          if (sum > 9) {
               sum %= 10
               carry = 1
          } else {
               carry = 0
          }
          // create a new node with the sum 
          let node = new ListNode(sum)
          // point the pointer to the next node 
          last.next = node
          // update the pointer to the last node 
          last = node

          // now we need to move 1 over for l1 and l2
          if (l1) {
               l1 = l1.next
          }
          if (l2) {
               l2 = l2.next
          }
     }

     return result.next
};








var addTwoNumbers = function (l1, l2) {

     let results = []
     let currentOne = l1
     let currentTwo = l2
     let nextOne = null
     let nextTwo = null

     while (currentOne !== null && currentTwo !== null) {
          let valueOne = currentOne.val
          let valueTwo = currentTwo.val
          let sum = valueOne + valueTwo
          if (sum > 9) {
               results.push(sum % 10)
               if (currentOne.next !== null) {
                    currentOne.next.val += 1
               }
          } else {
               results.push(sum)
          }
          nextOne = currentOne.next
          nextTwo = currentTwo.next
          currentOne = nextOne
          currentTwo = nextTwo
     }

     // REVIEW THIS - TURNING AN ARRAY TO A LINKED LIST
     let result = new ListNode(null)
     let last = result
     for (let i = 0; i < results.length; i++) {
          let node = new ListNode(results[i])
          last.next = node
          last = node
     }
     return result.next
};

// if(l1.next === null || l2.next === null){
//         let solutions = l1.val + l2.val 
//         let item = new ListNode(null)
//         let kevin = item
//         if(solutions > 9){
//             let node = new ListNode(solutions%10)
//             kevin.next = node 
//             kevin = node 
//             kevin.next = new ListNode(1)
//         } else {
//             let node = new ListNode(solutions)
//             kevin.next = node
//         }

//         return item.next
//     }