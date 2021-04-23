""" 

https://www.geeksforgeeks.org/min-heap-in-python/

A Min-Heap is a complete binary tree in which the value in each internal node is smaller than or equal to the values in the children of that node. 
Mapping the elements of a heap into an array is trivial: if a node is stored at index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.

How is Min Heap represented ? 
A Min Heap is a Complete Binary Tree. A Min heap is typically represented as an array. The root element will be at Arr[0]. For any ith node, i.e., Arr[i]:

Arr[(i -1) / 2] returns its parent node.
Arr[(2 * i) + 1] returns its left child node.
Arr[(2 * i) + 2] returns its right child node.
Operations on Min Heap : 

peek()/getMin(): It returns the root element of Min Heap. Time Complexity of this operation is O(1).
pop()/extractMin(): Removes the minimum element from MinHeap. Time Complexity of this Operation is O(Log n) as this operation needs to maintain the heap property (by calling heapify()) after removing root.
insert(): Inserting a new key takes O(Log n) time. We add a new key at the end of the tree. If new key is larger than its parent, then we don’t need to do anything. Otherwise, we need to traverse up to fix the violated heap property.


 """

class Min_Heap():
    def __init__(self):
        self.array = []

    def peek(self):
        print("Peek(): view root node")
        return self.array[0]

    def pop(self):
        print("Pop(): remove and return root node, re organizing remaining heap")
    
    def push(self, item):
        print("Push(): add to end of queue, moving up in line based on priority")

bens_heap = Min_Heap()

