function condense(head) {
     // Write your code here
     let hash = {}
     let arr = []
     let current = head
     while (current !== null) {
          if (!(current.data in hash)) {
               hash[current.data] = true
               arr.push(current.data)
          }
          current = current.next
     }
     console.log(arr)

     let previous = null
     let result = head
     let i = 0
     while (result !== null) {
          if (arr[i] !== result.data) {
               result = result.next
               previous.next = result
          } else {
               previous = result
               result = result.next
               i++
          }
     }
     return head
}