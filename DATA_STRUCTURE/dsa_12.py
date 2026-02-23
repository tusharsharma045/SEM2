class node:
    def __init__(self, head = None,next = None,prev = None):
        self.head = head
        self.next = next
        self.prev = prev
        

class doubly_linked_list:
    def __init__(self, head = None):
        self.head = head
      
    def insert_at_beginning(self, data):
        new_node = node(data)
        if not self.head:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
    def print_list(self):
        if self.head is None:
            print("List is empty")
            return
        temp = self.head
        while temp:
            print(temp.head, end="  " if temp.next else "\n")
            temp = temp.next

L1 = doubly_linked_list()
L1.insert_at_beginning(100)
L1.insert_at_beginning(200)
L1.print_list()