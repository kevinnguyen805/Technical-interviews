
def reverse_list(self):
    # TO BE COMPLETED
    # if self.head.next_node is None:
    #   return self.head 
    previous = None
    current = self.head

    while current != None:
        new = current.next_node 
        current.next_node = previous 
        previous = current 
        current = new

    self.head = previous