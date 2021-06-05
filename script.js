const MinHeap = require('./heap');

const testHeap = new MinHeap();

console.log(testHeap.peek());
console.log(testHeap.pop());
testHeap.insert();
testHeap.remove();
