'use strict';

const Stack = require('./stack');

const newStack = new Stack ();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log('---------- the new stack nodes-------------------')
console.log(newStack);

console.log('---------- the new stack is empty -------------------')

console.log(`the stack is empty => ${newStack.isEmpty()}`);

console.log('---------- the new stack after poped the top item-------------------')
newStack.pop();
console.log(newStack.peek());

console.log('---------- the new stack after poped the top item-------------------')
newStack.pop();
console.log(newStack.peek());
