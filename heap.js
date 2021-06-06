/* 

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

*/

class MinHeap {
  constructor() {
    console.log('Initializing Heap');
    this.priorityQueue = [];
  }

  peek() {
    console.log('peek - return value of smallest element, the top level item, without removing from the heap');
    if (this.priorityQueue.length === 0) return 'Heap is empty';
    return this.priorityQueue[0];
  }

  pop() {
    let min = this.peek();
    console.log('NEED TO IMPLEMENT');
    console.log('pop - remove smallest element, the top level item, from the heap and return it ');
    return min;
  }

  heapify() {
    console.log('heapify - reorganize items so that every child is greater value than its parent');
  }

  insert(item) {
    console.log("insert - add an item to the end of the queue, then swap it with a parent node as needed until it's greater than it's new child and smaller than it's new parent");
    this.priorityQueue.push(item);
    // while new item is great than its parent
    // swap item and parent
  }

  remove(item) {
    console.log('remove - search the entire structure for a particular item, remove it, and then heapify to keep heap structure ordered properly');
  }
}

module.exports = MinHeap;
