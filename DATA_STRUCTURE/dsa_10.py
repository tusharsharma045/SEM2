# linked list  ==  linked list is a linear data structure which is used to store the data in a non - contigious manner



def insert_at_beginning(head, data):
    new_node = Node(data)
    new_node.next = head
    head = new_node
    return head


