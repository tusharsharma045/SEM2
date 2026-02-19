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

    def displlay(self):
        temp = self.head
        while temp:
            print(temp.data, end = " ")
            temp = temp.next