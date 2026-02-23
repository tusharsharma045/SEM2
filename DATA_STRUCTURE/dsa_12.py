class node:
    def __init__(self, head = None,next = None,prev = None):
        self.head = head
        self.next = next
        self.prev = prev
        

class doubly_linked_list:
    def __init__(self, head = None):
        self.head = head
      
    def insert_at_end(self, data):
        new_node = node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
            new_node.prev = current