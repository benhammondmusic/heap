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

  display() {
    let columnCounter = 0;
    let rowCounter = 0;
    let rowString = '';
    let multiplier = 1;
    for (let item of this.priorityQueue) {
      multiplier = 90 / 2 ** rowCounter - item.toString().length / 2;
      let columnSpacer = ' '.repeat(multiplier);
      rowString += columnSpacer + item + columnSpacer;
      columnCounter++;
      if (columnCounter >= 2 ** rowCounter) {
        // console.log('X = ', multiplier);
        console.log(rowString, '\n');
        columnCounter = 0;
        rowCounter++;
        rowString = '';
      }
    }
    console.log(rowString);
  }

  size() {
    return this.priorityQueue.length;
  }
  peek() {
    console.log('peek ');
    if (this.priorityQueue.length === 0) return 'Heap is empty';
    return this.priorityQueue[0];
  }

  pop() {
    console.log('pop');
    // save smallest item to later return
    const min = this.peek();

    // remove smallest item, put last item in its place
    this.priorityQueue[0] = this.priorityQueue.pop();

    // fix the heap by starting at the top and recursing through to always be sure that children are smaller or equal to their parent
    this.heapify(0);

    return min;
  }

  heapify(startingIndex) {
    console.log('heapify');
    console.log('PARENT', this.priorityQueue[startingIndex], 'AT [', startingIndex, ']');

    let leftChildIndex = this.getLeftChildIndex(startingIndex);
    let rightChildIndex = this.getRightChildIndex(startingIndex);
    let smallestIndex = startingIndex;

    let length = this.priorityQueue.length;

    // if leftChild exists
    // and if the left child is smaller than the current parent
    // store it as the new smallestIndex
    if (leftChildIndex <= length && this.priorityQueue[leftChildIndex] < this.priorityQueue[smallestIndex]) {
      console.log(this.priorityQueue[leftChildIndex], 'AT [', leftChildIndex, '] is smaller than ', this.priorityQueue[smallestIndex], ' AT [', smallestIndex, ']');
      smallestIndex = leftChildIndex;
    }
    // if right child exists and  is smaller than the current parent
    // store it as the new smallestIndex

    if (rightChildIndex <= length && this.priorityQueue[rightChildIndex] < this.priorityQueue[smallestIndex]) {
      console.log(this.priorityQueue[rightChildIndex], 'AT [', rightChildIndex, '] is smaller than ', this.priorityQueue[smallestIndex], ' AT [', smallestIndex, ']');
      smallestIndex = rightChildIndex;
    }
    // if startingIndex is no longer the smallest of the three (parent, left child, right child)
    // swap the values of the real smallest and the current parent
    // recursively run heapify() on the new smallest, which is the correct child node
    if (startingIndex !== smallestIndex) {
      let tempNode = this.priorityQueue[smallestIndex];
      this.priorityQueue[smallestIndex] = this.priorityQueue[startingIndex];
      this.priorityQueue[startingIndex] = tempNode;
      this.heapify(smallestIndex);
    }
  }

  length() {
    return this.priorityQueue.length;
  }

  insert(item) {
    console.log('inserting', item);
    this.priorityQueue.push(item);

    if (this.priorityQueue.length === 1) return;

    let itemIndex = this.priorityQueue.length - 1;
    let parentIndex = Math.floor(itemIndex / 2);
    // while new item is great than its parent
    while (this.priorityQueue[itemIndex] < this.priorityQueue[parentIndex]) {
      console.log('ITEM IS SMALLER THAN PARENT');
      console.log(`SWAPPING ${this.priorityQueue[itemIndex]} with ${this.priorityQueue[parentIndex]}`);

      // swap item value and parent item value
      let tempItem = this.priorityQueue[parentIndex];
      this.priorityQueue[parentIndex] = this.priorityQueue[itemIndex];
      this.priorityQueue[itemIndex] = tempItem;

      // swap index vars
      let tempIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
      itemIndex = tempIndex;
    }
  }

  getHeight() {
    const height = Math.floor(Math.log2(this.priorityQueue.length)) + 1;
    console.log('Q has ', this.priorityQueue.length, ' items, and height of:', height);
    return height;
  }

  // return true is a value is present in the heap
  contains(item, startingIndex = 0) {
    console.log(`Searching for ${item}; current top-item is ${this.priorityQueue[startingIndex]} at index [${startingIndex}]`);
    const parentNode = this.priorityQueue[startingIndex];

    // check parent if initial contains call
    if (parentNode === item) {
      console.log(`FOUND IT AT [${startingIndex}]`);
      return true;
    }

    // if its not the parent recurse on both children
    const leftChildIndex = this.getLeftChildIndex(startingIndex);
    if (item > parentNode && leftChildIndex < this.priorityQueue.length) {
      console.log('recursing on left child');
      if (this.contains(item, leftChildIndex)) return true;
    }

    // if its not the parent or either child, recurse on both children
    const rightChildIndex = this.getRightChildIndex(startingIndex);
    if (item > parentNode && rightChildIndex < this.priorityQueue.length) {
      console.log('recursing on right child');
      if (this.contains(item, rightChildIndex)) return true;
    }

    console.log(item, 'not found yet');
    return -1;
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
}

module.exports = MinHeap;
