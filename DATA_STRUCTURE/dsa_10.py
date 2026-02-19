# linked list  ==  linked list is a linear data structure which is used to store the data in a non - contigious manner


class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self,head = None):
        self.head = head

    def insert_at_beginning(self, data):
        node = Node(data, self.head)
        self.head = node


    def insert_at_end(self,data):
        node = Node(data,self.head)



    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end = " ")
            temp = temp.next
        print(None)

L1 = LinkedList()
L1.insert_at_beginning(10)
L1.insert_at_beginning(20)
L1.insert_at_beginning(100)
L1.display