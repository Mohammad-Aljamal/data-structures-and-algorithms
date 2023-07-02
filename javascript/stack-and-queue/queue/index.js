'use strict';

const Queue = require('./queue');

const newQueue = new Queue ();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);

console.log('---------- the new queue nodes-------------------')
console.log(newQueue);

console.log('---------- the new queue is empty -------------------')

console.log(`${newQueue.isEmpty()}`);

console.log('---------- the new queue after dequeueed the top item-------------------')
newQueue.dequeue();
console.log(newQueue.peek());

console.log('---------- the new queue after dequeueed the top item-------------------')
newQueue.dequeue();
console.log(newQueue.peek());

console.log(newQueue);

