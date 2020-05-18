// reverse a linked list

function reverse_list(head){
     if(head.next === null){
          return head
     }

     let previous = null 
     let current = head 

     while(current !== null){
          let newNode = current.next 
          current.next = previous 
          previous = current 
          current = newNode
     }

     head = previous 
     return head
}


// traverse a linked list - poppulate array from LL
// [5,3,10]
function traverse(head){
     if(head.next === null){
          return head 
     }

     let arr = []
     let current = head 
     while(current.next !== null){
          arr.push(current.val)
          current = current.next
     }
     
     console.log(arr)
     //[5,3,10]
}