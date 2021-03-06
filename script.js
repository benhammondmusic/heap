const MinHeap = require('./heap');

const testHeap = new MinHeap();
testHeap.insert(2);
testHeap.insert(1);
testHeap.insert(3);
testHeap.insert(3);
testHeap.insert(30);
testHeap.insert(300);
testHeap.insert(30);
testHeap.insert(1);
testHeap.insert(3);
testHeap.insert(13000);
testHeap.insert(2300);
testHeap.insert(130);
testHeap.insert(8355);
testHeap.insert(235);
testHeap.insert(43);
testHeap.insert(535);
testHeap.insert(635);
testHeap.insert(73555);
testHeap.insert(834);
testHeap.insert(933);
console.log('REMOVING THE SMALLEST ITEM WHICH WAS: ', testHeap.pop());
testHeap.display();
testHeap.pop();
testHeap.pop();
testHeap.pop();
testHeap.pop();
testHeap.insert(3);
testHeap.display();
testHeap.getHeight();
const resultIndex = testHeap.contains(130);
console.log(`result of contains(130): ${resultIndex}`);

while (testHeap.size() > 1) {
  testHeap.pop();
  testHeap.display();
}
