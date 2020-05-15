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


// def reverse_list(self):
//     # TO BE COMPLETED
//     # if self.head.next_node is None:
//     #   return self.head 
//     previous = None
//     current = self.head

//     while current != None:
//         new = current.next_node 
//         current.next_node = previous 
//         previous = current 
//         current = new

//     self.head = previous