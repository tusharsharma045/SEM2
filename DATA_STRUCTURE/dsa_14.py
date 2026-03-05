class queue:
    def __init__(self):
        self.items = []
    def is_empty(self):
        return not self.items
    def enqueue(self, item):
        self.items.append(item)
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
    def peek(self):
        if not self.is_empty():
            return self.items[0]