# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None

#     def delete_at_end(self):
#         if self is None:
#             return None
#         if self.next is None:
#             return None  # single node -> empty list

#         temp = self
#         while temp.next and temp.next.next:
#             temp = temp.next
#         temp.next = None
#         return self


# def print_list(head):
#     if head is None:
#         print("List is empty")
#         return
#     temp = head
#     while temp:
#         print(temp.data, end=" -> " if temp.next else "\n")
#         temp = temp.next


# l1 = Node(10)
# l1.next = Node(20)
# l1.next.next = Node(30)

# print("Before delete:")
# print_list(l1)

# l1 = l1.delete_at_end()

# print("After delete:")
# print_list(l1)




# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None


# def delete_first(head):
#     if head is None:
#         return None
#     return head.next


# def print_list(head):
#     if head is None:
#         print("List is empty")
#         return
#     temp = head
#     while temp:
#         print(temp.data, end="  " if temp.next else "\n")
#         temp = temp.next



# head = Node(201)
# head.next = Node(202)
# head.next.next = Node(102)


# print_list(head)

# head = delete_first(head)

# print_list(head)



class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def delete_third_node(head):
    if head is None or head.next is None or head.next.next is None:
        return head

 
    head.next.next = head.next.next.next
    return head


def print_list(head):
    if head is None:
        print("List is empty")
        return
    temp = head
    while temp:
        print(temp.data, end=" " if temp.next else "\n")
        temp = temp.next


head = Node(201)
head.next = Node(202)
head.next.next = Node(203) 
head.next.next.next = Node(204)

print_list(head)

head = delete_third_node(head)

print_list(head)